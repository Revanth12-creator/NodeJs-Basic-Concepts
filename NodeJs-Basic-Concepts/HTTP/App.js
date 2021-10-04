//we have many servers 
//for HTML,css and javascript having server =>localhost:5500
//for HTML,css and ReactJs having server =>localhost:3000
//for Java having Tomcat Server =>localhost:8000
//like the the way we can create own server by the using Nodejs see below
//To creating server we need HTTP module and import that madule


// let http=require("http");
// let server=http.createServer((request,responce) =>{
//     responce.writeHead(200, {'content-type': 'text/html'});
//     responce.end(`
//     <h1>Iam the Node Js Server 1111</h1>
//     `)
// })

// let port=1111;
// server.listen(port,(err) => {
//     if(err) throw err;
//     else
//     console.log("Succesfully server running on 1111")
// });

//==================================================================================
//now will learn requesting server how it will responce see below 
// let http=require("http");
// let fs=require("fs");
// let server2=http.createServer( (req,res) => {
//     res.writeHead(200, { 'content-type' : 'text/html'});
//     let ReadStream=fs.createReadStream(__dirname + "/homePage.html", "utf8");
//     ReadStream.pipe(res);
//     // fs.createReadStream(__dirname + "/homePage.html").pipe(res); this doing in single line


// });
// let port=5558;
// server2.listen(port,(err) => {
//     if(err) throw err;
//     console.log("server is running on 5558");
// })

