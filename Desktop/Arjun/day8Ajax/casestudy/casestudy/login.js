$(document).ready(function(){

    $("#loginbtn").click(function(){

        let uName = $("#username").val();
        let uPwd = $("#password").val(); 
        // alert(uName)   ;
        // alert(uPwd);
        vaidateLogin (uName,uPwd, function(f){
            if(f==true){

                alert("Login successful!!!!!")
                window.location.href = "main.html";
            }
            else{
                alert("The Username and password does not match");
            }
        });
     
    });
});
function vaidateLogin(u,p,call){
    var flag = false;
    if(u=="admin" && p=="12345" ){
        flag = true;   
    }
    else{
        flag = false;
    }
    call(flag);
}
