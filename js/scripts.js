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

var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}