const mainBar =  document.querySelector('.bar-container').clientWidth;
let insideBar = document.querySelector('.bar-inside');
let storageInfo = document.querySelector('.info-left-number');
let barSeconds = 30, textSeconds = 10, barWith = 0, gigaLeft = 0, spaceLeft = 185;

function animateBarWidth(){
   if(barWith !== parseInt(insideBar.dataset.size)){
       barWith++;
      insideBar.style.width = `${barWith}%`
   }
}
function animateNumberLeft(){
    if(gigaLeft !== spaceLeft){
        gigaLeft++;
       storageInfo.textContent = `${gigaLeft}`
    }
}

setInterval(()=> {
    animateBarWidth()
}, barSeconds)

setInterval(() => {
    animateNumberLeft()
}, textSeconds)