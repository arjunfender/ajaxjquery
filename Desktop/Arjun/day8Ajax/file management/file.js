
//=======reading a file propery using jquery=======//

// $(document).ready(function(){
//   $("input").change(function(){

    
//         //alert(file.name);//getting file names
//         for(let i=0; i<this.files.length; i++){

//             console.log(this.files[i].name);
//             document.write(this.files[i].name);
//         }
//   });

// });



//////////===============reading text from a file======////////

$(document).ready(function(){
    $("input").change(function(){

       
        for(let i=0; i<this.files.length; i++){
            var reader = new FileReader();
            let file = this.files[i];
            reader.readAsText(file);
            reader.onload = (function(data){
              //  console.log(reader.result);
              console.log(data.target.result);
            })
            reader.onerror = (function(data){
               // cosole.log(reader.error);
               console.log(data.target.result);
            });
        }
    });
});