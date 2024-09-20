// let favMovie="Avatar";
// let guess=prompt("Guess the fav movie: ");
// while(guess!=favMovie && guess!="quit"){
//     guess=prompt("Wrong Try again!Guess the fav movie: ");
    
// }
// if(guess==favMovie){
//     console.log("Bingo! Correct answer"); 
// } else if(guess=="quit"){
//     console.log("You quit the game");
// }

let fruits=["apple","banana","mango","orange","strawberry"];    
for(let i=0;i<fruits.length;i++){
    console.log(i,fruits[i]);
}
for(i of fruits){
    console.log(i);
}