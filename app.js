// Button that revert to page 1
let goBack = () => window.location.href = 'index.html'
// Form validation
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const form = document.querySelector('#form');
const error = document.querySelector('#error');

// Email validation
const specialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
const upperCase = /[A-Z]/;
const mail_check = /@/;
const mail_check_dashes = /-/;


form.addEventListener('submit', (e) => {
    let massages = []
    if (email.value === '' || email.value === null ||
        email.value === '' || !mail_check.test(email.value) ||
        mail_check_dashes.test(email.value)) {
        massages.push('wrong email format!')
    }
    if (password.value === '' || password.value === null
        || password.value.length < 8 || !specialChar.test(password.value)
        || !upperCase.test(password.value)) {
        massages.push('wrong  password format!')
    }
    if (massages.length > 0) {
        e.preventDefault()
        error.innerHTML = massages.join(', ')
    }
})
// let validateForm = () =>

//     function validateForm() {
//         if (email.innerHTML
//     }

// Password should contain 8 characters minimum, one special character minimum,
//  at least one upper case letter,  etc.
// An email should have also the email format: @, no dashes, a "dot" somewhere after the @.