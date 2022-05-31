"use strict";

const dateWrapper = document.getElementById('date-picker');
const datepicker = new Datepicker(dateWrapper); 
// const navElements = document.querySelectorAll('nav ul li');
const setActive = el => {
    Array.from(el.parentElement.children).forEach(sib => sib.classList.remove('active'))
    el.classList.add('active')
}
let navElements = [...document.body.querySelectorAll('#progress ul li')]
navElements.forEach(el => el.addEventListener('click', e => setActive(el)))
// progress add active
let progressActive = [...document.body.querySelectorAll('nav ul li')]
progressActive.forEach(el => el.addEventListener('click', e => setActive(el)))