//detecting button presses!

var drumBtn = document.querySelectorAll(".drum").length;
var i; for (i=0; i < drumBtn; i++) {
document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
  function handleClick() {

    var buttonInnerHTML = this.innerHTML;
      makeSound(buttonInnerHTML);
}
}

//detecting keyboard presses!
//"event" contains a property called "key",
//which tells us which key got pressed. Then, we send that event.key thing over to our
// "makeSound" function!
//we an have functions as "Callbacks" - things we get back after the event has happened.

document.addEventListener("keydown", function(event) {
      makeSound(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();

      break;

      case "a":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();

      break;

      case "s":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();

      break;

      case "d":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();

      break;

      case "j":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();

      break;

      case "k":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();

      break;

      case "l":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();

    default: console.log(buttonInnerHTML);

  }
}

//alt: document.querySelectorAll(".drum")[i].addEventListener("click", function ()
// {alert("I got clicked!");
// });
// }
//****This is using an "anonymous" function, instead of a named function the way I had written it.

//two classes or more can be assigned to an element.
