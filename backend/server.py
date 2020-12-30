import tornado.ioloop
import tornado.web
from pymongo import MongoClient


class MainHandler(tornado.web.RequestHandler):
    def get(self):
        self.write({'message': "Hello, world"})


class SessionHandler(tornado.web.RequestHandler):
    def post(self):
        client = MongoClient(
            host=["mongo:27017"],
            serverSelectionTimeoutMS=3000,  # 3 second timeout
            username="root",
            password="example",
        )
        print("server version:", client.server_info()["version"])
        db = client.db
        db.codenames.insert_one({'TEST_KEY_1337': 'This is a test value'})
        self.write("inserted value into MongoDB")


def make_app():
    return tornado.web.Application(
        debug=True,
        handlers=[
            (r"/hello-world", MainHandler),
            (r"/create-session", SessionHandler)
        ])


if __name__ == "__main__":
    app = make_app()
    print("Starting tornado backend server")
    app.listen(8000)
    tornado.ioloop.IOLoop.current().start()
