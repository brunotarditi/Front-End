const button = document.getElementById('button');
const modal = document.getElementById('modal');
button.addEventListener('click', openModal, false);
modal.addEventListener('click',closeModal, false);

function openModal() {
    modal.classList.add('modal_show');
}

function closeModal(){
    modal.classList.remove('modal_show') 
     
}