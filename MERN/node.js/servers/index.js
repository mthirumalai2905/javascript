const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    // Log the request
    const requestData = {
        method: req.method,
        url: req.url,
        headers: req.headers
    };
    console.log(requestData);

    // Write the request details to a file
    fs.appendFile('requests.txt', JSON.stringify(requestData, null, 2) + '\n', (err) => {
        switch(req.url){
            case "/":
                res.end("HomePAge");
                break;
            case "/about":
                res.end("I am Luffy");
                break;
            default:
                res.end("$)$ 404")
        }
        if (err) {
            console.error('Error writing to file:', err);
        }
    });

    // Send response to the client
    // res.end('Hello from the server');
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});
