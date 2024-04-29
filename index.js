var numberOfButtons = document.querySelectorAll(".drum").length;

for (var i = 0 ; i < numberOfButtons ; i++){
document.querySelectorAll("button")[i].addEventListener("click", function() {
 var buttonSound = this.innerHTML;
 makeSound(buttonSound);
 animation(buttonSound);
});
} 

document.addEventListener("keypress", function(event){
    makeSound(event.key);
    animation(event.key);
});

function makeSound(key){
switch(key){
        case "w":
         var audio = new Audio('sounds/tom-1.mp3');
         audio.play();
         break;

        case "a": 
         var audio = new Audio('sounds/tom-2.mp3');
         audio.play();
        break;

        case "s":
         var audio = new Audio('sounds/tom-3.mp3');
         audio.play();
         break;

        case "d":
         var audio = new Audio('sounds/tom-4.mp3');
         audio.play();
         break;

        case "j":
         var audio = new Audio('sounds/snare.mp3');
         audio.play();
         break;

        case "k":
         var audio = new Audio('sounds/kick-bass.mp3');
         audio.play();
         break;

        case "l":
         var audio = new Audio('sounds/crash.mp3');
         audio.play();
         break;

         default:
            console.log(buttonSound);
    }
}

function animation(currentKey){
 var activeButton = document.querySelector("." + currentKey);
 activeButton.classList.add("pressed");
 setTimeout(function(){
    activeButton.classList.remove("pressed");
 },100);
}
