// CODE FROM MAX'S OFFICE HOURS FOR THIS ASSIGNMENT
// ======================================================
var highscoresEL = document.getElementById("highscore");
var highScores = JSON.parse(localStorage.getItem("highscore"))
if(highScores !== null){
    console.log(highScores)
    highScores = highScores.sort(function(a, b) {
        return b.score - a.score;
      });
    
    console.log(highScores)
    
    for (var i = 0; i < highScores.length; i++) {
        var li = document.createElement("li");
        li.textContent = "initials: " + highScores[i].initials + " score:  "+ highScores[i].score
        highscoresEL.appendChild(li)
    }
}