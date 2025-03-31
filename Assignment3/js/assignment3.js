// Update the Full name
function updateFullname() {
	let firstName = document.getElementById("first_name").value;
	let lastName = document.getElementById("last_name").value;
	document.getElementById("full_name").value = firstName + " " + lastName;
}
// Validate Form
function validateForm() {
	let firstname = document.forms["my-form"]["first-name"].value;
	let lastname = document.forms["my-form"]["last-name"].value;
	let fileInput = document.getElementById("image-file");
	let filePath = fileInput.value;
	let allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
	let namePattern = /^[A-Za-z]+$/;

	if (firstname.trim() === "") {
		alert("First Name must be filled");
		return false;
	}
	if (!namePattern.test(firstname)) {
		alert("First name must contain only alphabets.");
		return false;
	}
	if (lastname.trim() === "") {
		alert("Last Name must be filled");
		return false;
	}
	if (!namePattern.test(lastname)) {
		alert("Last name must contain only alphabets.");
		return false;
	}
	if (fileInput.files.length === 0) {
		alert("Image File must be selected");
		return false;
	}
	if (!allowedExtensions.test(filePath)) {
		alert("File Type Should Be PNG, JPEG, JPG, or GIF");
		fileInput.value = "";
		return false;
	}

	return true;
}


