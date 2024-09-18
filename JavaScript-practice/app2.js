let msg="help!";
console.log(msg.trim().toUpperCase());

let name="ApnaCollege";
console.log(name.slice(4).replace("l","t"));

let students=["John","Jane","Jack","Jill"];

let month=["january","july","march","august"];
// month[0]="july";
// month[1]="june";

month.splice(0,2,"july","june");
console.log(month);

let arr=["c","c++","html","javascript","python","java","c#","sql"];
arr.reverse().indexOf("javascript");

