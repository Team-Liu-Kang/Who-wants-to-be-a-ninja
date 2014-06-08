var KineticRenderForCorrectAnswer = function (stage) {
    var stage = stage;
    var layer = new Kinetic.Layer();
    var correctAnswer = function (strCorrectAnswerDescription) {
        layer.clear();
        $('#container').fadeOut(1000);

        if (strCorrectAnswerDescription === undefined) {
            strCorrectAnswerDescription = 'Congratulations, you answer correctly.';
        }

        var corectAnswerBox = new Kinetic.Rect({
            x: 150,
            y: 150,
            width: 500,
            height: 300,
            fill: '#00FF33',
            stroke: 'darkgreen',
            strokeWidth: 2,
            opacity: 1
        });

        var corectAnswerText = new Kinetic.Text({
            x: 150,
            y: 200,
            text: 'Answer Correct !',
            fontSize: 35,
            fontFamily: 'Calibri',
            width: 500,
            align: 'center',
            fill: 'red',
        });

        var corectAnswerDescriptionText = new Kinetic.Text({
            x: 150,
            y: 240,
            text: strCorrectAnswerDescription,
            fontSize: 20,
            fontFamily: 'Calibri',
            width: 500,
            align: 'center',
            fill: '#1D7074',
        });

        var nextQuestion = new Kinetic.Rect({
            x: 250,
            y: 500,
            width: 300,
            height: 70,
            fill: 'green',
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
            $('#container').fadeIn(1000);
        })
        nextQuestionInvisible.on('mouseover', function () {
            nextQuestion.fill('black');
            layer.draw();
        })
        nextQuestionInvisible.on('mouseout', function () {
            nextQuestion.fill('red');
            layer.draw();
        })
        layer.add(nextQuestion, nextQuestionText, nextQuestionInvisible, corectAnswerBox, corectAnswerText, corectAnswerDescriptionText);
        stage.add(layer);
        
    };

    var incorrectAnswer = function (strIncorrectAnswerDescription) {
        layer.clear();
        if (strIncorrectAnswerDescription === undefined) {
            strIncorrectAnswerDescription = 'You may have more luck next time.';
        }

        $('#container').fadeOut(1500);

        var incorectedAnswerBox = new Kinetic.Rect({
            x: 150,
            y: 150,
            width: 500,
            height: 300,
            fill: 'orange',
            stroke: 'red',
            strokeWidth: 2,
            align: 'center',
            opacity: 1
        });

        var incorectAnswerText = new Kinetic.Text({
            x: 150,
            y: 200,
            text: 'Incorrect Answer !',
            fontSize: 35,
            fontFamily: 'Calibri',
            width: 500,
            align: 'center',
            fill: 'red',
        });

        var incorectAnswerDescriptionText = new Kinetic.Text({
            x: 150,
            y: 240,
            text: strIncorrectAnswerDescription,
            fontSize: 20,
            fontFamily: 'Calibri',
            width: 500,
            align: 'center',
            fill: '#1D7074',
        });

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

        layer.add(nextQuestion, nextQuestionText, nextQuestionInvisible, incorectedAnswerBox, incorectAnswerText, incorectAnswerDescriptionText);
        stage.add(layer);
    };

    return {
        correctAnswer: correctAnswer,
        incorrectAnswer: incorrectAnswer
    }
};