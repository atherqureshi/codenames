from typing import Dict, Optional
from redis import Redis
import json


class SessionStore:

    def __init__(self):
        self.client = Redis(host="redis", port=6379)

    def contains_session(self, session_id: str) -> bool:
        return self.client.exists(session_id)

    def store_session(self, session_id: str, game_state: dict) -> None:
        self.client.set(name=session_id, value=json.dumps(game_state), ex=60*60*24)

    def get_session(self, session_id) -> Optional[Dict]:
        data: Optional[bytes] = self.client.get(session_id)
        if data:
            return json.loads(self.client.get(session_id))
        return None
