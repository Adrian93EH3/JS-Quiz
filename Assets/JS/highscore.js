<<<<<<< HEAD
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
=======
var listGroupScoresEl = document.getElementById('list-group-scores');

if (localStorage.getItem('highScoreObj')) {
    var highScores = JSON.parse(localStorage.getItem('highScoreObj'));
    for (let i = 0; i < highScores.length; i++) {
        var li = document.createElement('li');
        li.className = 'list-group-item';
        li.textContent = 'Player: ' + highScores[i].initials + ' \| Score: ' + highScores[i].score;
        listGroupScoresEl.appendChild(li);
    };
};
>>>>>>> 91903af0059309888c96ed7c1872641fb567be03
