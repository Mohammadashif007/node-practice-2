// const http = require("http");

// http.createServer((req, res)=>{
//     res.write("Hello server");
//     res.end();
// }).listen(3000, () => {
//     console.log("Port is listening");
// })


// const http = require("http");

// http.createServer((req, res)=>{
//     res.writeHead(200, "Hello world!", {"content-type": "text/html" });
//     const content =("hello world!");
//    res.write(content);
//    res.end()
// }).listen(3000, ()=> {
//     console.log('listening the server');
// })



const http = require("http");
const url = require("url");

http.createServer((req, res)=> {
    res.writeHead(200, {"content-type": "text/html"});
    const q = url.parse(req.url, true).query;
    console.log(q);
    const text = q.year + " " + q.month;
    res.end(text);
}).listen(8080);

