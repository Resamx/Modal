let ModalBtn = document.querySelector("#ModalOpen");
let ModalClose = document.querySelector("#ModalClose");
let ModalPanel = document.querySelector("#ModalPanel");

ModalBtn.onclick = function(){
    ModalPanel.showModal();
}
ModalClose.onclick = function(){
    ModalPanel.close();
}