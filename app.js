//The movement animation to happen
const card = document.querySelector('.card');
const container = document.querySelector('.container');

//items
const title = document.querySelector('.title');
const sneaker = document.querySelector('.sneaker img');
const purchase = document.querySelector('.purchase button');
const description = document.querySelector('.info h3');
const sizes = document.querySelector('.sizes')

//moving animation event
container.addEventListener("movemouse", (e) => {
    //console.log(e.pageX, e.pageY)
    let xAxis = (window.innerWidth /2 - e.pageX) /10;
    let yAxis = (window.innerHeight /2 - e.pageY)/10;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

//Animate in
container.addEventListener('mouseenter', (e)=>{
    card.style.transform = "none";

//Popout
title.style.transform = "translateZ(10px)";
sneaker.style.transform = "translateZ(0px) rotateZ(45deg)";
description.style.transform = "translateZ(0px)";
sizes.style.transform = "translateZ(0px)";
purchase.style.transform = "translateZ(px)";

});

//Animate out
container.addEventListener('mouseleave', (e) => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(10deg) rotateX(10deg)`;
});