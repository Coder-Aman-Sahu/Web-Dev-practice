let X="X";
let O="O";
let ttt=[[X, ,O],[ ,X, ],[O, ,X]];

let arr=[7,9,0,-2];
let n=3;
console.log(arr.slice(0,n));
console.log(arr.slice(-n));

let str1="";
if(str1===""){
    console.log("Empty string");
}

let str2="JavaScript";
if(str2[n]===str2[n].toLowerCase()){
    console.log("Lower case");
}

console.log(str2.trim());

console.log(arr.includes(0));