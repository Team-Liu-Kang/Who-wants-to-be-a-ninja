$('#new-game-button').on('click', function () {
    if (gameEngine.isValid($('#input-name'))) {
        $('#wrapper').fadeOut(1000);
        gameEngine.nextQuestion();
    }   
})
$('#leaderboard-button').on('click', function () {
    $('#leaderboard-screen').fadeIn(1000);
})
$('#leaderboard-back-button').on('click', function () {
    $('#leaderboard-screen').fadeOut(1000);
})
