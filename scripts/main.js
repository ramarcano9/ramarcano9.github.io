
function multiply(num1, num2) {
  let result = num1 * num2;
  return result;
}

let myHTML = document.querySelector('html');
let myImage = document.querySelector('img');

myHTML.onclick = function () {};
myImage.onclick = function () {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/Fan-02.gif') {
    myImage.setAttribute('src','images/FAN_STOP_FAN_ON_Animation.gif');
  } else {
    myImage.setAttribute('src','images/Fan-02.gif');
  }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
  let myName = prompt('Ingrese su nombre por favor.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}
