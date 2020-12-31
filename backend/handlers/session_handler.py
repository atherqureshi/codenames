import tornado.web
from utils import MongoDbClient
import uuid


class SessionHandler(tornado.web.RequestHandler):

    def get(self):
        """
        return session payload from mongodb
        :return:
        """
        pass

    def post(self):
        """
        If no key in payload, create a session and return initial payload
        if key, update the session
        :return:
        """
        session_id = self.get_argument('session_id', default=None)
        mongo_client = MongoDbClient()
        if not session_id:
            potential_unique_id = str(uuid.uuid4().fields[-1])[:8]
            for i in range(0, 51):
                if i == 50:
                    raise MemoryError("Unique ID unable to generate")
                if not mongo_client.contains(potential_unique_id):
                    break
                potential_unique_id = str(uuid.uuid4().fields[-1])[:8]

            unique_id = potential_unique_id


        self.write("inserted value into MongoDB")
