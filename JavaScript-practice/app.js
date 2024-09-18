console.log('Hello World!');
let a=10;
let b=5;
console.log("sum is: ",a+b);
let pencil=10;
console.log(`Total cost of 10 pencils is ${pencil*100}`); //output: Total cost of 10 pencils is 100


let color="red";
if(color==="red"){
    console.log("Stop");
}
if(color==="green"){
    console.log("Go");
}
if(color==="yellow"){
    console.log("Wait");
}

let size = 'XXL';
if(size=='XL'){
    console.log("Price is Rs250");    
}
else if(size=='L'){
    console.log("Price is Rs200");    
}
else if(size=='M'){
    console.log("Price is Rs150");    
}
else if(size=='S'){
    console.log("Price is Rs100");    
}
else{
    console.log("Size not available");
}

let str="Hello";
if(str[0]==='a' && str.length>3){
    console.log("Good String");
}
else{
    console.log("Bad String");
}






let day="Thursday";
switch(day){
    case 'Monday':
        console.log("Today is Monday");
        break;
    case 'Tuesday':
        console.log("Today is Tuesday");
        break;
    case 'Wednesday':
        console.log("Today is Wednesday");
        break;
    case 'Thursday':
        console.log("Today is Thursday");
        break;
    case 'Friday':
        console.log("Today is Friday");
        break;
    case 'Saturday':
        console.log("Today is Saturday");
        break;
    case 'Sunday':
        console.log("Today is Sunday");
        break;
    default:
        console.log("Invalid day");
}

let num=21;
if(num%10===0){
    console.log("Good");
} else{
    console.log("Bad");
}

// let name=prompt("Enter your name");
// let age=prompt("Enter your age");
// alert(name+" is "+age+" years old");

let month=9;
let quarter;
if(month<=3){
    quarter=1;
} else if(month<=6){
    quarter=2;
} else if(month<=9){
    quarter=3;
} else{
    quarter=4;
}
switch(quarter){
    case 1:
        console.log("Q1");
        break;
    case 2:
        console.log("Q2");
        break;
    case 3:
        console.log("Q3");
        break;
    case 4:
        console.log("Q4");
        break;        
}

let string = "APPLE";
if((str[0]==='A' || str[0]==='a') && str.length > 5){
    console.log("Golden string");
} else{
    console.log("Not a Golden string");
}

let num1=32;
let num2=47852;
if(num1[num1.length-1] == num2[num2.length-1]){
    console.log(num1[num1.length-1]);
}

let msg="ilovecoding";
console.log(msg.slice(5),
msg.slice(1,4),
msg.slice(-4));