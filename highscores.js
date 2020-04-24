const highScoreslist = document.getElementById("highScoreslist")
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

highScoreslist.innerHTML = highScores
.map(score => {
  return `<li class="high-score">${score.name} - ${score.score}</li>`;
})
.join("");

//this is basically how react works - jsx