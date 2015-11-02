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


//fill necesarry fields in the app::
function fillInfo(){

};

//function is checking who is connected to the portal
function checkList(){



};
