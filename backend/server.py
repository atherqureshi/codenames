import tornado.ioloop
import tornado.web
from handlers import SessionHandler


def make_app():
    return tornado.web.Application(
        debug=True,
        handlers=[
            (r"/session", SessionHandler)
        ])


if __name__ == "__main__":
    app = make_app()
    print("Starting tornado backend server")
    app.listen(8000)
    tornado.ioloop.IOLoop.current().start()
