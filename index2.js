const http = require("http");
const url = require("url");
const fs = require("fs");
const { buffer } = require("stream/consumers");

http.createServer((req, res) => {
    res.write("Hello")
  if(req.url === "/read-file" && req.method === "/GET");
    const readable = fs.createReadStream("./text.txt");
    readable.on('data', (buffer) => {
        res.write(buffer)
    })
    readable.on('end', () => {

        res.end("hello worldddd")
    })
  
}).listen(3000)