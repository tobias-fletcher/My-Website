(function () {
    let form = document.querySelector('#form1');
    let emailInput = document.querySelector('#contact-email');

    function showErrorMessage(input, message) {
        let container = input.parentElement;

        let error = container.querySelector('.error-message');
        if (error) {
            container.removeChild(error);
        }

        if (message) {
            let error = document.createElement('div');
            error.classList.add('error-message');
            error.innerText = message;
            container.appendChild(error);
        }
    }

    function validateEmail() {
        let value = emailInput.value;

        if (!value) {
            showErrorMessage(emailInput, 'Email is a required field.');
            return false;
        }

        if (value.indexOf('@') === -1) {
            showErrorMessage(emailInput, 'You must enter a valid e-mail adddress.');
            return false;
        }

        showErrorMessage(emailInput, null);
        return true;
    }

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        if (validateForm()) {
            alert('Success!');
        }
    });

    emailInput.addEventListener('input', validateEmail);
})();
