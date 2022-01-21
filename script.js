const Modal = {
    //Add class active in modal
    open(){
        document.querySelector('.modal-overlay')
        .classList.add('active')
    },
    //Close class active in modal
    close(){
        document.querySelector('.modal-overlay')
        .classList.remove('active')
    }
}