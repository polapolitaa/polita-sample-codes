export function ShowInput(){
	
	var uName = document.getElementById('inName').value;
	var uAge = document.getElementById('inAge').value;
	
	if(document.getElementById('genderMale').checked){
		var uGender = document.getElementById('genderMale').value;
	}else if(document.getElementById('genderFemale').checked){
		var uGender = document.getElementById('genderFemale').value;		
	}else{
		var uGender = "";
	}
		
	
	//validations
		//name
	if(uName == ""){
		alert("Please enter your name");
		console.log("name is null");
		
		var x = "false";
		
		document.getElementById('nameDisplay').innerHTML = "Name: " + " ";
		
	}else{
		document.getElementById('nameDisplay').innerHTML = "Name: " + uName;
	}
	
		//age
	if(uAge == ""){
		alert("Please enter your age");
		console.log("age is null");
		
		var x = "false";
		
		document.getElementById('ageDisplay').innerHTML = "Age: " + " ";
	}else{
		document.getElementById('ageDisplay').innerHTML = "Age: " + uAge;
	}
	
		//gender
	if(uGender == ""){
		alert("Please indicate your gender");
		console.log("gender is null");
		
		var x = "false";
		document.getElementById('genderDisplay').innerHTML = "Gender: " + " ";
		
	}else{
		
		document.getElementById('genderDisplay').innerHTML = "Gender: " + uGender;
	}
	
	//display
	
	if( x != "false"){
		document.getElementById('changeDisplay').innerHTML = "Thank you " + uName + "! Have a nice day!";
	
		document.getElementById('changeText').innerHTML = "This is the details you have entered:";
	
	}else{
		document.getElementById('changeText').innerHTML = "Please complete the form";
	}
}