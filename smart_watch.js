// Time in the watch
let time = document.querySelector(".sidebar h2");

let stop = setInterval(function(){
    time.innerHTML = new Date().toLocaleTimeString();
}, 1000);

let btnf = document.getElementsByClassName("f0")[0];
btnf.addEventListener('click', function(){
    clearInterval(stop);
    setInterval(function(){
        time.innerHTML = new Date().toLocaleTimeString();
    }, 1000);
});
let btnf1 = document.getElementsByClassName("f1")[0];
btnf1.addEventListener('click', function(){
    clearInterval(stop);
    setInterval(function(){
        time.innerHTML = 79;
    }, 1000);
    time.style.left += 330 + "px";
});



// Buttons Changing Watch
var image = document.querySelector(".sidebar img");

var btn1 = document.getElementsByClassName("btn-1")[0];
btn1.addEventListener("click", function() {
    image.src = "red.png";
})

var btn2 = document.getElementsByClassName("btn-2")[0];
btn2.addEventListener("click", function() {
    image.src = "blue.png";
})

var btn3 = document.getElementsByClassName("btn-3")[0];
btn3.addEventListener("click", function() {
    image.src = "pink.png";
})

var btn4 = document.getElementsByClassName("btn-4")[0];
btn4.addEventListener("click", function() {
    image.src = "purple.png";
})

