var GameEngine = function () {
    var WIDTH = 800,
        HEIGHT = 600,
        containerID = 'container';

    var stage = new Kinetic.Stage({
        container: containerID,
        width: WIDTH,
        height: HEIGHT
    });

    var generator = new QuestionGeneration();
    var arrWithQuestions = generator.getQuestions();
    var kineticRender = new KineticRender(stage);
    var questionNumber = 1;
    var question = arrWithQuestions[questionNumber];

    function drawCurrentAnswer() {
        var arrayWithAnswer = [];
        arrayWithAnswer.push(question.answerA);
        arrayWithAnswer.push(question.answerB);
        arrayWithAnswer.push(question.answerC);
        arrayWithAnswer.push(question.answerD);
        kineticRender.drawRightPanel(600, 40, 200, 560, 15, 100, questionNumber);
        kineticRender.drawAnswersBox(10, 370, 600, 250, arrayWithAnswer, function () { });
    }
    return {
        drawCurrentAnswer: drawCurrentAnswer,
    }
}