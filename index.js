nameInput = document.querySelector('#name-input')
nameSubmit = document.querySelector('#name-submit')
costInputsDiv = document.querySelector('#cost-inputs')
tipTaxInput = document.querySelector('#tip-tax-input')
taxInput = document.querySelector('#tax-input')
tipInput = document.querySelector('#tip-input')
tipDisplay = document.querySelector('#tip-display')
totalCostDisplay = document.querySelector('#total-cost-display')
completeCostDisplay = document.querySelector('#complete-cost-display')
costOutputsDiv = document.querySelector('#cost-outputs')

let inputsNum = 0
let totalCost = 0
let taxCost = 0
let tipPercentage = 0
let completeCost = 0

const updateCosts = () => {
	totalCost = 0
	completeCost = 0
	taxCost = Number(taxInput.value)
	tipPercentage = Number(tipInput.value) / 100
	costInputs = document.querySelectorAll('#cost-inputs input')
	costInputs.forEach(input => {
		totalCost += Number(input.value)
	})
	totalCostDisplay.value = totalCost.toFixed(2)
	completeCost = totalCost + taxCost + tipPercentage*totalCost
	completeCostDisplay.value = completeCost.toFixed(2)
}

const costTemplate = (name,type) => {
	costArt = document.createElement('article')
	costArt.setAttribute('class','cost-art')
	costLabel = document.createElement('label')
	costLabel.textContent = `${name}: `
	costInput = document.createElement('input')
	costInput.setAttribute('type','number')
	if (type === 'input') {
		costInput.setAttribute('id',`cost-input-${inputsNum}`)
		costInput.setAttribute('placeholder','Cost')
		costInput.addEventListener('input', updateCosts)
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
		costInputsDiv.append(costTemplate(nameInput.value,'input'))
		costOutputsDiv.append(costTemplate(nameInput.value,'output'))
		inputsNum++
		nameInput.value = ''
	}
}

nameSubmit.addEventListener('click', createName)
nameInput.addEventListener('keydown', e => {
	if (e.code === 'Enter') {createName()}
})
taxInput.addEventListener('input', updateCosts)
tipInput.addEventListener('input', () => {
	tipDisplay.textContent = `${tipInput.value}%`
	updateCosts()
})
