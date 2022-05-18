function fromShortToColor(text){
    let rgbArr = [0, 0, 0];
    for(var row = 0; row < text.length; row++){
        rgbArr[row] = text[row].charCodeAt(0);
    }
    return rgbArr;
}

function textToOrderedArr(text){
    text = text.replace(/\s/g, "");
    let orderedArr = ["", "", ""];
    let arrLevel = 0;
    for(let row = 0; row < text.length; row++){
        orderedArr[arrLevel] += text[row];
        arrLevel++;
        if(arrLevel == 3) arrLevel = 0;
    }
    return orderedArr;
}

function orderedArrToCharCode(orderedArr){
    charCodeArr = [0 , 0, 0];
    let text
    for(let row = 0; row < 3; row++){
        text = orderedArr[row];
        for(let rowInText = 0; rowInText < text.length; rowInText++) charCodeArr[row] += text[rowInText].charCodeAt(0);
        charCodeArr[row] =  parseInt(charCodeArr[row] / text.length);
    }
    return charCodeArr;
}

function fromLongToColor(text){
    return orderedArrToCharCode(textToOrderedArr(text));
}

function setColor(rgbValues){
    const canvas = document.getElementById("canvas");
    const canvasContext = canvas.getContext("2d");
    const colorValue = "rgb(" + rgbValues[0] + ", " + rgbValues[1] + ", " + rgbValues[2] + ")";
    canvasContext.border = "none";
    canvasContext.fillStyle = colorValue;
    canvasContext.fillRect(0, 0, canvas.width, canvas.height);
}

function getUserData() { return document.getElementById("userInput").value; }

function secretAlert(){ 
    console.log("uWu");
}

function resetToZero(){
    const givenInputText = document.getElementById("givenInputText");
    document.getElementById("userInput").value = "";
    givenInputText.textContent = "Entered Text";
    givenInputText.style.color = "black";

    setColor([255, 255, 255]);
}

function main(){
    const givenInputText = document.getElementById("givenInputText");
    let userInput = getUserData();
    let rgbValues = [255, 255, 255];

    if(userInput.length <= 3) rgbValues = fromShortToColor(userInput);
    else rgbValues = fromLongToColor(userInput);

    givenInputText.textContent = userInput;
    givenInputText.style.color = "rgb(" + rgbValues[0] + ", " + rgbValues[1] + ", " + rgbValues[2] + ")";

    setColor(rgbValues);
}

console.log("155");

document.getElementById("enterButton").onclick = main;
document.getElementById("resetButton").onclick = resetToZero;


setColor([255, 255, 255]);








