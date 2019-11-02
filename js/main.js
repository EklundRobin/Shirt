document.getElementById('shirt').style.backgroundColor = "#de3222";
var shirtColor = document.getElementById('shirt').style.backgroundColor;

window.onload = function(e) {
    document.getElementById('shirt').style.backgroundColor = "#de3222";
    var shirtColor = document.getElementById('shirt').style.backgroundColor;

    var extractColors = /(\d{1,3}), (\d{1,3}), (\d{1,3})/;
    var colorArray = extractColors.exec(shirtColor);
    colorRed = colorArray[1];
    colorGreen = colorArray[2];
    colorBlue = colorArray[3];

    document.getElementById('redSlider').value = colorRed;
    document.getElementById('greenSlider').value = colorGreen;
    document.getElementById('blueSlider').value = colorBlue;
}

var shirt = document.getElementById('shirt');

function red() {
    document.getElementById('shirt').style.backgroundColor = "rgb(255, 0, 0)";
    document.getElementById('redSlider').value = 255;
    document.getElementById('greenSlider').value = 0;
    document.getElementById('blueSlider').value = 0;

    document.getElementById('redSlider').value = colorRed;
    document.getElementById('greenSlider').value = colorGreen;
    document.getElementById('blueSlider').value = colorBlue;
    document.getElementById('redText').value = colorRed;
    document.getElementById('greenText').value = colorGreen;
    document.getElementById('blueText').value = colorBlue;
}

function blue() {
    document.getElementById('shirt').style.backgroundColor = "rgb(0, 0, 255)";
    
    document.getElementById('redSlider').value = 0;
    document.getElementById('greenSlider').value = 0;
    document.getElementById('blueSlider').value = 255;
    document.getElementById('redSlider').value = colorRed;
    document.getElementById('greenSlider').value = colorGreen;
    document.getElementById('blueSlider').value = colorBlue;
    document.getElementById('redText').value = colorRed;
    document.getElementById('greenText').value = colorGreen;
    document.getElementById('blueText').value = colorBlue;
}

function green() {
    document.getElementById('shirt').style.backgroundColor = "rgb(0, 255, 0)";
    
}