const form  = document.querySelector('.form-line');
const quicklist = document.querySelector('.quicklist');
const field = document.querySelector('.form-field');

document.addEventListener("DOMContentLoaded", () => {
   if(quicklist.childElementCount === 0){ messageInitial(); }
});


form.addEventListener("submit",
   (event) => {
      event.preventDefault();
      if(field.value == ""){ return }

      if(quicklist.firstElementChild.firstElementChild.className.includes('initial')){
         quicklist.firstElementChild.remove();
      }

      createItem();

      field.value = "";

});


function createItem()
{

   const li = Object.assign(document.createElement('li'), {
      className: 'quicklist-item'
   });
   const checkbox = Object.assign(document.createElement('input'), {
      type     : 'checkbox',
      className: 'quicklist-checkbox'
   });
   const paragraph = Object.assign(document.createElement('p'), {
      className: 'quicklist-paragraph',
      innerText: field.value
   });
   const btn_delete = Object.assign(document.createElement('span'), {
      className: 'quicklist-icon material-symbols-outlined',
      innerText: 'delete'
   });

   li.append(checkbox, paragraph, btn_delete);

   btn_delete.addEventListener('click', () => {
      deleteItem(btn_delete);
   });

   quicklist.append(li);

}

function deleteItem(btn_delete){
   let li = btn_delete.parentElement;
   li.remove();
   console.log();
   if(quicklist.childElementCount == 0){ messageInitial(); }
}

function messageInitial()
{
   const li = Object.assign(document.createElement('li'), {
      className: 'quicklist-item'
   });
   const paragraph_initial = Object.assign(document.createElement('p'), {
      className: 'quicklist-paragraph initial',
      innerText: 'O que vamos comprar hoje?'
   });
   li.append(paragraph_initial);
   quicklist.append(li);
}