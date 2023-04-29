nameInput = document.querySelector('#name-input')
nameSubmit = document.querySelector('#name-submit')
costInputs = document.querySelector('#cost-inputs')

const costInputTemplate = name => {
	costInputArt = document.createElement('article')
	costInputArt.setAttribute('class','cost-input-art')
	costInputTest = document.createElement('h3')
	costInputTest.textContent = name
	costInputArt.append(costInputTest)
	return costInputArt
}

nameSubmit.addEventListener('click', () => {
    console.log(nameInput.value)
	costInputs.append(costInputTemplate(nameInput.value))
    nameInput.value = ''
})
