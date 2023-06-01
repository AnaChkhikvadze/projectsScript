const form = document.getElementById('form');
const u = document.getElementById('username');
const e = document.getElementById('email');
const p = document.getElementById('password');
const checkP = document.getElementById('passwordCheck');
const check = true

form.addEventListener('submit', e => {
	e.preventDefault();

	checkInputs();
});

function checkInputs() {
	const uVal = u.value.trim();
	const eVal = e.value.trim();
	const pVal = p.value.trim();
	const checkPVal = checkP.value.trim();

	if (uVal === '') {
		setErrorFor(u, 'You must fill this field');
		check = false
	} else {
		setSuccessFor(u);
	}

	if (eVal === '') {
		setErrorFor(e, 'You must fill this field');
		check = false
	} else if (!isEmail(eVal)) {
		setErrorFor(e, 'Not a valid email');
		check = false
	} else {
		setSuccessFor(e);
	}

	if (pVal === '') {
		setErrorFor(p, 'You must fill this field');
		check = false
	} else {
		setSuccessFor(p);
	}

	if (checkPVal === '') {
		setErrorFor(checkP, 'You must fill this field');
		check = false
	} else if (pVal !== checkPVal) {
		setErrorFor(checkP, 'Passwords do not match');
		check = false
	} else {
		setSuccessFor(checkP);
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const uVal = u.value.trim();
	const eVal = e.value.trim();
	const pVal = p.value.trim();
	const checkPVal = checkP.value.trim();
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
	if (uVal != '' && eVal != '' && pVal != '' && checkPVal != '' && isEmail(eVal) && pVal == checkPVal) {
		window.open("welcome.html")
	}

}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}



