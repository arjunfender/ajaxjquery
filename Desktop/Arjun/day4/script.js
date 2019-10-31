function validateform(form){

// 
var uName = form.userName.value;
var email = form.email.value;
var email_re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

var mNum    = form.mobileNUm.value;
var mNum_re = /^\d{10}$/;  
 if(uName.length< 6){

    alert("please enter a valid user name ")

    return false;
 }
//alert email

else if(email_re.test(email) == false){
    alert("please enter a valied email id");
    return false;
}
   else if(mNum_re.test(mNum) == false){
       alert("please enter a valid mobile number");
        return false;
    }


    
}