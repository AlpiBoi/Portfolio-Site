const express = require('express');
const path = require('path');
const mime = require('mime');

const app = express();
const root = path.join(__dirname);

// Set Content-Encoding and Content-Type for .br files so browsers can decompress
app.use((req, res, next) => {
    if (req.url.endsWith('.br')) {
        const original = req.url.slice(0, -3); // remove .br to detect MIME
        res.setHeader('Content-Encoding', 'br');
        res.setHeader('Content-Type', mime.getType(original) || 'application/octet-stream');
    }
    // Ensure .wasm served with correct MIME if not covered
    if (req.url.endsWith('.wasm')) {
        res.setHeader('Content-Type', 'application/wasm');
    }
    next();
});

app.use(express.static(root));
const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Serving ${root} on http://localhost:${port}`));