let clickCount = 0;
let container = document.querySelector(".profile-card")
let icon = document.querySelector("#love")
let button = document.querySelector("#like")


//adding event listener on button 
button.addEventListener("click", function () {
        icon.style.opacity=0.8
        icon.style.transform= 'translate(-50%,-50%) scale(1)'
setTimeout(function(){
    icon.style.opacity=0
},1000)
setTimeout(function(){
    icon.style.transform='translate(-50%,-50%)scale(0)'
},3000)
});


//adding event listener on profile card
container.addEventListener("click", function () {
    clickCount++;
    if (clickCount === 2) {
        icon.style.opacity=0.8
        icon.style.transform= 'translate(-50%,-50%) scale(1)'
           clickCount = 0;
        }
setTimeout(function(){
    icon.style.opacity=0
},1000)
setTimeout(function(){
    icon.style.transform='translate(-50%,-50%)scale(0)'
},3000)
});