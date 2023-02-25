// Button that revert to page 1
let goBack = () => window.location.href = 'index.html'
// Form validation
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const form = document.querySelector('#form');
const error = document.querySelector('#error');
const specialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

// Email validation
form.addEventListener('submit', (e) => {
    let massages = []
    if (email.value === '' || email.value === null || email.value === '') {
        massages.push('wrong email or password format!')
    }
    if (password.value === '' || password.value === null
        || password.value.length < 8) {
        massages.push('wrong email or password format!')
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