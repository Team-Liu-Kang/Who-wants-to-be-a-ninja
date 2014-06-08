var KineticRenderForCorrectAnswer = function (stage) {
    var stage = stage;
    var layer = new Kinetic.Layer();
    var correctAnswer = function () {
        $('#container').fadeOut(1500);
        var nextQuestion = new Kinetic.Rect({
            x: 250,
            y: 500,
            width: 300,
            height: 70,
            fill: 'red',
            stroke: 'black',
            strokeWidth: 5,
        });

        var nextQuestionText = new Kinetic.Text({
            x: 270,
            y: 505,
            text: 'Next Question',
            fontSize: 35,
            fontFamily: 'Calibri',
            fill: 'yellow',
            width: 250,
            padding: 10,
            align: 'center'
        });

        var nextQuestionInvisible = new Kinetic.Rect({
            x: 250,
            y: 500,
            width: 300,
            height: 70,
            opacity: 0,
        });

        nextQuestionInvisible.on('click', function () {
            gameEngine.nextQuestion();
            $('#container').fadeIn(1500);
        })
        nextQuestionInvisible.on('mouseover', function () {
            nextQuestion.fill('black');
            layer.draw();
        })
        nextQuestionInvisible.on('mouseout', function () {
            nextQuestion.fill('red');
            layer.draw();
        })
        layer.add(nextQuestion, nextQuestionText, nextQuestionInvisible);
        stage.add(layer);
        
    };

    var incorrectAnswer = function () {
        $('#container').fadeOut(1500);
        var nextQuestion = new Kinetic.Rect({
            x: 250,
            y: 500,
            width: 300,
            height: 70,
            fill: 'red',
            stroke: 'black',
            strokeWidth: 5,
        });

        var nextQuestionText = new Kinetic.Text({
            x: 270,
            y: 505,
            text: 'New Game',
            fontSize: 35,
            fontFamily: 'Calibri',
            fill: 'yellow',
            width: 250,
            padding: 10,
            align: 'center'
        });

        var nextQuestionInvisible = new Kinetic.Rect({
            x: 250,
            y: 500,
            width: 300,
            height: 70,
            opacity: 0,
        });

        nextQuestionInvisible.on('click', function () {
            location.reload();
        })
        nextQuestionInvisible.on('mouseover', function () {
            nextQuestion.fill('black');
            layer.draw();
        })
        nextQuestionInvisible.on('mouseout', function () {
            nextQuestion.fill('red');
            layer.draw();
        })
        layer.add(nextQuestion, nextQuestionText, nextQuestionInvisible);
        stage.add(layer);
    };

    return {
        correctAnswer: correctAnswer,
        incorrectAnswer: incorrectAnswer
    }
};