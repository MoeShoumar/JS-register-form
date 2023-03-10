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
const string = document.querySelector('#string');
const car_model = document.querySelector('#car_model');
const reverse = document.querySelector('#str1_btn');

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
            car_model: car_model.value,
            string: string.value

        };
        saved_data.push(saved);
        console.log(saved_data);
    }
});
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

const errorCallback = function (error) {
    console.log(error);
};

navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
// Scroll alert

let hasAlerted = false;

window.addEventListener("scroll", function () {
    if (!hasAlerted && (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400)) {
        alert('Your location has been breached!');
        hasAlerted = true;
    }
});

// merge sort for promt (used chatGPT a lot on this one!)
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
const form_2 = document.getElementById('form_2');
class Course {
    constructor(Name, CRN, Duration) {
        this.Name = Name
        this.CRN = CRN
        this.Duration = Duration
    }
}

form_2.addEventListener('submit', function (e) {
    e.preventDefault()
    const crn = CRN.value;
    const duration = Duration.value;
    const name = Name.value;
    const myCourse = new Course(name, crn, duration);
    console.log(myCourse);
})
//  reverse word
reverse.addEventListener('click', function () {
    let str_1 = prompt("Enter any letter/number")
    const str_1_check = /[0-9]/
    let str_1_nums = ''
    let str_1_letter = ''
    if (!str_1_check.test(str_1.valueOf) || str_1 === '' || str_1 === null) {
        alert('Enter a combo of letters and numbers for the trick to work!');
    }
    // else {

    // }
    // alert("Reversed numbers:" + str_1_nums + str_1_letter)
})
// Pseudo code:
// loop over the string
// find the numbers and store them in str_1_nums
// reverse the numbers through function reverseString(str_1_nums) {
//     return str_1_nums;
// }
// I dont know how to add the numbers back to their original indexes so He4llo3
// How can I save the index values of the 4 and 3?


// reverse word-2
let empty = '';
const str2_btn = document.getElementById('str2_btn')
str2_btn.addEventListener('click', function () {
    let str_2 = prompt("Enter any letter combination")
    let str_3 = '';
    for (let i = 0; i < str_2.length; i++) {
        if (str_2[i] !== 'a' && str_2[i] !== 'e' &&
            str_2[i] !== 'o' && str_2[i] !== 'u' && str_2[i] !== 'i') {
            empty += str_2[i]
        }

        else {
            str_3 = str_2.slice(i, str_2.length)
            break;
        }

    }
    alert("Reversed word:" + str_3 + empty + "ay")

})
// JS animations
const btn = document.querySelector('#num_btn')
num_btn.addEventListener('mouseover', function () {
    num_btn.style.backgroundColor = 'yellow';
});
num_btn.addEventListener('mouseout', function () {
    num_btn.style.backgroundColor = '';
});

const btn_2 = document.querySelector('#btn')
btn_2.addEventListener('mouseover', function () {
    btn_2.style.backgroundColor = 'yellow';
});
btn_2.addEventListener('mouseout', function () {
    btn_2.style.backgroundColor = '';
});

const weirdStuff = document.querySelector('.weird_stuff');
btn.addEventListener('click', () => {
    weirdStuff.animate([
        { transform: 'rotate(0deg)' },
        { transform: 'rotate(360deg)' }
    ], {
        duration: 1000,
    });
});