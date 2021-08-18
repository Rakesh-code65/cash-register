const billAmount = document.querySelector("#bill-Amount");
// const nextbutton = document.querySelector("#nxt-button");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");

const availableNotes = [2000 , 500, 100, 20, 10, 5, 1],;

// nextbutton.addEventListener("click",( ()=> (

    
checkButton.addEventListener("click", function validateBillandCashAmount () {
    hideMessage();
  
      if(billAmount.value  > 0) {

                   if(cashGiven.value >= billAmount.value){
  
                       const amountToBeReturned = cashGiven.value - billAmount.value;
                    //    console.log(billAmount.value);
                       calculateChange(amountToBeReturned);
  
                   }
                   else{
                      showMessage("Do you wanna wash plates !!!!!");
                     
                   }
                  }             
      else{
  
          showMessage("Invalid Bill Amount ");
          
      }
  });
  
// ));


function calculateChange(amountToBeReturned){

 for (let i = 0; i < availableNotes.length; i++) {

     const numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
     amountToBeReturned = amountToBeReturned % availableNotes[i];
     noOfNotes[i].innerText = numberOfNotes;

 }

};


function hideMessage(){
    message.style.display = "none";
    // console.log(checkGiven.value);
}

function showMessage(msg){
    message.style.display = "block";
    message.innerText = msg;

}

