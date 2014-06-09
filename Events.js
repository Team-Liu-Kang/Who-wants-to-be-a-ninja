$('#new-game-button').on('click', function () {
    $('#wrapper').fadeOut(1000);
    gameEngine.nextQuestion();
})
$('#leaderboard-button').on('click', function () {
    $('#leaderboard').fadeIn(1000);
})