var startScreen = document.getElementById('start-screen');
var gameScreen = document.getElementById('game-screen');
var leaderboardScreen = document.getElementById('leaderboard-screen');

var newGameBtn = document.getElementById('new-game-button');
var leaderboardBtn = document.getElementById('leaderboard-button');

newGameBtn.addEventListener('click', function(event) {
    startScreen.style.display = 'none';
    gameScreen.style.display = 'block';
});

leaderboardBtn.addEventListener('click', function(event) {
    startScreen.style.display = 'none';
    leaderboardScreen.style.display = 'block';  
});