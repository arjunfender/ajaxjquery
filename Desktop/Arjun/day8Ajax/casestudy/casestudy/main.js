$(document).ready(function(){
    var count = 0;
    $.ajax({
        method:"GET",
        url:"https://jsonplaceholder.typicode.com/todos",
        success:function(result){

            console.log(result[0].title);
            var list = "<ul>";
            for(i in result)
{
    if(result[i].completed){
        list+="<li><input type=checkbox checked disabled>"+result[i].title+"</li>";}
    else{
    list+="<li><input type=checkbox>"+result[i].title+"</li>";}
}
$("#maindiv").append(list+"</ul>");



$('input[type="checkbox"]').change(function(){
    if(this.checked)
    {
        count++;
    }
    else{
        count--;
    }
    complete(count);

})

}
})

function complete(count)
{

var promise1= new Promise(function(resolve,rejected){
if(count==5)
{
    resolve();
}

})
promise1.then(function(){
    alert("Hi Admin, congrats...You have just completed five Taks now");
})
}
})