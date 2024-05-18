const http = require("http");

http.createServer((req, res)=>{
    res.write("Hello server");
    res.end();
}).listen(3000, () => {
    console.log("Port is listening");
})