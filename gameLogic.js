name=prompt("Enter your name");
document.getElementById("greet").innerHTML="Welcome "+name+"!";


    let y = Math.floor(Math.random() * 10 + 1);
let guess = 1;
const form = document.querySelector(".form");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    let x = document.getElementById("guessField").value;

    if (x == y) {
        document.getElementById("lastResult").innerHTML="CONGRATULATIONS!!! You have guessed the right number in " + guess + " guesses";
        document.getElementById("lowOrHi").innerHTML=" ";
        document.getElementById("Restart").style.display="block";
    } else if (x > y) {
        guess++;
        document.getElementById("lowOrHi").innerHTML="Try a smaller number!";
    } else {
        guess++;
        document.getElementById("lowOrHi").innerHTML="Try a greater number!";
     }
     
});

const restartbtn = document.getElementById("Restart");

restartbtn.addEventListener("click", function () {
    y = Math.floor(Math.random() * 10 + 1);
    guess = 1;
    document.getElementById("lastResult").innerHTML = "";
    document.getElementById("lowOrHi").innerHTML = "";
    document.getElementById("guessField").value = "";
    document.getElementById("Restart").style.display = "none";
});

