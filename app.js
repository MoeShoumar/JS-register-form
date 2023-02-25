// Button that revert to page 1
let goBack = () => window.location.href = 'index.html'
// Form validation
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const form = document.querySelector('#form');
const error = document.querySelector('#error');
const locations = document.querySelector('#locations');


// Email and password validation
const specialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
const upperCase = /[A-Z]/;
const mail_check = /@/;
const mail_check_dashes = /-/;

let saved_data = []
form.addEventListener('submit', (e) => {
    e.preventDefault()
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
    else {
        let saved = {
            email: email.value,
            password: password.value
        }
        saved_data.push(saved);
        console.log(saved_data);
    }

})
// save data into a json
// let h = new Cousrse()


// Ip-Location
let sum = 0
$.getJSON("https://api.ipify.org?format=json", function (data) {
    // Setting text of element P with id gfg
    $("#gfg").html(data.ip);
    console.log(data.ip);
    let ip = (data.ip).split('.')
    console.log(ip);
    for (let nmbs of ip) {
        if (nmbs % 2 == 0) {
            sum = sum + parseInt(nmbs)
        }
    }
    console.log("IP-even= " + data.ip)
    console.log("IP-even-sum= " + sum)
})

// Location:

const successCallback = (position) => {
    console.log(position);
    locations.innerText = position.coords.latitude
}

const errorCallback = (error) => {
    console.log(error);
};

navigator.geolocation.getCurrentPosition(successCallback, errorCallback);


