

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

  var buttonInnerHTML = this.innerHTLML;

  makeSound(buttonInnerHTML);

  buttonAnimation(buttonInnerHTML);

  });

}

document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});

function macleanSound() {
  var mac = new Audio("sounds/macleansSoul.mp3");
  mac.play();

  var y = document.getElementById("w");

  y.classList.add("pressed");
  setTimeout(function() {
    y.classList.remove("pressed");
  }, 100);
}

function jordanSound() {
  var jor = new Audio("sounds/jordanWhat.mp3");
  jor.play();

  var x = document.getElementById("a");

  x.classList.add("pressed");
  setTimeout(function() {
    x.classList.remove("pressed");
  }, 100);
}

function jakeSound() {
  var jak = new Audio("sounds/jakeScary.mp3");
  jak.play();

  var z = document.getElementById("s");

  z.classList.add("pressed");
  setTimeout(function() {
    z.classList.remove("pressed");
  }, 100);
}


function makeSound(key){

  switch (key) {
  case "w":
    var mac = new Audio("sounds/macleansSoul.mp3");
    mac.play();
    break;

  case "a":
    var jor = new Audio("sounds/jordanWhat.mp3");
    jor.play();
    break;

  case "s":
    var jak = new Audio("sounds/jakeScary.mp3");
    jak.play();
    break;

  case "d":
    var tom4 = new Audio("sounds/tom-4.mp3");
    tom4.play();
    break;

  case "j":
    var snare = new Audio("sounds/snare.mp3");
    snare.play();
    break;

  case "k":
    var crash = new Audio("sounds/crash.mp3");
    crash.play();
    break;

  case "l":
    var kick = new Audio("sounds/kick-bass.mp3");
    kick.play();
    break;

  default:
    console.log(buttonInnerHTML);
    }
}

function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
