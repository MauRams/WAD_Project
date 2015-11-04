//function for the side menu
function toggleMe(index){
	var ele = "#" + index;
  $(ele).toggle("slide");
};

//slide status bar::::

var slideStatusBar = function(){
	if( $('#status_bar').css('display') === 'block'){

		$('#menu_status_bar').html('Show Status Bar');
	}
	else{
		$('#menu_status_bar').html('Hide Status Bar');
	}

	$('#status_bar').toggle("slide");
};

//changeLayers
var helper = 'second';
var layerChange =function(url){

    //login_form, singup_form
    if(helper == 'second'){

    	    $.ajax({url: url, success: function(result){
        $("#mainGame").html(result);
   		 }});


      $("#mainProfile").slideToggle("slow");
      setTimeout(function(){
      $("#mainGame").slideToggle("slow");
      }, 1000);
      helper = 'first';
    }



    else{


    	$.ajax({url: url, success: function(result){
        $("#mainProfile").html(result);
    	}});




      $("#mainGame").slideToggle("slow");
      setTimeout(function(){
      $("#mainProfile").slideToggle("slow");
      }, 1000);
      helper = 'second';
    }
    
};




//fill necesarry fields in the app::
function fillInfo(){

};

//function is checking who is connected to the portal
function checkList(){



};
