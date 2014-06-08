/// <reference path="C:\Users\Nikki\Desktop\Telerik\Ilian\JavaScriptUIAndDOM\JSTeamWork\JSTeamWork\Scripts/kinetic-v5.1.0.min.js" />
var KineticRender = function (stage) {
    var stage = stage;
    var layer = new Kinetic.Layer();
    var drawRightPanel = function (x, y, width, height, rows, startPoints, selectedRow) {
        var singleRowHeight = height / rows,
            topRowPoints = rows * startPoints,
            passedTextColor = '#01C3CD',
            selectedTextColor = '#006064',
            passedBackgroundColor = '#00939A',
            selectedBacgroundColor = '#CDCC00',
            passedBorderColor = '#00CFC4',
            specialTextColor = '#DAA520',
            standardTextColor = '#01C3CD',
            standardBackgroundColor = '#1D7074',
            standardBorderColor = '#015F5E';
        var layer = new Kinetic.Layer();
        for (var i = 0; i < rows; i++) {
            rows = rows | 0;
            if (selectedRow === rows - i) {
                drawRightPanelRow(x, y + (singleRowHeight * i), width, singleRowHeight, rows - i, topRowPoints - (i * startPoints), 30, selectedTextColor, selectedBacgroundColor, standardBorderColor , layer);
            } else if ((i === rows - 1 || i === Math.floor((rows - 1) / 2) || i === 0) && selectedRow < rows - i) {
                drawRightPanelRow(x, y + (singleRowHeight * i), width, singleRowHeight, rows - i, topRowPoints - (i * startPoints), 30, specialTextColor, standardBackgroundColor, standardBorderColor , layer);
            } else if (selectedRow > rows - i) {
                drawRightPanelRow(x, y + (singleRowHeight * i), width, singleRowHeight, rows - i, topRowPoints - (i * startPoints), 30, passedTextColor, passedBackgroundColor, passedBorderColor,layer);
            } else {
                drawRightPanelRow(x, y + (singleRowHeight * i), width, singleRowHeight, rows - i, topRowPoints - (i * startPoints), 30, standardTextColor, standardBackgroundColor, standardBorderColor,layer);
            }
        }
        stage.add(layer);
    }

    var drawRightPanelRow = function (x, y, width, height, rowNumber, rowPoints, fontSize, textColor, backgroundColor, borderColor , layer) {
        var backgroundRectangle = new Kinetic.Rect({
            x: x,
            y: y,
            width: width,
            height: height,
            fill: borderColor,
        });

        var leftRectWidth = width / 3 - 5;
        var leftRectangle = new Kinetic.Rect({
            x: x + 3,
            y: y + 1,
            width: leftRectWidth,
            height: height - 2,
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
            padding: 5,
            align: 'center'
        });

        var rightRectangle = new Kinetic.Rect({
            x: x + leftRectWidth + 6,
            y: y + 1,
            width: width - (leftRectWidth + 8),
            height: height - 2,
            fill: backgroundColor,
        });

        var rightTextField = new Kinetic.Text({
            x: rightRectangle.x(),
            y: rightRectangle.y() - 10,
            text: rowPoints,
            fontSize: fontSize,
            fontFamily: 'Calibri',
            fill: textColor,
            width: rightRectangle.width() - 20,
            height: rightRectangle.height() - 20,
            padding: 10,
            align: 'center'
        });

        
        layer.add(backgroundRectangle, leftRectangle, leftTextField, rightRectangle, rightTextField);

        
    }

    var drawAnswersBox = function (x, y, width, height, arrOfStrings, onClickFunc) {
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
            fontSize = 30;
        } else if (maxStrLength < 15) {
            fontSize = 25;
        } else if (maxStrLength < 20) {
            fontSize = 20;
        } else if (maxStrLength < 30) {
            fontSize = 18;
        }

        var index = 0;
        for (var i = 0; i < 2; i++) {

            for (var k = 0; k < 2; k++) {
                drawAnswer(x + ((singleAnswerWidth + 10) * i), y + ((singleAnswerHeight + 10) * k), singleAnswerWidth, singleAnswerHeight, arrOfStrings[index], fontSize, onClickFunc
                    );
                index++;
            }
        }
    }

    var drawAnswer = function (x, y, width, height, text, fontSize, onClickFunc) {

        var rectangle = new Kinetic.Rect({
            x: x,
            y: y,
            width: width,
            height: height,
            fill: '#FF9841',
            stroke: '#226F77',
            strokeWidth: 2,
            cornerRadius: 15
        });

        var textField = new Kinetic.Text({
            x: x,
            y: y,
            text: text,
            fontSize: fontSize,
            fontFamily: 'Calibri',
            fill: '#226F77',
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
            rectangle.fill('yellowgreen');
            rectangleContainer.off('mouseover');
            rectangleContainer.off('mouseout');
            layer.draw();
            onClickFunc();
        });

        rectangleContainer.on('mouseover', function () {
            rectangle.fill('#226F77');
            rectangle.stroke('#FF9841');
            textField.fill('#FF9841');
            layer.draw();
        });
        rectangleContainer.on('mouseout', function () {
            rectangle.fill('#FF9841');
            rectangle.stroke('#226F77');
            textField.fill('#226F77');
            layer.draw();
        });

        
        layer.add(rectangle, textField, rectangleContainer);

        stage.add(layer);
    }

    return {
        drawRightPanel: drawRightPanel,
        drawAnswersBox: drawAnswersBox,
    }
}