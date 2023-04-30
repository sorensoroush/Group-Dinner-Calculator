nameInput = document.querySelector('#name-input')
nameSubmit = document.querySelector('#name-submit')
costInputs = document.querySelector('#cost-inputs')
tipTaxInput = document.querySelector('#tip-tax-input')
taxInput = document.querySelector('#tax-input')
tipInput = document.querySelector('#tip-input')
costOutputs = document.querySelector('#cost-outputs')

let inputsNum = 0
let totalCost = 0
let taxCost = 0
let tipCost = 0
let completeCost = 0

const updateCosts = () => {

}

const costTemplate = (name,type) => {
	costArt = document.createElement('article')
	costArt.setAttribute('class','cost-art')
	costLabel = document.createElement('label')
	costLabel.textContent = `${name}:`
	costInput = document.createElement('input')
	costInput.setAttribute('type','number')
	if (type === 'input') {
		costInput.setAttribute('id',`cost-input-${inputsNum}`)
		costInput.setAttribute('placeholder','Cost')
		costInput.addEventListener('input', updateCosts())
	} else if (type === 'output') {
		costInput.setAttribute('id',`cost-output-${inputsNum}`)
		costInput.setAttribute('disabled','')
	}
	costLabel.append(costInput)
	costArt.append(costLabel)
	return costArt
}

const createName = () => {
	if (nameInput.value) {
		costInputs.append(costTemplate(nameInput.value,'input'))
		costOutputs.append(costTemplate(nameInput.value,'output'))
		inputsNum++
		nameInput.value = ''
	}
}

nameSubmit.addEventListener('click', createName())
nameInput.addEventListener('keydown', e => {
	if (e.code === 'Enter') {createName()}
})
