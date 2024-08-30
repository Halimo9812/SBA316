


//Sign up form that will collect user info

class User{
    name ={};
    constructor(firstName,lastName, email, dob, password, phoneNumber) {

        this.name.firstName = firstName;
        this.name.lastName = lastName
        this.email = email
        this.dob = dob;
        this.password = password;
        this.phoneNumber = phoneNumber
    }
}

//const bill = new user('Bill', 'Gates', 'billz@gmail.com', '1970-01-01','password', '123-456-7890');
//console.log(user)

const form = document.querySelector('form');
console.log(form);


form.addEventListener('submit', function(e) {
    e.preventDefault();
const firstName = form ['firstName'].value;
const lastName = form ['lastName'].value;
const email = form ['email'].value;
const dob = form ['dob'].value;
const password = form ['password'].value;
const phoneNumber = form ['phoneNumber'].value;



//console.log(firstName);
//console.log(lastName);
//console.log(email);
// console.log(dob);
// console.log(password);
// console.log(phoneNumber);

const user = new User ('Halimo', 'Ali','hali@gmail.com', '01-01-1998','Password@','617-955-3210')
console.log(user);

});