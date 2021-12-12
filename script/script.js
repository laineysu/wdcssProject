//This function checks if the user has entered a name - returns an elert if not
//This function displays a message to the user when name and email are entered correctly
//html checks if email is in the correct format
function myInputs(email,userName,myDiv){	
	var email = document.getElementById("email").value;
	var userName = document.getElementById("userName").value;
	document.getElementById("myForm").style.display="none";
	if (userName == "") {
		alert("Name must be filled out");
	}
	else{
		alert(userName+" thank you for your details. We will be in touch via "+email+" shortly.");	
	}
}