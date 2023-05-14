var audio = [new Audio('sounds/crash.mp3'),
new Audio('kick-bass.mp3'),
new Audio('snare.mp3'),
new Audio('tom-1.mp3'),
new Audio('tom-2.mp3'),
new Audio('tom-3.mp3'),
new Audio('tom-4.mp3')
]

let x = document.getElementsByClassName("drum");
let ky = ["w", "a", "s", "d", "j", "k", "l"]



    document.getElementsByTagName("body")[0].addEventListener("keypress", function (event) {audio[ky.indexOf(event.key)].play()})





for (let i = 0; i < x.length; i++) {
    x[i].addEventListener("click", function () {
        audio[i].play();
    })
}
