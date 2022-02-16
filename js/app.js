function getPin(){
    const pin=Math.round(Math.random()*10000);
    const pinString=pin+'';
    if(pinString.length == 4){
        return pin;
    }
    else{
        return getPin();
    }
}

function generatePin(){
    const pin =getPin();
    document.getElementById('display-pin').value =pin; 
}

document.getElementById("key-pad").addEventListener('click',function(event){
    const number=event.target.innerText;
    const calsInput=document.getElementById('typed-numbers');
    if(isNaN(number)){
        if(number == 'C'){
            calsInput.value='';
        }
    }
    else{
        const previousNumber=calsInput.value;
        const newNumber=previousNumber+number;
        calsInput.value=newNumber;
 }

})

function verifyPin(){
    const pin=document.getElementById('display-pin').value;
    const typeNumber=document.getElementById('typed-numbers').value;
    //faill generater or success 
    ;
    const notifySuccess=document.getElementById('notify-success');
    const notifyFail=  document.getElementById('notify-fail')
    if(pin == typeNumber){
        notifySuccess.style.display='block'
        notifyFail.style.display='none';
    }
    else{
        notifyFail.style.display='block';
        notifySuccess.style.display='none'
    }
}