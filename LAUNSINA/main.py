from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
import os

PORT = 8000
DIRECTORY = os.path.dirname(os.path.abspath(__file__))


class LocalHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def log_message(self, format, *args):
        print(f"[{self.address_string()}] {format % args}")


if __name__ == "__main__":
    print(f"Serving Launsina on http://localhost:{PORT}")
    server = ThreadingHTTPServer(("0.0.0.0", PORT), LocalHandler)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nStopping server...")
    finally:
        server.server_close()
