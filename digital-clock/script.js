

const hours = document.querySelector('.hours')
const min = document.querySelector('.minutes')
const sec = document.querySelector('.seconds')

hours.innerHTML = new Date().getHours();
min.innerHTML = new Date().getMinutes();

function updateClock(){
 sec.innerHTML = new Date().getSeconds();
}
updateClock();
setInterval(updateClock, 1000);