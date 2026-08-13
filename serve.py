from http.server import SimpleHTTPRequestHandler, HTTPServer
import mimetypes
import os

# Ensure correct MIME types for Unity WebGL
mimetypes.add_type('application/wasm', '.wasm')
mimetypes.add_type('application/octet-stream', '.data')

port = 8000
root = os.path.dirname(__file__) or '.'
os.chdir(root)

class Handler(SimpleHTTPRequestHandler):
    # Optional: allow CORS for easier debugging
    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        super().end_headers()

httpd = HTTPServer(('', port), Handler)
print(f"Serving {os.getcwd()} at http://localhost:{port}")
httpd.serve_forever()