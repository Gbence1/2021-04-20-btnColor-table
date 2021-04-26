let btnColor = document.querySelector(".btnColor");
let btnAdd = document.querySelector(".btnAdd");
let btnDelete = document.querySelector(".btnDelete");
let inputText = document.querySelector("#InputText");
let body = document.querySelector(".body");
let number = 0;

btnColor.addEventListener("click", randomColor);
btnAdd.addEventListener("click", addRow);
btnDelete.addEventListener("click", deleteRow);

function randomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let rgbBg = "background-color: rgb(" + r + ", " + g + ", " + b + "); ";
    let rgbBorder = "border-color: rgb(" + r + ", " + g + ", " + b + "); ";
    btnColor.style = rgbBg + rgbBorder;
};

function addRow() {
    let row = body.insertRow();
    let cell1 = row.insertCell();
    number += 1;
    let text1 = document.createTextNode(number);
    cell1.appendChild(text1);
    let cell2 = row.insertCell();
    let input = inputText.value;
    let text2 = document.createTextNode(input);
    cell2.appendChild(text2);
};

function deleteRow() {
    if (number > 0) {
        body.removeChild(body.lastChild);
        number -= 1;
    };
};