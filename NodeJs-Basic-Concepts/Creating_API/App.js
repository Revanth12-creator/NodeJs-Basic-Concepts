let http=require("http");
let server=http.createServer((req,res) => {
    res.writeHead(200,{ 'content-type' : 'application/json'});
    //from here creating your API data
    let users=[
        {
            name:"Revanth",
            age:22,
            company:"MNC",
            location:"banglure",
        },
        {
            name:"Kuamr",
            age:21,
            company:"MNC",
            location:"banglure",
        },
        {
            name:"sathis",
            age:32,
            company:"MNC",
            location:"banglure",
        },
        {
            name:"garu",
            age:24,
            company:"MNC",
            location:"banglure",
        },
        {
            name:"shambha",
            age:30,
            company:"MNC",
            location:"banglure",
        },
    ]
        res.end(JSON.stringify(users)); 
});
server.listen(7000, (err) => {
    if(err) throw err;
    console.log("surver is runnigng on 7000")
})