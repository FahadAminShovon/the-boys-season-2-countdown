let hour = document.querySelector('#hour');
let min = document.querySelector('#min');
let sec = document.querySelector('#sec');
const day = document.querySelector('#day');
const releaseDate = new Date("09/04/2020");
console.log(releaseDate);
let i = 1;
(function timer(){
    const today = new Date();
    const seconds = parseInt((releaseDate - today)/1000);
    let ss = seconds % 60;
    let mm = parseInt((seconds / 60) % 60);
    let hh = parseInt((seconds / 60 / 60) % 24);
    let dd = parseInt(seconds / 60 / 60 / 24);
    day.innerHTML = dd > 9 ? dd : `0${dd}`;
    hour.innerHTML = hh > 9 ? hh : `0${hh}`;
    min.innerHTML = mm > 9 ? mm : `0${mm}`;
    sec.innerHTML = ss > 9 ? ss : `0${ss}`;
    if(seconds > 0)setTimeout(timer, 1000);
    
}())



