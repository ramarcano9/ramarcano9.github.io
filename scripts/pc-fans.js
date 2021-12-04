let myImage = document.querySelector('img');

myImage.onclick = function () {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/Fan-02.gif') {
    myImage.setAttribute('src','images/FAN_STOP_FAN_ON_Animation.gif');
  } else {
    myImage.setAttribute('src','images/Fan-02.gif');
  }
}  
