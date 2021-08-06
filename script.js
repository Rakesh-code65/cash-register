const billAmount = document.querySelector("#bill-Amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#errormessage");

checkButton.addEventListener("click", functionvalidateBillandCashAmount(){
   message.style.display = "none";
    if(billAmount.value  > 0){
                 if(cashGiven.value >= billAmount.value){
                     const amountToBeReturned = cashGiven.value - billAmount.value;
                     calculateChange(amountToBeReturned);

                 }
                 else{
                    showMessage("Do you wanna wash plates ")
                 }
    }
    else{
        showMessage("Invalid Bill Amount ");
        
    }
});

function calculateChange(amountToBeReturned){

}

function showMessage(msg){
    message.style.display = "block";
    message.innerText = msg;

}