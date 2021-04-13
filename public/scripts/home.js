const buttonSearch = document.querySelector('main .row_text a');
const modal = document.querySelector('#modal');
const close = document.querySelector('#modal .header a');

buttonSearch.addEventListener('click', () => {
  modal.classList.remove('hide');
  // abre opoção pesquisar
});

close.addEventListener('click', () => {
  modal.classList.add('hide');
  // fecha opção pesquisar
});
