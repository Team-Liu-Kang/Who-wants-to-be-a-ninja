var GameEngine = function () {
    var WIDTH = 800,
        HEIGHT = 600;

    var stage = new Kinetic.Stage({
        container: 'container',
        width: WIDTH,
        height: HEIGHT,
    });

    var stageForCorrectAnswer = new Kinetic.Stage({
        container: 'answer-state',
        width: WIDTH,
        height: HEIGHT
    });
    
    var kineticForCorrectAnswer = new KineticRenderForCorrectAnswer(stageForCorrectAnswer);
    var generator = new QuestionGeneration();
    var arrWithQuestions = generator.getQuestions();
    console.log(arrWithQuestions[0].question);
    var kineticRender = new KineticRender(stage);
    var questionNumber = 0;
    var question = arrWithQuestions[questionNumber];
    var svgRender = new SvgRender();
    var drawCurrentAnswer = function () {
        svgRender.startProgressBar(whenAnswerIsChoosen);
        var arrayWithAnswer = [];
        arrayWithAnswer.push(question.answerA);
        arrayWithAnswer.push(question.answerB);
        arrayWithAnswer.push(question.answerC);
        arrayWithAnswer.push(question.answerD);
        kineticRender.drawRightPanel(600, 40, 200, 560, 15, 100, questionNumber+1);
        kineticRender.drawAnswersBox(10, 470, 600, 150, arrayWithAnswer, whenAnswerIsChoosen);
        kineticRender.drawQuestionBox(20, 120, 560, 230, question.question);
    }

    var whenAnswerIsChoosen = function (rectID) {
        if (rectID == question.correctAnswer) {
            kineticForCorrectAnswer.correctAnswer(question.description);
            questionNumber++;
            question = arrWithQuestions[questionNumber];
            svgRender.clearPaper();
        } else {
            kineticForCorrectAnswer.incorrectAnswer(question.description);
            svgRender.clearPaper();
        }
    }

    var nextQuestion= function() {
        drawCurrentAnswer();
    }
    return {
        nextQuestion: nextQuestion,
    }
}