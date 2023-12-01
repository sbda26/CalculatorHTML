/*
$(document).ready(function() {    

    $('#tabs li a:not(:first)').addClass('inactive');
    $('.container').hide();
    $('.container:first').show();
        
    $('#tabs li a').click(function(){
        var t = $(this).attr('id');
      if($(this).hasClass('inactive')){ //this is the start of our condition 
        $('#tabs li a').addClass('inactive');           
        $(this).removeClass('inactive');
        
        $('.container').hide();
        $('#'+ t + 'C').fadeIn('slow');
     }
    });

    //$('#tab2OperandFunctions').tabs("option", "active", 1);
});
  */
/*
$(document).ready(function() {
  $("#tabs").tabs();

  $("#tab2OperandFunctions").load("CalcMain.html", function(response, status, xhr) {
    if (status == "error") {
      alert(xhr.status + " " + xhr.statusText);
    }
  });
});
*/
