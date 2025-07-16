var rights = 0;
var wrongs = 0;
var qs = 0;

    function quiz(guess){
        console.log(guess);
       
        if (guess === 'right') {
            rights=rights + 1;
        }

        else {
            wrongs=wrongs + 1;
        }
    console.log("rights=" + rights + "wrongs=" + wrongs)
    qs=qs+1;
    document.getElementById("q"+qs).style.display="none";

    if(qs<4){
    document.getElementById("q"+(qs+1)).style.display="block"
    }
   else {
    showresults();
   }
    }

    function showresults() {
     if (rights<2){
        document.getElementById("results").innerHTML=("You got "+ rights+" answers right!<p><img src='noo.jpg'></p><p>it's okay, you can try again!</p>");  
     }
     else if (rights<4){
        document.getElementById("results").innerHTML=("You got "+ rights+" answers right!<p><img src='almost.jpg'></p><p>Don't give up, you're almost there!</p>");
     }
        else {
            document.getElementById("results").innerHTML=("You got "+ rights+" answers right!<p><img src='yey.jpg'></p><p>Great job, you nailed it!</p>");
        }

        document .getElementById("results").style.display="block";
    }