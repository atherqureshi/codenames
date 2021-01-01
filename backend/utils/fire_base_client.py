from typing import Dict
import pyrebase


class FireBaseClient:
    """
        DO THIS ATHER forget this shitty library
        https://stackoverflow.com/questions/54868011/how-to-use-google-cloud-firestore-local-emulator-for-python-and-for-testing-purp
        every operation must update TTL
        make this async!
    """

    def __init__(self):
        self.db = pyrebase.initialize_app({
            'apiKey': None,
            "databaseURL": "firestore:8200",
            'authDomain': 'local-codenames',
            "storageBucket": "local-codenames"
        }).database()

    def contains_session(self, session_id: str) -> bool:
        pass

    def store_session(self, session_id: str, game_state: dict) -> None:
        self.db.child(session_id).set(game_state)

    def get_session(self, session_id) -> Dict:
        return self.db.child(session_id).get()
