﻿$('#new-game-button').on('click', function () {
    $('#wrapper').fadeOut(2000);
    gameEngine.nextQuestion();
})