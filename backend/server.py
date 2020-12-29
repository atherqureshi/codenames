import tornado.ioloop
import tornado.web


class MainHandler(tornado.web.RequestHandler):
    def get(self):
        self.write({'message': "Hello, world"})


def make_app():
    return tornado.web.Application(
        debug=True,
        handlers=[
            (r"/hello-world", MainHandler),
        ])


if __name__ == "__main__":
    app = make_app()
    print("Starting tornado backend server")
    app.listen(8000)
    tornado.ioloop.IOLoop.current().start()
