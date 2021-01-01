import tornado.web
from utils import FireBaseClient
import uuid
from utils import GameLogicClient
from dataclasses import asdict
from typing import Dict, Optional, Awaitable
import json


class SessionHandler(tornado.web.RequestHandler):
    """Turn this async!
    https://github.com/tornadoweb/tornado/blob/stable/demos/chat/chatdemo.py
    """

    def data_received(self, chunk: bytes) -> Optional[Awaitable[None]]:
        pass

    def get(self):
        """
        return session payload from mongodb if the session has changed, use long polling
        :return:
        """
        session_id = self.get_argument('session_id')
        mongo_client = FireBaseClient()
        return mongo_client.get_session(session_id=session_id)

    def post(self):
        """
        If no key in payload, create a session and return initial payload
        if key, update the session
        :return:
        """
        session_id = self.get_argument('session_id', default=None)
        mongo_client = FireBaseClient()
        if not session_id:
            potential_unique_id = str(uuid.uuid4().fields[-1])[:8]
            for i in range(0, 51):
                if i == 50:
                    raise MemoryError("Unique ID unable to generate")
                if not mongo_client.contains_session(potential_unique_id):
                    break
                potential_unique_id = str(uuid.uuid4().fields[-1])[:8]

            unique_id = potential_unique_id
            game_logic_client = GameLogicClient()
            new_game_state: Dict = asdict(game_logic_client.generate_game(session_id=unique_id))
            mongo_client.store_session(session_id=unique_id, game_state=new_game_state)
        else:
            game_state: Dict = json.loads(self.get_argument('game_state'))
            mongo_client.store_session(session_id=session_id, game_state=game_state)




