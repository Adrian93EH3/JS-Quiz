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