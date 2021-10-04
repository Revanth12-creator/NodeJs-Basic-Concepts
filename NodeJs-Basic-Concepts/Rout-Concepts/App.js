let http=require("http");
let fs=require("fs");

let server=http.createServer((req,res) => {
    console.log(req.url);
     if(req.url === "/" || req.url === "/home"){
         res.writeHead(200, { 'constent-type' : 'text/html' });
         fs.createReadStream(__dirname + "/homePage.html").pipe(res);
    }
    else if(req.url === "/login"){
        res.writeHead(200, { 'constent-type' : 'text/html' });
        fs.createReadStream(__dirname + "/LoginPage.html").pipe(res);
    }
    else if(req.url === "/register"){
        res.writeHead(200, { 'constent-type' : 'text/html' });
        fs.createReadStream(__dirname + "/register.html").pipe(res);
    }
    else {
        res.writeHead(200, { 'constent-type' : 'text/html' });
        fs.createReadStream(__dirname + "/pagenotgound.html").pipe(res) ;  
    } 
})
server.listen(3333, (err) => {
    if(err) throw err;
    console.log("surver is runnigng on 3333");
})                                                              