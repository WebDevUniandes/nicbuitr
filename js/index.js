var currentState = true;

function turnOnOff(){

	var content = document.getElementById("WebSiteContent");
	var navItems = document.getElementsByClassName("navbar-item");
	var displayToSet = "none";
	if (currentState) {
		document.getElementById("OnOff").style.backgroundColor = "rgba(26, 243, 0, 0.73)";
		currentState = false;
	}
	else{
		document.getElementById("OnOff").style.backgroundColor = "rgba(232, 0, 0, 0.73)";
		displayToSet = "block";
		currentState = true;
	}

	content.style.display = displayToSet;

	for (var i = 0; i < navItems.length; i++) {
		if(navItems[i] != undefined){
			if (navItems[i].id != "OnOff"){
				navItems[i].style.display = displayToSet;
			}
		}
	}

}