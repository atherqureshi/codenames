import tornado.ioloop
import tornado.web
from handlers import UpdateSessionHandler, GetSessionHandler


def make_app():
    return tornado.web.Application(
        debug=True,
        handlers=[
            (r"/update-session", UpdateSessionHandler),
            (r"/session/([0-9]{8})", GetSessionHandler),
        ])


if __name__ == "__main__":
    app = make_app()
    print("Starting tornado backend server")
    app.listen(8000)
    tornado.ioloop.IOLoop.current().start()
