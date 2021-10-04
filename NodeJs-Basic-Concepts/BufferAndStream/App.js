//what is buffer -it is raw data and which is transforing one place to another place
//Stream means -flow of continuing
//now we will learn how the buffer is working
//example in youtube we are searching for videos ones that data is loaded than it is comming buffer than it will play

//we have 4 kind of Strams
//1.ReadStream  2.WriteStream  3.duplex  4.Transform Stream

//1.ReadStream
let fs=require("fs");
//buffer way readig file it advanced level
// //now how the file sending through buffer see below
let readBuffer=fs.createReadStream("index.html", "utf8");
readBuffer.on("data",(err,file) => {
    if(err)throw err;
    console.log(file);
})

//2.WriteStream
//buffer way writing file it advanced level
let readBuffer1=fs.createReadStream("index.html", "utf8");
let WireteBuffer=fs.createWriteStream("data.txt","utf8");
readBuffer1.on("data",(indexFile) => {
    WireteBuffer.write(indexFile,(err)=> {
        if(err) throw err;
    })
})

// 3.duplex 
//it is provids one method pips .use of this dulplex at a time doing both reading and writing see below

let readBuffer=fs.createReadStream(__dirname + "/index.html", "utf8");
let WireteBuffer2=fs.createWriteStream(__dirname + "/Duummy.txt","utf8");
readBuffer.pipe(WireteBuffer2,(err) =>{
    if(err) throw err;
    else
    console.log("successfully wrinting" )
}
);