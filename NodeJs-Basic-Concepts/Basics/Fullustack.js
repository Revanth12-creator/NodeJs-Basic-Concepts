// exaple-1 exporting a  one veriable to a App.js with help of module.exports ============================
let Fullstack=["HTML","CSS","bOOTSTRAP","JQUERY","JAVASCRIPT","NODE-JS","EXPRESS-JS","MONGO-DB"];
module.exports.Revanth=Fullstack;// here exporting file .and without exporting file we can not import 
//the above code we are assigning a fillstack to the revanth variable


// // exaple2 seding to App.js multiple veriable============================
// let MernStack=["JAVASCRIPT","NODE-JS","React.js","EXPRESS-JS","MONGO-DB"];
// let Java=["HTML","CSS","bOOTSTRAP","J2EE","Springs","SQL"];
// module.exports={MernStack,Java}; 



// // exaple3 seding a multiple function  to App.js============================
// let users=function(name,age,company){
//     return { name,age,company}
// }
// let Languages=function(...languages){
//     return {languages}
// }
// module.exports={users,Languages};