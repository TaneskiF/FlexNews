const ime = document.getElementById("ime");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const company = document.getElementById("company");
const textarea = document.getElementById("textarea");
const forma = document.getElementById("forma");
const errorElement = document.getElementById("error");

function validateMail(val) {
	var regemail = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/g;
	return regemail.test(val);
}
function validatePhone(val) {
	var regphone = /^\+?389 ?-?[0-9]{2} ?-?[0-9]{3} ?-?[0-9]{3}$/g;
	return regphone.test(val);
}
function nonEmpty(val) {
	if (val.value === "" || val.value == null)
		return true;
}

forma.addEventListener("submit", (e) => {
	let messages = [];
	if (nonEmpty(ime)) {
		messages.push("Name cannot be empty" + ".\n\n");
	} else if (ime.value.length < 2 || ime.value.length > 30) {
		messages.push("Name must be 2-30 characters long" + ".\n\n");
	}
	if (nonEmpty(email)) {
		messages.push("Email cannot be empty" + ".\n\n");
	} else if (!validateMail(email.value)) {
		messages.push("Please enter a valid e-Mail" + ".\n");
		messages.push("e.g. someone@domain.com" + "\n\n");
	} else if (email.value.length > 30) {
		messages.push("e-Mail cannot exceed 30 characters" + ".\n");
	}
	if (nonEmpty(phone)) {
		messages.push("Phone cannot be empty" + ".\n\n");
	} else if (!validatePhone(phone.value)) {
		messages.push("Please enter a valid phone number" + ".\n");
		messages.push("(+)389 xx xxx xxx or (+)389-xx-xxx-xxx" + "\n\n");
	}
	if (company.value.length > 30) {
		messages.push("Company name cannot exceed 30 characters" + ".\n\n");
	}
	if (nonEmpty(textarea)) {
		messages.push("Message cannot be empty" + ".\n\n");
	} else if (textarea.value.length > 100) {
		messages.push("Меssage must not exceed 100 characters" + ".\n\n");
	}

	if (messages.length > 0) {
		e.preventDefault();
		errorElement.innerText = messages.join("");
	}
});
