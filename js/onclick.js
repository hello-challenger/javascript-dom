console.log('Hello Onclick Event');

const questionClass = document.querySelector('.click-event');
const btn1 = document.querySelector('#btn-1');
const btn2 = document.getElementById('btn-2');
const response = document.querySelector('p');

console.log(response);

questionClass.addEventListener('click', () => {
  questionClass.classList.toggle('question-clicked');
});

btn1.addEventListener('click', () => {
  response.classList.add('showResponse');
  response.style.background = 'red';
});

btn2.addEventListener('click', () => {
  response.classList.add('showResponse');
  response.style.background = 'green';
});
