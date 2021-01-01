from typing import Optional, Awaitable
import tornado.web
from utils import SessionStore
import logging

logger = logging.getLogger(__name__)


class GetSessionHandler(tornado.web.RequestHandler):

    def data_received(self, chunk: bytes) -> Optional[Awaitable[None]]:
        pass

    def get(self, session_id: str):
        json_payload = SessionStore().get_session(session_id=session_id)
        if not json_payload:
            raise tornado.web.HTTPError(status_code=400, reason="Session not found")
        self.write(json_payload)
