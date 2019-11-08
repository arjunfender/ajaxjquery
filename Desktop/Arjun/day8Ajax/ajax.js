
$(document).ready(function(){
    $("#btn").click(function(){
        $.ajax({url:"https://www.randomtext.me/api/lorem/ul-5/5-15 ", success: function(result){
        console.log(result);   
        $("#div1").html(result.text_out);
        }});
    });
}) 


$(document).ready(function(){
    $("#btn").click(function(){
        $.ajax({
            method:"GET",
            url:"https://www.randomtext.me/api/lorem/ul-5/5-15 ", 
            success: function(result){
        console.log(result);   
        $("#div1").html(result.text_out);
        }});
    });
}) 