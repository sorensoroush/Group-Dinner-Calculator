nameInput = document.querySelector('#name-input')
nameSubmit = document.querySelector('#name-submit')
costInputs = document.querySelector('#cost-inputs')
tipTaxInput = document.querySelector('#tip-tax-input')
costOutputs = document.querySelector('#cost-outputs')

let inputsNum = 0

const costTemplate = (name,type) => {
	costArt = document.createElement('article')
	costArt.setAttribute('class','cost-art')
	costLabel = document.createElement('label')
	costLabel.textContent = `${name}:`
	costInput = document.createElement('input')
	costInput.setAttribute('type','text')
	if (type === 'input') {
		costInput.setAttribute('id',`cost-input-${inputsNum}`)
		costInput.setAttribute('inputmode','numeric')
		costInput.setAttribute('placeholder','Cost')
	} else if (type === 'output') {
		costInput.setAttribute('id',`cost-output-${inputsNum}`)
		costInput.setAttribute('disabled','')
	}
	costLabel.append(costInput)
	costArt.append(costLabel)
	return costArt
}

nameSubmit.addEventListener('click', () => {
	if (nameInput.value) {
		costInputs.append(costTemplate(nameInput.value,'input'))
		costOutputs.append(costTemplate(nameInput.value,'output'))
		inputsNum++
		nameInput.value = ''
		tipTaxInput.style.display = 'block'
	}
})
