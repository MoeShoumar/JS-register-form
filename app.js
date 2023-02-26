// Button that revert to page 1
let goBack = () => window.location.href = 'index.html'
// Form validation
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const form = document.querySelector('#form');
const error = document.querySelector('#error');
const locations = document.querySelector('#locations');
const second_page = document.querySelector('.second_page');
const num_btn = document.querySelector('#num_btn');
const age = document.querySelector('#age');
const phone = document.querySelector('#phone');


// Email and password validation
const specialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
const upperCase = /[A-Z]/;
const mail_check = /@/;
const mail_check_dashes = /-/;
console.log(email.value);
let saved_data = []
form.addEventListener('submit', (e) => {
    e.preventDefault();

    let massages = [];

    if (email.value === '' || email.value === null ||
        !mail_check.test(email.value) ||
        mail_check_dashes.test(email.value)) {
        massages.push('wrong email format!');
    }

    if (password.value === '' || password.value === null ||
        password.value.length < 8 || !specialChar.test(password.value) ||
        !upperCase.test(password.value)) {
        massages.push('wrong  password format!');
    }

    if (massages.length > 0) {
        e.preventDefault();
        error.innerHTML = massages.join(', ');
    }

    const ageValue = parseInt(age.value);

    if (isNaN(ageValue) || ageValue < 0) {
        massages.push('wrong age format!');
    } else if (ageValue > 1) {
        let isPrime = true;
        for (let i = 2; i <= Math.sqrt(ageValue); i++) {
            if (ageValue % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            console.log(`${ageValue} is a prime number`);
        } else {
            console.log(`${ageValue} is not a prime number`);
        }
    }

    if (massages.length === 0) {
        let saved = {
            email: email.value,
            password: password.value,
            birth_year: ageValue,
            phone: phone.value,
            phone: phone.value,

        };
        saved_data.push(saved);
        console.log(saved_data);
    }
});


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
    console.log("IP= " + data.ip)
    console.log("IP-even-sum= " + sum)
})

// Location:

const successCallback = (position) => {
    console.log(position);
    let lat = position.coords.latitude
    let long = position.coords.longitude
    locations.innerHTML = 'Latitude: ' + lat + "<br>" + 'Longitude: ' + long
}

const errorCallback = (error) => {
    console.log(error);
};

navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
// Scroll alert

let hasAlerted = false;

window.addEventListener("scroll", () => {
    if (!hasAlerted && (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400)) {
        alert('Your location has been breached!');
        hasAlerted = true;
    }
});

// merge sort for promt
function merge(left, right) {
    let result = []
    let i = 0
    let j = 0

    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            result.push(left[i])
            i++
        } else {
            result.push(right[j])
            j++
        }
    }

    return result.concat(left.slice(i)).concat(right.slice(j))
}

function merging(arr) {
    if (arr.length < 2) {
        return arr
    }
    let half = Math.floor(arr.length / 2)
    const left = arr.slice(0, half)
    const right = arr.slice(half)
    return merge(merging(left), merging(right))
}

num_btn.addEventListener('click', function () {
    let arr = prompt("Enter 10 numbers with (,) between").split(",")
    arr = arr.map(Number);
    let sortedArr = merging(arr);
    console.log(sortedArr);
    alert("Sorted array: " + sortedArr.join(', '));
})

// create a class

// course IDs
const Name = document.getElementById('Name');
const CRN = document.getElementById('CRN');
const Duration = document.getElementById('Duration');

class Course {
    constructor(Name, CRN, Duration) {
        this.Name = Name
        this.CRN = CRN
        this.Duration = Duration
    }
}


// 