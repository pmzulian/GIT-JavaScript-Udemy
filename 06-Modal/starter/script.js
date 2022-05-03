'use strict';

// Primer paso: seleccionar todo lo que vamos a necesitar
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
// console.log(btnsOpenModal);

const openModal = function () {
  console.log('Button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// Segundo paso: añadir eventos a los botones
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

// Tercer paso: añadir evento a botones de cerrar ventana modal
btnCloseModal.addEventListener('click', closeModal);

// Cuarto paso: ejecutar cierre cuando hacemos click fuera
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  // console.log(e.key);
  if(e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
