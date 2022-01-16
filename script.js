const createPoints = () => {
   let pointsEl = document.querySelector('.points');
   
   for(let i=0; i<180; i++){
      let pointEl = document.createElement('span');
      pointEl.classList.add('point');
      pointsEl.appendChild(pointEl);
   }

}

createPoints();


const allInputEls = document.querySelectorAll('input');
const allLabelEls = document.querySelectorAll('label');
const containerEl = document.querySelector('.container');
const formEl = document.querySelector('.form');
const creditCardEl = document.querySelector('.credit-card');
const frontFaceEl = document.querySelector('.front-face');
const backFaceEl = document.querySelector('.back-face');

allInputEls.forEach((input,idx) => {
   input.addEventListener('focus', () => {
      allLabelEls[idx].classList.add('active');
      frontFaceEl.classList.add('turn');
      backFaceEl.classList.add('turn');
   });
   input.addEventListener('blur', (event) => {
      if(event.target.value == ''){
         allLabelEls[idx].classList.remove('active');
      }
   });
});


window.addEventListener('click', (event) => {
   if(event.target == containerEl){
      frontFaceEl.classList.remove('turn');
      backFaceEl.classList.remove('turn');
   }
})

const cardNoEl = document.querySelector('.card-no');
const cardHolderEl = document.querySelector('.card-user-name');
const validDateEl = document.querySelector('.valid-date');
const cvvEl = document.querySelector('.cvv span');

allInputEls.forEach((input, idx) => {
   input.addEventListener('input', (event) => {

      // Card Number
      if(idx == 0){
         let value = event.target.value;
         event.target.value = value.replace(/[^\d]/g, '').replace(/(.{4})/g, '$1 ').trim();
         cardNoEl.innerHTML = event.target.value;
      }

      // Card Holder
      if(idx == 1){
         let value = event.target.value;
         cardHolderEl.innerHTML = value.toUpperCase();
      }

      // Card Expiration Date
      if(idx == 2){
         let value = event.target.value;
         event.target.value = value.replace(/[^\d]/g, '').replace(/(.{2})/, '$1/').trim();
         validDateEl.innerHTML = event.target.value;
      }

      // CVV
      if(idx == 3){
         let value = event.target.value;
         cvvEl.innerHTML = value;
      }

   });
});


formEl.addEventListener('submit', () => {
  alert('Your order has been successfully received, thank you :)');
});