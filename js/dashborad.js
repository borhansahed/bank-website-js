

// deposite button event handler
document.getElementById('deposite-button').addEventListener('click' , function(){
   
 
 const depositeInput = document.getElementById('deposite-input');
 const depositeAmountText = depositeInput.value;
 const depositeNumber = parseFloat(depositeAmountText);

 const depositeAmount = document.getElementById('deposite-amount');
 const previousDepositeText = depositeAmount.innerText;
 const previousDepositeAmount = parseFloat(previousDepositeText);
 const currentDepositeAmount = previousDepositeAmount + depositeNumber;
   depositeAmount.innerText = currentDepositeAmount;
   
   
//    update account blanced
const totalAmountInput = document.getElementById('total-amount');
const totalAmountText = totalAmountInput.innerText;
const totalAmount = parseFloat(totalAmountText);
const depositeGrendAmount = depositeNumber + totalAmount;
totalAmountInput.innerText = depositeGrendAmount;


depositeInput.value =  '';




});

// withdraw button handler

document.getElementById('withdraw-button').addEventListener('click' , function(){

    const withdrawInput = document.getElementById('withdraw-input')
    const withdrawInputText = withdrawInput.value;
    const withdrawNumber = parseFloat(withdrawInputText);
    
    const withdrawNumberInput = document.getElementById('withdraw-amount');
    const withdrawNumberText = withdrawNumberInput.innerText;
    const previousWithdrawAmount = parseFloat(withdrawNumberText);
    const currentWithdrawAmount = withdrawNumber + previousWithdrawAmount;



    withdrawNumberInput.innerText = currentWithdrawAmount;


    // update withdraw total 
    const totalAmountInput = document.getElementById('total-amount');
    const totalAmountText = totalAmountInput.innerText;
    const totalAmount = parseFloat(totalAmountText); 
    const withdrawTotal = totalAmount - withdrawNumber;
    totalAmountInput.innerText = withdrawTotal;

     withdrawInput.value = '';
})