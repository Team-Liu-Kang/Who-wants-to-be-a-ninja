/// <reference path="C:\Users\Nikki\Desktop\Telerik\Ilian\JavaScriptUIAndDOM\JSTeamWork\JSTeamWork\QuestionGenerator.js" />
(function () {

    var WIDTH = 800,
        HEIGHT = 600,
        containerID = 'container';

    var stage = new Kinetic.Stage({
        container: containerID,
        width: WIDTH,
        height: HEIGHT
    });

    function drawRightPanel(x, y, width, height, rows, startPoints, selectedRow, stage) {
        var singleRowHeight = height / rows,
            topRowPoints = rows * startPoints,
            nonSelectedTextColor = 'lightblue',
            selectedTextColor = 'blue',
            nonSelectedBackgroundColor = 'magenta',
            selectedBacgroundColor = 'red',
            borderColor = 'black',
            specialTextColor = 'orange';

        for (var i = 0; i < rows; i++) {
            if (selectedRow === rows - i) {
                drawRightPanelRow(x, y + (singleRowHeight * i), width, singleRowHeight, rows - i, topRowPoints - (i * startPoints), 30, selectedTextColor, selectedBacgroundColor, borderColor, stage);
            } else if (i === rows - 1 || i === Math.floor((rows - 1) / 2) || i === 0) {
                drawRightPanelRow(x, y + (singleRowHeight * i), width, singleRowHeight, rows - i, topRowPoints - (i * startPoints), 30, specialTextColor, nonSelectedBackgroundColor, borderColor, stage);
            } else {
                drawRightPanelRow(x, y + (singleRowHeight * i), width, singleRowHeight, rows - i, topRowPoints - (i * startPoints), 30, nonSelectedTextColor, nonSelectedBackgroundColor, borderColor, stage);
            }
        }
    }

    function drawRightPanelRow(x, y, width, height, rowNumber, rowPoints, fontSize, textColor, backgroundColor, borderColor, stage) {
        var backgroundRectangle = new Kinetic.Rect({
            x: x,
            y: y,
            width: width,
            height: height,
            fill: borderColor,
        });

        var leftRectWidth = width / 3 - 5;
        var leftRectangle = new Kinetic.Rect({
            x: x + 5,
            y: y + 3,
            width: leftRectWidth,
            height: height - 6,
            fill: backgroundColor
        });

        var leftTextField = new Kinetic.Text({
            x: leftRectangle.x(),
            y: leftRectangle.y() - 5,
            text: rowNumber,
            fontSize: fontSize,
            fontFamily: 'Calibri',
            fill: textColor,
            width: leftRectangle.width() - 20,
            height: leftRectangle.height() - 20,
            padding: 10,
            align: 'center'
        });

        var rightRectangle = new Kinetic.Rect({
            x: x + leftRectWidth + 10,
            y: y + 3,
            width: width - (leftRectWidth + 15),
            height: height - 6,
            fill: backgroundColor,
        });

        var rightTextField = new Kinetic.Text({
            x: rightRectangle.x(),
            y: rightRectangle.y() - 5,
            text: rowPoints,
            fontSize: fontSize,
            fontFamily: 'Calibri',
            fill: textColor,
            width: rightRectangle.width() - 20,
            height: rightRectangle.height() - 20,
            padding: 10,
            align: 'center'
        });

        var layer = new Kinetic.Layer();
        layer.add(backgroundRectangle, leftRectangle, leftTextField, rightRectangle, rightTextField);

        stage.add(layer);
    }

    function drawAnswersBox(x, y, width, height, arrOfStrings, onClickFunc, stage) {
        var singleAnswerWidth = (width / 2) - 20,
            singleAnswerHeight = (height / 2) - 20,
            maxStrLength = 0,
                fontSize = 10;

        for (var i = 0; i < 4; i++) {

            if (maxStrLength < arrOfStrings[i].length) {
                maxStrLength = arrOfStrings[i].length;
            }
        }

        if (maxStrLength < 10) {
            fontSize = 25;
        } else if (maxStrLength < 15) {
            fontSize = 20;
        } else if (maxStrLength < 20) {
            fontSize = 18;
        } else if (maxStrLength < 30) {
            fontSize = 15;
        }

        var index = 0;
        for (var i = 0; i < 2; i++) {

            for (var k = 0; k < 2; k++) {
                drawAnswer(x + ((singleAnswerWidth + 10) * i), y + ((singleAnswerHeight + 10) * k), singleAnswerWidth, singleAnswerHeight, arrOfStrings[index], fontSize, onClickFunc, stage);
                index++;
            }
        }
    }

    function drawAnswer(x, y, width, height, text, fontSize, onClickFunc, stage) {

        var rectangle = new Kinetic.Rect({
            x: x,
            y: y,
            width: width,
            height: height,
            fill: 'red',
            stroke: 'black',
            strokeWidth: 2,
            cornerRadius: 15
        });

        var textField = new Kinetic.Text({
            x: x,
            y: y,
            text: text,
            fontSize: fontSize,
            fontFamily: 'Calibri',
            fill: 'yellow',
            width: rectangle.width() - 20,
            height: rectangle.height() - 20,
            padding: 10,
            align: 'center'
        });

        var rectangleContainer = new Kinetic.Rect({
            x: x,
            y: y,
            width: width,
            height: height,
            opacity: 0,
        });

        rectangleContainer.on('click', function () {
            rectangle.fill('lightblue');
            rectangleContainer.off('mouseover');
            rectangleContainer.off('mouseout');
            layer.draw();
            onClickFunc();
        });

        rectangleContainer.on('mouseover', function () {
            rectangle.fill('black');
            layer.draw();
        });
        rectangleContainer.on('mouseout', function () {
            rectangle.fill('red');
            layer.draw();
        });

        var layer = new Kinetic.Layer();
        layer.add(rectangle, textField, rectangleContainer);

        stage.add(layer);
    }

    function run() {

    }
})();