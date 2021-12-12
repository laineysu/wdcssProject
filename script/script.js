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