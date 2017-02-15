var currentState = true;

function turnOnOff(){

	var content = document.getElementById("WebSiteContent");
	var navItems = document.getElementsByClassName("navbar-item");
	if (currentState) {
		content.style.display = "none";

		for (var i = 0; i < navItems.length; i++) {
			if(navItems[i] != undefined){
				if (navItems[i].id != "OnOff"){
					navItems[i].style.display = "none";
				}
			}
		}
		document.getElementById("OnOff").style.backgroundColor = "rgba(26, 243, 0, 0.73)";
		currentState = false;
	}
	else{
		content.style.display = "block";
		for (var i = 0; i < navItems.length; i++) {
			if(navItems[i] != undefined){
				if (navItems[i].id != "OnOff"){
					navItems[i].style.display = "block";
				}
			}
		}
		document.getElementById("OnOff").style.backgroundColor = "rgba(232, 0, 0, 0.73)";
		currentState = true;
	}

}