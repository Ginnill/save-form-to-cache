$(function () {

    if (localStorage.getItem('modal-info') == null) {
        $("#myModal").modal('show');
    }

    const inputName = document.querySelector('#name-id')
    const inputEmail = document.querySelector("#email-id");

    const storageInfo = JSON.parse(localStorage
        .getItem('modal-info'))
    let transaction = localStorage
        .getItem('modal-info') !== null ? storageInfo : []

    let form = document.querySelector('form')

    const updateStorage = () => {
        localStorage.setItem('modal-info', JSON.stringify(transaction))
    }

    form.addEventListener('submit', event => {
        event.preventDefault()

        const formName = inputName.value.trim()
        const formEmail = inputEmail.value.trim()

        if (formName === '' || formEmail === '') {
            alert('Por Favor, preencha tanto o nome quanto e-mail no formulário!')
        } else {
            alert('Obrigado por assinar a nossa Newsletter')
            const storageArray = {
                "name": formName,
                "email": formEmail
            }

            transaction.push(storageArray)
            updateStorage()
        }

    })

})