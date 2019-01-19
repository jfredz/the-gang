console.log("hi there");

function showPopup(){
	var popup =  document.getElementById("popup");
	popup.classList.add("show");
}

function removePopup(){
	var popup =  document.getElementById("popup");
	popup.classList.remove("show");
}