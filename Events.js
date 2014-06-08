$('#new-game-button').on('click', function () {
    $('#wrapper').fadeOut(1000);
    gameEngine.nextQuestion();
})