let http=require("http");
let fs=require("fs");

let server=http.createServer((req,res) => {
    res.writeHead(200, { "content-type" : "text/html"})
   fs.readFile("homepage.html" ,(err,data) => {
       res.end(data)
   })
})

server.listen(2323,(err)=> {
    if(err) throw err;
    console.log("server  is running on 2323")
})