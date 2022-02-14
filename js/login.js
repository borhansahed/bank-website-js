document.getElementById('login-button').addEventListener('click',function(){
    const email = document.getElementById('email-input');
    const useremail = email.value;
   
    const password = document.getElementById('password-input');
    const userpassword = password.value;
    
    
    
    if (useremail == 'sahed@gmail.com' && userpassword == 'sontan') {
        
         window.location.href = "bank.html";
    }
   
})