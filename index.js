var randomnumber1=Math.floor(Math.random()*6)+1;
var randomnumber2=Math.floor(Math.random()*6)+1;
var diceimages="dice"+randomnumber1+".png";
var diceimage="dice"+randomnumber2+".png";
var diceimagessrc="images/"+diceimages;
var diceimagessrc2="images/"+diceimage;
var image1= document.querySelectorAll("img")[0].setAttribute("src",diceimagessrc);
var count1;
var count2;
var image2= document.querySelectorAll("img")[1].setAttribute("src",diceimagessrc2);
if(randomnumber1>randomnumber2){
  document.querySelector("h1").innerHTML="player1 won";
  count1++;
  document.getElementById('count1').innerHTML=count1;

}
else if(randomnumber1<randomnumber2){
    document.querySelector("h1").innerHTML="player2 won";
    count2++;
    document.getElementById('count2').innerHTML=count2;

}
else{
    document.querySelector("h1").innerHTML="Game Draw";
}
