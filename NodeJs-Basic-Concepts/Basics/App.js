// // exaple-1 importing a file from Fullstack.js .if it is one veriable============================
// let { Revanth }=require("./Fullustack");
// console.log(Revanth);


// // exaple-1 importing a file from Fullstack.js .if it is multiple veriable============================
// let {MernStack,Java}=require("./Fullustack");
// console.log(MernStack);
// console.log(Java);



// exaple-3 importing a file from Fullstack.js  a multiple function============================
let {users,Languages}=require("./Fullustack");
console.log(users("revanth",20,"MNC"));
console.log(Languages("kumar",22,"TCS"));