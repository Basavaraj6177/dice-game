function playy(){
var vara;
vara = Math.floor(Math.random() * 6) + 1;
let a="images/"+vara+".png";
document.querySelector(".dice1").setAttribute("src",a);

var varaa;
varaa = Math.floor(Math.random() * 6) + 1;
let aa="images/"+varaa+".png";
document.querySelector(".dice2").setAttribute("src",aa);


if(vara>varaa){
    document.querySelector("h1").innerHTML="Player 1 wins!!";
}else if(vara<varaa){
    document.querySelector("h1").innerHTML="Player 2 wins!!";

}else{
    document.querySelector("h1").innerHTML="Draw!!!!";

}
}
