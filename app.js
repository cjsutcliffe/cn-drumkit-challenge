// noOfDrums = document.querySelectorAll(".drum").length;
//     for(let i=0 ; i<noOfDrums ; i++){
//         document.querySelectorAll(".drum")[i].addEventListener("click", function(event){
//             let butPresd= event.target.textContent;                  
//             makeSound(butPresd);
//             btnAnimation(butPresd);
//         });
//     }

//to detect mouse click

let noOfDrums = document.querySelectorAll(".drum").length;
    for(let i=0 ; i<noOfDrums ; i++){
        document.querySelectorAll(".drum")[i].addEventListener("click", function(event){
            let butPresd= event.target.textContent;                  
            makeSound(butPresd);
            btnAnimation(butPresd);
            // console.log(event.target);
        });
    }
//detect keyboard press
  
// document.addEventListener("keypress", function (event) {
//     makeSound(event.code); //changed from event.key to event.code
//     btnAnimation(event.code); //changed from event.key to event.code
// });

document.addEventListener("keypress", function (event) {
    makeSound(event.key.toLowerCase());
    btnAnimation(event.key.toLowerCase());s
});


//detect mouse clicks - WIP

var buttons = document.getElementsByTagName("keys");
var buttonsCount = buttons.length;
for (var i = 0; i <= buttonsCount; i += 1) {
    buttons[i].onclick = function(e) {
        console.log(this.id);
    };
}

//button animation//

function btnAnimation(currentKey) {
    let x = currentKey;
    let activeKey = document.querySelector("." + currentKey);
    if (activeKey != null){                     // If not null ie not in key classlist
        activeKey.classList.add("pressed");     // Runs short 200 ms animation when pressed 
        setTimeout(() => {                      
          activeKey.classList.remove("pressed"); 
        },200);
    }
}

//for sound effect//

function makeSound(butPresd) {
    switch (butPresd) {
           case "a":
                let clap = new Audio("sounds/clap.wav");
                clap.play();
            break;
            
            case "s":
                let hihat = new Audio("sounds/hihat.wav");
                hihat.play();
                break;

            case "d":
                let kick = new Audio("sounds/kick.wav");
                kick.play();
                break;
          
            case "f":
                let openhat = new Audio("sounds/openhat.wav");
                openhat.play();
                break;
          
            case "g":
                let boom = new Audio("sounds/boom.wav");
                boom.play();
                break;
          
            case "h":
                let ride = new Audio("sounds/ride.wav");
                ride.play();
                break;
          
            case "j":
                let snare = new Audio("sounds/snare.wav");
                snare.play();
                break;
            
            case "k":
                let tom = new Audio("sounds/tom.wav");
                tom.play();
                break;

            case "l":
                let tink= new Audio("sounds/tink.wav");
                tink.play();
                break;
            
    }
}