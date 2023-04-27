document.querySelector('#tip-form').onchange = function(){

  var bill = Number(document.getElementById('billTotal').value);
  var tip = document.getElementById('tipInput').value;
  var tax = document.getElementById('taxInput').value;
  document.getElementById('tipOutput').innerHTML = `${tip}%`;
  document.getElementById('taxOutput').innerHTML = `${tax}%`;
  var tipValue = bill * (tip/100)
  var taxValue = bill * (tax/100)
  var finalBill = bill + taxValue + tipValue
console.log(finalBill)
var tipAmount = document.querySelector('#tipAmount')
var taxAmount = document.querySelector('#taxAmount')
var totalBillWithTip = document.querySelector('#totalBillWithTip')

tipAmount.value = tipValue.toFixed(2);
taxAmount.value = taxValue.toFixed(2);
 totalBillWithTip.value =finalBill.toFixed(2);

 //Show Results

  document.getElementById('results').style.display='block'
}