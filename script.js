//form validation 
function validation(){
    var name= document.getElementById('name').value;
    var email= document.getElementById('email').value;
    var phone= document.getElementById('phone').value;

    var namecheck= /^[A-Za-z ]{3,}$/;
    var emailcheck= /^[A-Za-z0-9._]{3,}@[A-Za-z0-9]{3,}[.]{1}[A-Za-z]{2,6}$/;
    var phonecheck= /^[6789][0-9]{9}$/;

    if(namecheck.test(name)){
        document.getElementById('error-name').innerHTML=""; 
    }
    else{
        document.getElementById('error-name').innerHTML="Only use Alphabets";
        return false;
    }

    if(emailcheck.test(email)){
        document.getElementById('error-email').innerHTML=""; 
    }
    else{
        document.getElementById('error-email').innerHTML="Incorrect email syntax. ex: abc@xyz.com";
        return false;
    }

    if(phonecheck.test(phone)){
        document.getElementById('error-phone').innerHTML=""; 
    }
    else{
        document.getElementById('error-phone').innerHTML="Please use proper 10 digits number";
        return false;
    }
}


