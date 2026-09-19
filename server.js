const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    //res.end("<h1>Hello from Node!</h1>");
    fs.readFile("index.html", "utf8", (err, data) => {    
        if (err) {
            res.writeHead(500);
            res.end("Error reading index.html");
            return;
        }

        res.end(data);
    });
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});