import tornado.web
from utils import SessionStore
import uuid
from utils import GameLogicClient
from dataclasses import asdict
from typing import Dict, Optional, Awaitable
import json


class UpdateSessionHandler(tornado.web.RequestHandler):
    """Turn this async!
    https://github.com/tornadoweb/tornado/blob/stable/demos/chat/chatdemo.py
    """

    def data_received(self, chunk: bytes) -> Optional[Awaitable[None]]:
        pass

    def post(self):
        """
        If no key in payload, create a session and return initial payload
        if key, update the session
        """
        session_id = self.get_argument('session_id', default=None)
        session_store = SessionStore()
        if not session_id:
            potential_unique_id = str(uuid.uuid4().fields[-1])[:8]
            for i in range(0, 51):
                if i == 50:
                    raise MemoryError("Unique ID unable to generate")
                if not session_store.contains_session(potential_unique_id):
                    break
                potential_unique_id = str(uuid.uuid4().fields[-1])[:8]

            unique_id = potential_unique_id
            game_logic_client = GameLogicClient()
            new_game_state: Dict = asdict(game_logic_client.generate_game(session_id=unique_id))
            session_store.store_session(session_id=unique_id, game_state=new_game_state)
            self.write(json.dumps(new_game_state))
        else:
            game_state_json = self.get_argument('game_state')
            game_state: Dict = json.loads(game_state_json)
            session_store.store_session(session_id=session_id, game_state=game_state)
            self.write(game_state_json)



