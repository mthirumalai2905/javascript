const http = require('http');
const fs = require('fs');

function generateHTML() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Digital Clock</title>
        </head>
        <body>
            <div class="clock">
                <span>${hours}</span> :
                <span>${minutes}</span> :
                <span>${seconds}</span>
            </div>
        </body>
        </html>
    `;
}

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    const htmlContent = generateHTML();
    res.end(htmlContent);
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
