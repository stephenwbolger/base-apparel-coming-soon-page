(function() {
	
	//store reference to form, email input,
	//and error message elements
	const emailForm = document.getElementsByTagName('form')[0],
				emailInput = document.getElementById('email'),
				formErrorMsg = document.querySelector('.email-error-msg');
	
	//checks for specific form error,
	//and display relevant message
	function displayError() {
		
		//if field is empty
		if(emailInput.validity.valueMissing) {
			formErrorMsg.textContent = 'Enter a valid email address.';
		}else if(emailInput.validity.typeMismatch) {
			formErrorMsg.textContent = 'The value entered is not a valid email address.';
		}
		
		//set the class 'error' on form element to display
		//error icon and message
		emailForm.className = 'error';
	}
	
	//check if email input value is valid on input
	emailInput.addEventListener('input', function(e) {
		
		//if email input has no errors,
		//clear error message and clear 'error' class on form
		if(emailInput.validity.valid) {
			formErrorMsg.innerHTML = '';
			emailForm.className = '';
		} else {
			//run function to determine specific error
			displayError(); 
		}
		
	}); //end of input check on input
	
	//check form validity on submit
	emailForm.addEventListener('submit', function(e) {
		
		//if any errors are found upon submit,
		//run function to determine specific error
		//and prevent form from submitting
		if(!emailInput.validity.valid) {
			displayError();
			e.preventDefault();
		}
		
	}); //end of form check on submit
	
}());