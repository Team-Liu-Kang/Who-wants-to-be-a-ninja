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
    console.log(" " + arrWithQuestions.length);
    var kineticRender = new KineticRender(stage);
    var questionNumber = 0;
    var question = arrWithQuestions[questionNumber];

    function drawCurrentAnswer() {
        var arrayWithAnswer = [];
        arrayWithAnswer.push(question.answerA);
        arrayWithAnswer.push(question.answerB);
        arrayWithAnswer.push(question.answerC);
        arrayWithAnswer.push(question.answerD);
        kineticRender.drawRightPanel(600, 40, 200, 560, 15, 100, questionNumber+1);
        kineticRender.drawAnswersBox(10, 470, 600, 150, arrayWithAnswer, function () { });
        questionNumber++;
        question = arrWithQuestions[questionNumber];
    }

    function nextQuestion() {
        drawCurrentAnswer();
    }
    return {
        nextQuestion: nextQuestion,
    }
}