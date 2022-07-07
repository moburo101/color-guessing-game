var numOfSquares = 6;
var colors = generateRandomColors(numOfSquares);
var squares = document.querySelectorAll(".square")
var pickedColor = randColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var modeButtons = document.querySelectorAll(".mode")

colorDisplay.textContent = pickedColor;

init();

function init() {
    // Difficulty mode buttons event listeners
    setupModeButtons();
    // color game itself
    setupColorGame();
    reset();
}

function setupColorGame(){
    for (var i = 0; i < squares.length; i++) {
        // add initial colors to squares
        squares[i].style.backgroundColor = colors[i];
        // add click listeners to squares
        squares[i].addEventListener("click", function(){
            // acquire color of picked square
            var clickedColor = this.style.backgroundColor;
            // compare color to pickedColor
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct"
                changeSquares(clickedColor);
                h1.style.backgroundColor = pickedColor;
                resetButton.textContent = "Play again"
                messageDisplay.style.color = clickedColor;
            } else {
               this.style.backgroundColor = "#232323";
               messageDisplay.textContent = "again"
            }
        });
    }
}

function setupModeButtons(){
    for(var i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numOfSquares = 3: numOfSquares = 6;
            reset();
        });
    }
}

resetButton.addEventListener("click", function(){
    reset();
});

function changeSquares(color) {
    // loop through all squares
    for (var i = 0; i < squares.length; i++) {
        // change each square to match given color
        squares[i].style.backgroundColor = color;
    }
}

function randColor() {
    var random = Math.floor(Math.random() * colors.length)
    return colors[random];
}

function generateRandomColors(num) {
    // make an array 
    var arr = [];
    // repeat num times
    for(var i = 0; i < num; i++) {
        // get randomColors function and push into arr
        arr.push(randomColors());
    }
    // return array
    return arr;
}

function randomColors() {
    // pick a "red" from 0 - 255
    var r = Math.floor(Math.random() * 256);
    // pick a "green" from 0 - 255
    var g = Math.floor(Math.random() * 256);
    // pick a "blue" from 0 - 255
    var b = Math.floor(Math.random() * 256);
    // make and return rgb string
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

function reset() {
    // generateRandomColors
    colors = generateRandomColors(numOfSquares);
    // pick new random colors
    pickedColor = randColor();
    // change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    // change colors of squares on page
    for (var i = 0; i < squares.length; i++) {
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i]; 
            } else {
            squares[i].style.display = "none";
            }
    }
    h1.style.backgroundColor = "steelblue";
    messageDisplay.textContent = " ";
    resetButton.textContent = "new colors";
    messageDisplay.style.color = "steelblue";
}







// easyBtn.addEventListener("click", function(){
//     easyBtn.classList.add("selected");
//     hardBtn.classList.remove("selected");
//     numOfSquares = 3;
//     colors = generateRandomColors(numOfSquares);
//     pickedColor = randColor();
//     colorDisplay.textContent = pickedColor;
//     for (var i = 0; i < squares.length; i++) {
//         if(colors[i]){
//         squares[i].style.backgroundColor = colors[i];} 
//         else {
//             squares[i].style.display = "none"
//         }
//     }
//     h1.style.backgroundColor = "steelblue";
//     messageDisplay.textContent = " ";
// });