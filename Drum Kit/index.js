var buttons = document.querySelectorAll(".drum");

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function (){
    makeSound(this.innerHTML);
    buttonAnimation(this.innerHTML)
  });
}

document.addEventListener("keydown", function(event){
    makeSound(event.key);
    buttonAnimation(event.key)
});

function makeSound(key) {
  var audio = new Audio();
  switch (key) {
    case "w":
      audio.src = "sounds/crash.mp3";
      audio.play();
      break;
    case "a":
      audio.src = "sounds/kick-bass.mp3";
      audio.play();
      break;
    case "s":
      audio.src = "sounds/snare.mp3";
      audio.play();
      break;
    case "d":
      audio.src = "sounds/tom-1.mp3";
      audio.play();
      break;
    case "j":
      audio.src = "sounds/tom-2.mp3";
      audio.play();
      break;
    case "k":
      audio.src = "sounds/tom-3.mp3";
      audio.play();
      break;
    case "l":
      audio.src = "sounds/tom-4.mp3";
      audio.play();
      break;
    default:
      break;
  }
}


function buttonAnimation(currentkey){
    var activebutton = document.querySelector("." + currentkey);

    activebutton.classList.add("pressed");

    setTimeout(function (){
        activebutton.classList.remove("pressed");
    }, 100)
}