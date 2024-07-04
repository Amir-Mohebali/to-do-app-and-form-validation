const inputBox = document.getElementsByClassName('input-box')
const userName = document.getElementById('Name')
const email = document.getElementById('Email')
const password = document.getElementById('Password')
const toggleBtn = document.querySelector('.toggle-icon')
const submitBtn = document.querySelector('.submit')

const nameError = document.querySelector('.name-error')
const emailError = document.querySelector('.email-error')
const passwordError = document.querySelector('.password-error')

let validName = false;
let validEmail = false;
let validPassword = false;
let formValidation;

userName.addEventListener('change', (e) => {
    // console.log(e.target.value)
    // console.log(userName)
    let value = e.target.value;
    for(let i=0; i<value.length; i++) {  
        if(!(value.charCodeAt(i) >= 97 && value.charCodeAt(i) <= 122) &&   // lowercase
           !(value.charCodeAt(i) >= 65 && value.charCodeAt(i) <= 90) &&    // uppercase
           !(value.charCodeAt(i) == 32))                                   // space
        {
            validName = false
        } 
        else 
        {
            validName = true
        }
    }
    validName = (value.length <= 15) ? validName && true : validName && false;
    nameError.innerHTML = (validName) ? '' : '* نام کاربری باید حداکثر 15 کاراکتر و فقط شامل حروف انگلیسی باشد';
    inputBox[0].style.border = (validName) ? 'none' : '2px solid red';
    
    enableSubmit();
})

email.addEventListener('change', (e) => {
    let value = e.target.value;
    
    let regEx = /^\S+@\S+\.\S{2,}$/;
    validEmail = regEx.test(value);

    // console.log(validEmail)
    emailError.innerHTML = (validEmail) ? '' : '* ایمیل معتبر وارد کنید';
    inputBox[1].style.border = (validEmail) ? 'none' : '2px solid red';

    enableSubmit();
})

password.addEventListener('change', (e) => {
    let value = e.target.value;
    console.log(value)
    let lower = /[a-z]+/;
    let upper = /[A-Z]+/;
    let digit = /[0-9]+/;
    if(value.length>=8 && lower.test(value) && upper.test(value) && digit.test(value)) {
        validPassword = true;
    }
    else {
        validPassword = false;
    }
    passwordError.innerHTML = (validPassword) ? '' : '* رمز عبور باید حداقل 8 کاراکتر و شامل حروف کوچک، حروف بزرگ و اعداد باشد';
    inputBox[2].style.border = (validPassword) ? 'none' : '2px solid red';

    enableSubmit();
})

toggleBtn.addEventListener('click', () => {
    console.log(password.type)
    if(password.type === "password") {
        password.type = "text";
        toggleBtn.classList.remove('fa-eye-slash');
        toggleBtn.classList.add('fa-eye');
    }
    else {
        password.type = "password";
        toggleBtn.classList.remove('fa-eye');
        toggleBtn.classList.add('fa-eye-slash');
    }
})

const enableSubmit = () => {
    formValidation = validName && validEmail && validPassword
    if(formValidation) {
        submitBtn.removeAttribute('disabled')
        submitBtn.style.backgroundColor = '#00695c'
        submitBtn.style.color = '#fff'
    } else {
        submitBtn.setAttribute('disabled', 'disabled')
    }
    console.log(formValidation)
}

// str = 'hossein';
// console.log(str.charAt(2))
// console.log(str.length)
// for(let i=0; i<str.length; i++) {
//     console.log(str.charAt(i))
// }
