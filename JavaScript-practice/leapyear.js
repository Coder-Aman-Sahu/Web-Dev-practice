var today=new Date();
var yyyy=today.getFullYear();
if(yyyy%4==0){
    console.log(yyyy+" is a leap year");
}
else{
    console.log(yyyy+" is not a leap year");
}

function leapyear(year){
    return (year%100==0)?(year%400==0):(year%4==0);
}
console.log(leapyear(2000));
console.log(leapyear(1700));
console.log(leapyear(204));
console.log(leapyear(190));
console.log(leapyear(100));