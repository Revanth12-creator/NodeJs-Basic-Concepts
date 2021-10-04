//how to handling file 
//how to write data into another file through coding see below
//by using FS fileSystem module

//1. Synchronous way reding====================
// let fs=require("fs");
// let readeFileSys=fs.readFileSync("data.txt", "utf8");
// console.log(readeFileSys);


// //2.Asynchronous way reding ,when we are usding asychrnous that time we should use callback function ====================
// let readeFileAsyc=fs.readFile("data.txt", "utf8",(err,data) => {
//     if(err) throw err;
//     else
//     console.log(data);
// });

// // 3.Synchronous way Writing====================
// let readeFileSys1=fs.readFileSync("data.txt", "utf8");
// let writeFileSys=fs.writeFileSync("emptyFile.txt",readeFileSys1);
// console.log('succesfully writen data and please check your file');  


// //4.Asynchronous way Writing====================
// let readeFileSys2=fs.readFileSync("data.txt", "utf8");
// let writeFileAsyc1=fs.writeFile("dummy.txt",readeFileSys2, (err, data) =>{
//     if(err) throw err;
//     else
//     console.log(data)
// })


// // //5.Removing Synchronous way file
// // //here we have (((removingFile.txt"))) once this exicuted it will be removed
// fs.unlinkSync("removingFile.txt");


// //6.Removing Asynchronous way file
// //here we have (((deleting.txt.txt"))) once this exicuted it will be removed
// fs.unlink("deleting.txt" ,(err) =>{
//     if(err) throw err;
//     else
//     console.log("successfully deleted file")
// })




// //7. creating a Folder Synchronosly
// //here we have created((FS)))folder once this exicuted it will be created
// fs.mkdirSync("FS");



// //8. creating a Folder Asynchronosly
// //here we have created((OS)))folder once this exicuted it will be created
// fs.mkdir("Systtem",(err) => {
//     if(err) throw err;
//     else
//     console.log("successfully created os Folder")
// });




// //9.deleting a Folder Synchronosly
// //here we have created((FS)))folder once this exicuted it will be Delted
// fs.rmdirSync("FS");




// //10.deleting a Folder Asynchronosly
// //here we have created((FS)))folder once this exicuted it will be Delted
// fs.rmdir("Systtem",(err) =>{
//     if(err) throw err;
// });



// //11.how create file inside Floder than how to write data inside a File see below
// //here we are creating programetically creating File inside a Folder  
// fs.mkdir("MernStack",(err) =>{
//     if(err) throw err;
//     fs.readFile("sample.txt",(err,data) => {
//         if(err) throw err;
//         fs.writeFile("MernStack/inde.html",data,(err) => {
//             if(err) throw err;
//             else
//             console.log("succsFully writen data into index.html")
//         })
//     })

// })



//12.how to Delete  Floder and  inside file than 
//to do this first we should do removng data inside file than only floder will be delted 
//here we are Deleting  File and  Folder  programetically see below
// fs.unlink("MernStack/inde.html",(err) => {
//     if(err) throw err;
//     fs.rmdir("MernStack",(err) => {
//         if(err) throw err;
//         else 
//         console.log("succesfull deleted filde and Folder")
//     })
// })