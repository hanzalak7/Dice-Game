var randomNumber1 = Math.floor(Math.random() * 6)+1;
 var randomdice = "dice"+randomNumber1+".png"
 var randomdicesrc = "images/"+randomdice;
//  first dice
 var randomNumber2 = Math.floor(Math.random() * 6)+1;
 var randomdice1 = "dice"+randomNumber2+".png"
 var randomdicesrc1 = "images/"+randomdice1;
//  sec dice 
 var img1 = document.querySelectorAll("img")[0].setAttribute("src" , randomdicesrc); 
 var img2 = document.querySelectorAll("img")[1].setAttribute("src" , randomdicesrc1); 
 if (randomNumber1 > randomNumber2){
     document.querySelector("h1").innerHTML=("🏆 player 1 wins");
 }else if (randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML=("player 2 wins 🏆 ");
 }else {
    document.querySelector("h1").innerHTML=("Draw");
 }
 