const btn_first = document.querySelector('.btn_first');
const btn_second = document.querySelector('.btn_second');
const btn_third = document.querySelector('.btn_third');
const btn_fourth = document.querySelector('.btn_fourth');
const btn_fifth = document.querySelector('.btn_fifth');

const p_first = document.querySelector('.p_first');
const p_second = document.querySelector('.p_second');
const p_third = document.querySelector('.p_third');
const p_fourth = document.querySelector('.p_fourth');
const p_fifth = document.querySelector('.p_fifth');

const question_first = document.querySelector('.question_first');
const question_second = document.querySelector('.question_second');
const question_third = document.querySelector('.question_third');
const question_fourth = document.querySelector('.question_fourth');
const question_fifth = document.querySelector('.question_fifth');

btn_first.addEventListener('click', () => {
    p_first.classList.toggle('visible')
    btn_first.classList.toggle('rotate')
    question_first.classList.toggle('active')
})

btn_second.addEventListener('click', () => {
    p_second.classList.toggle('visible')
    btn_second.classList.toggle('rotate')
    question_second.classList.toggle('active')
})

btn_third.addEventListener('click', () => {
    p_third.classList.toggle('visible')
    btn_third.classList.toggle('rotate')
    question_third.classList.toggle('active')
})

btn_fourth.addEventListener('click', () => {
    p_fourth.classList.toggle('visible')
    btn_fourth.classList.toggle('rotate')
    question_fourth.classList.toggle('active')
})

btn_fifth.addEventListener('click', () => {
    p_fifth.classList.toggle('visible')
    btn_fifth.classList.toggle('rotate')
    question_fifth.classList.toggle('active')
})