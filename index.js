var nbuttons = document.querySelectorAll(".drum").length;

for (var i = 0; i < nbuttons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        Player(this.innerHTML);
    });


}
document.addEventListener("keydown", function (event) {
    Player(event.key);

});
function Player(input) {
    switch (input) {

        case "w":
            var soundd = new Audio("./sounds/crash.mp3");
            soundd.play();
            break;

        case "a":
            var soundd = new Audio("./sounds/kick-bass.mp3");
            soundd.play();
            break;

        case "s":
            var soundd = new Audio("./sounds/snare.mp3");
            soundd.play();
            break;

        case "d":
            var soundd = new Audio("./sounds/tom-1.mp3");
            soundd.play();
            break;

        case "j":
            var soundd = new Audio("./sounds/tom-2.mp3");
            soundd.play();
            break;

        case "k":
            var soundd = new Audio("./sounds/tom-3.mp3");
            soundd.play();
            break;

        case "l":
            var soundd = new Audio("./sounds/tom-4.mp3");
            soundd.play();
            break;



    }

}