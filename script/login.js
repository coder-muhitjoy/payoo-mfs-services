
document.getElementById('login-btn')
.addEventListener('click', function(event){
    event.preventDefault();
    
    const accountNumber = document.getElementById('account-number').value;
    const pin = document.getElementById('PIN').value;
     if(accountNumber.length === 11){
      const convertedPin = parseInt(pin)
        if(convertedPin===1234){
            // console.log('okay thik ache')
            window.location.href ="./main.html"
        }
        else{
            alert('pin thik nai')
        }
     }
     else{
        alert("need valid account number")
     }
})