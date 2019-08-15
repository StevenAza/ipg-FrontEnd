//---------------------
//--------------------
// using post with ajax

$(document).ready(function(){
    var form = $("#test_post");
    
    form.submit(function (e) {
        e.preventDefault();
        $( ".max-20" ).each(function( index ) {
           var inptv = $(this).val();
           console.log(inptv);
           console.log($(this).val().lenght);
           if(inptv.lenght>20){
               alert("EL CAMPO --", $(this).val())
           }
        });
  

        sendPost(form.serialize());
  
    });
});

// SEND POST REQUEST
function sendPost(data){
    $.ajax({
        url: 'http://mialatam.com/front-test/',
        headers: {
            'Authorization':'Bearer c234523405j823405j2c358402j3580j245',
            'Author':'Steven Aza',
            'Content-Type':'application/json',
            'Access-Control-Allow-Origin':'*'
        },
        method: 'POST',
        dataType: 'json',
        data: data,
        success: function(data){
          console.log('succes: '+data);
        }
      });
}