const form  = document.querySelector('.form-line');
const quicklist = document.querySelector('.quicklist');
const field = document.querySelector('.form-field');

// Botão de compartilhamento via whatsapp
const shared = document.querySelector('.main-shared');

document.addEventListener("DOMContentLoaded", () => {
   if(quicklist.childElementCount === 0){
      messageInitial();
      shared.setAttribute('disabled', true);
   }
   
});


form.addEventListener("submit",
   (event) => {
      event.preventDefault();
      if(field.value == ""){ return }

      if(quicklist.firstElementChild.firstElementChild.className.includes('initial')){
         quicklist.firstElementChild.remove();
         shared.removeAttribute('disabled');
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
   if(quicklist.childElementCount == 0){
      messageInitial();
      shared.setAttribute('disabled', true);
   }
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

shared.addEventListener('click', () => {

   let message = "Olá, estou compartilhando a minha lista de compras feita no QuickList%0A%0A";
   
   for(let i = 1; i <= quicklist.childElementCount; i++)
   {
      let item = quicklist.childNodes[i];
      
      //Construindo mensagem do whatsapp
      message += `- ${item.childNodes[1].innerText}%0A`;
      
   }

   message += 'https://castrobreno.github.io/quicklist/';
   // Abrir o link do WhatsApp em uma nova aba
   window.open(`https://wa.me/?text=${message}`, '_blank');

});