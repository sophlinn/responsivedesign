var myHeading = document.querySelector('h1');
myHeading.textContent = 'We Invite You To Flow In Color';

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('What is your name? :)');
    localStorage.setItem('name', myName);
    myHeading.textContent = myName +', We Invite You To Flow In Color';
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = storedName + ', We Invite You To Flow In Color';
  }
  myButton.onclick = function() {
    setUserName();
  }