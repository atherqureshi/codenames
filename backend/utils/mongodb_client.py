from pymongo import MongoClient


class MongoDbClient:
    """
        every operation must update TTL
    """

    def __init__(self):
        self.client = MongoClient(
            host=["mongo:27017"],
            serverSelectionTimeoutMS=3000,  # 3 second timeout
            username="root",
            password="example",
        )

    def contains(self, session_id: str) -> bool:
        pass
