//Your JS should "use strict"; globally
"use strict";
//You may upload your files to be hosted online publicly as long as you obfuscate the JS file before uploading itLinks to an external site. (do not obfuscate the JS file you submit for grading)

//Shopping Tab Script
//Change Image and description on click
let phoneCaseButton = document.getElementById('phoneCaseButton');
let productDescription = document.getElementById('productDescription');
let productPrice = document.getElementById('productPrice');

//Change Product to Phone Case
function phoneProductChange() {
    productDescription.innerHTML = '<p>A space themed phone case. This phone case is available in all iphone, android, and samsung models.</p>';
    productPrice.innerHTML = '<p>$15.00</p>';
    document.getElementById('productImage').src = 'Images/phone_case.jpg';
};

//Change Product to T-shirt
let tShirtButton = document.getElementById('tShirtButton');

function tShirtProductChange() {
    productDescription.innerHTML = '<p>A space themed t shirt! This t-shirt is available from sizes XS-4XL.</p>';
    productPrice.innerHTML = '<p>$20.00.</p>';
    document.getElementById('productImage').src = 'Images/spaceShirt.png';
};

// Change Product to Pet Alien
let petAlienButton = document.getElementById('petAlienButton');

function petAlienProductChange() {
    productDescription.innerHTML = '<p>A pet alien! There are many shapes and sizes to choose from. They are excellent companions aboard your ship.</p>';
    productPrice.innerHTML = '<p>$100.00</p>';
    document.getElementById('productImage').src = 'Images/alienPet.jpg';
};

// Change Product to Full Mech Suit
let fullMechSuitButton = document.getElementById('fullMechSuitButton');

function fullMechSuitProductChange() {
    productDescription.innerHTML = '<p>A full mech suit. This suit is custsom made to order. You never know what kind of protection you will need out there in space.</p>';
    productPrice.innerHTML = '<p>$950,000.00</p>';
    document.getElementById('productImage').src = 'Images/mech.jpg';
};

// Change Product to Robot Helper
let robotHelperButton = document.getElementById('robotHelperButton');

function robotHelperProductChange() {
    productDescription.innerHTML = '<p>A robot helper! This robot is equipped with full combat ability and includes a wealth of AI knowledge. Robot helpers are great for everyday tasks, combat assistance, and they make great companions.</p>';
    productPrice.innerHTML = '<p>$3,000,000.00</p>';
    document.getElementById('productImage').src = 'Images/robot.jpg';
};

//Shopping Event Listeners
phoneCaseButton.addEventListener('click', phoneProductChange);
tShirtButton.addEventListener('click', tShirtProductChange);
petAlienButton.addEventListener('click', petAlienProductChange);
fullMechSuitButton.addEventListener('click', fullMechSuitProductChange);
robotHelperButton.addEventListener('click', robotHelperProductChange);





//Game Winner Section

let outcome = document.getElementById('outcome');

function getValue() {
    let guestGuess = document.getElementById('textGuess');
    let guestFinalGuess = guestGuess.value;
    console.log(guestFinalGuess);
    if (guestFinalGuess == 7) {
        outcome.innerHTML = "<p>You're a winner!</p>";
    } else {
        outcome.innerHTML = "<p>Sorry, you are not a winner.</p>"
    }
};



// Form Validation 
//The form should validate the required fields on submit (using regex, at least for the email and phone) and it should use the valid user info to create an object (customer) when the form is valid and submitted. Errors in the form should display to the user next to the input with the error and should be descriptive and noticeable. When the form is complete and submitted properly, the form should reset and display a message to the user thanking them for their submission, with the info they submitted, pulled from the object you created.

let finalOutput = document.getElementById('finalOutput');
let userEntry = document.getElementById('userEntry');
function validateForm() {
    let userObject = {};
    let name = document.getElementById('fullName').value;
    let nameRGEX = /[a-zA-Z]+/;
    let nameResult = nameRGEX.test(name);
    console.log("name:" + nameResult);
    let phone = document.getElementById('phone').value;
    let phoneRGEX = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
    let phoneResult = phoneRGEX.test(phone);
    console.log("phone:" + phoneResult);
    let email = document.getElementById('email').value;
    let emailRGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let emailResult = emailRGEX.test(email);
    console.log("email:" + emailResult); 
    if (nameResult == false) {
        alert('Please enter your full name only.');
    } else if (phoneResult == false) {
        alert('Please only enter numbers in the telephone field.');
    } else if (emailResult == false){
        alert('Please enter a valid email');
    } else {
        finalOutput.innerHTML = '<p>Thank you for your submission!</p>';
        userObject.name = name;
        userObject.phone = phone;
        userObject.email = email;
        document.getElementById("userEntry").innerHTML = "Name: " + userObject.name+ '<br>' + " Phone: " + userObject.phone + '<br>'+ " Email: " + userObject.email + '<br>' + " Communication Preference " + userObject.communicationPreference;
        document.getElementById("cosmicClubForm").reset();
    };
    event.preventDefault();
    console.log(userObject);
};
