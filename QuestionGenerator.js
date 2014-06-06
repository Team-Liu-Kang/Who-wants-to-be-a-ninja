var QuestionGeneration = function () {
    //In production with Start menu its good to be Async...
    jQuery.ajaxSetup({ async: false });
    var arrayWithQuestion = [];
    var numberOfNeededQuestionForLevel = 5;
    var getRandomIndexFromArray = function (arrayLength) {
        var index = (Math.random() * arrayLength) | 0;
        return index;
    }
    var getEasyQuestion = function () {
        var arrayWithEasyQuestion = [];
        $.getJSON("Questions/Level1.html", function (data) {
            var arrayWithQuestion = data;
            for (var i = 0; i < numberOfNeededQuestionForLevel; i++) {
                var dataLength = arrayWithQuestion.length;
                var indexFromArray = getRandomIndexFromArray(dataLength);
                arrayWithEasyQuestion.push(arrayWithQuestion[indexFromArray]);
                arrayWithQuestion.splice(indexFromArray, 1);
            }
        })
        return arrayWithEasyQuestion;
    }

    var getMediumQuestion = function () {
        var arrayWithMediumQuestion = [];
        $.getJSON("Questions/Level2.html", function (data) {
            var arrayWithQuestion = data;
            for (var i = 0; i < numberOfNeededQuestionForLevel; i++) {
                var dataLength = arrayWithQuestion.length;
                var indexFromArray = getRandomIndexFromArray(dataLength);
                arrayWithMediumQuestion.push(arrayWithQuestion[indexFromArray]);
                arrayWithQuestion.splice(indexFromArray, 1);
            }
        })
        return arrayWithMediumQuestion;
    }

    var getHardQuestion = function () {
        var arrayWithHardQuestion = [];
        $.getJSON("Questions/Level3.html", function (data) {
            var arrayWithQuestion = data;
            for (var i = 0; i < numberOfNeededQuestionForLevel; i++) {
                var dataLength = arrayWithQuestion.length;
                var indexFromArray = getRandomIndexFromArray(dataLength);
                arrayWithHardQuestion.push(arrayWithQuestion[indexFromArray]);
                arrayWithQuestion.splice(indexFromArray, 1);
            }
        })
        return arrayWithHardQuestion;
    }

    var getBonusQuestion = function () {
        var arrayWithBonusQuestion = [];
        $.getJSON("Questions/Level4.html", function (data) {
            var arrayWithQuestion = data;
                var dataLength = arrayWithQuestion.length;
                var indexFromArray = getRandomIndexFromArray(dataLength);
                arrayWithBonusQuestion.push(arrayWithQuestion[indexFromArray]);
        })
        return arrayWithBonusQuestion;
    }

    var getQuestions = function () {
        var arrWithEasy = getEasyQuestion();
        var arrWithMedium = getMediumQuestion();
        var arrWithHard = getHardQuestion();
        var bonusQuestion = getBonusQuestion();
        arrayWithQuestion = arrayWithQuestion.concat(arrWithEasy, arrWithMedium, arrWithHard , bonusQuestion);
        return arrayWithQuestion;
    };

    return {
        getQuestion: getQuestions,
    }

};