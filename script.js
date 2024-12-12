function browser(){
	document.getElementById("browsers").style.display = "table";
	document.getElementById("searchEngines").style.display = "none";
	document.getElementById("email").style.display = "none";
	document.getElementById("messagingApps").style.display = "none";
}

function searchEngine(){
	document.getElementById("browsers").style.display = "none";
	document.getElementById("searchEngines").style.display = "table";
	document.getElementById("email").style.display = "none";
	document.getElementById("messagingApps").style.display = "none";
}

function email(){
	document.getElementById("browsers").style.display = "none";
	document.getElementById("searchEngines").style.display = "none";
	document.getElementById("email").style.display = "table";
	document.getElementById("messagingApps").style.display = "none";
}

function messagingApps(){
	document.getElementById("browsers").style.display = "none";
	document.getElementById("searchEngines").style.display = "none";
	document.getElementById("email").style.display = "none";
	document.getElementById("messagingApps").style.display = "table";
}
