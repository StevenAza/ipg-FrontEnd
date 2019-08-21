$(document).ready(function(){
    $("#two_table").hide();

    $(".btn_principal").click(function(){
      var table_show =  $(this).attr("data-id");
      $(".btn_principal").removeClass("active");
      $(this).addClass("active");
      $("table.table").hide();
      $("table#"+table_show).fadeIn();
    });

});