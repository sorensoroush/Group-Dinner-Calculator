nameInput = document.querySelector('#name-input')
nameSubmit = document.querySelector('#name-submit')

nameSubmit.addEventListener('click', () => {
    console.log(nameInput.value)
    nameInput.value = ''
})