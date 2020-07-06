const redDigitsJava = document.querySelector(".digits")
const timerOne = document.querySelector("#secondOnes");
const timerTwo = document.querySelector("#secondTens");

let clock = setInterval(timer, 1000)
let counter = 0
function timer(){
    if (counter === 9){
        timerOne.textContent = 0;
        timerTwo.textContent = 1;
        redDigitsJava.classList.add("redDigit")
        return;
    } else {
        counter++
        timerOne.textContent = counter;
    }
}

