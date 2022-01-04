let myHTML = document.querySelector('html');
myHTML.onclick = function () {};

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function cambiaPic(itemaver) {
  var itempic = document.getElementById("itemimg");
  if (itempic.getContext) {
    var ctx = itempic.getAttribute('src');
  }
  itempic.setAttribute('src','images/' + itemaver + '.png');
}

function setUserName() {
  let myName = prompt('Ingrese su nombre por favor.');
  let myTitle = document.getElementById('title');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    if(myTitle.textContent == 'Administra Projecto actualiza PC') {
        myHeading.textContent =  myName + "'s PC Project";
    } else if (myTitle == 'Mini Air con Hydro X') {
        myHeading.textContent =  myName + "'s Mini AirX Project";
    }
    }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  let myTitle = document.getElementById('title');
  if(myTitle == 'Administra Projecto actualiza PC') {
      myHeading.textContent =  myName + "'s PC Project";
  } else if (myTitle == 'Mini Air con Hydro X') {
      myHeading.textContent =  myName + "'s Mini AirX Project";
  }
}
myButton.onclick = function() {
  setUserName();
}
