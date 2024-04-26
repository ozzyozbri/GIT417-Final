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



//Form Submission 
function validateForm() {
    let email = document.getElementById("email").value;
    let email2 = document.getElementById("email");
    let fullName = document.getElementById("fullName").value;
    let fullName2 = document.getElementById("fullName");
    let re = 
                /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if (re.test(email)) {
                alert("done");
                return true;
            }
            else {
                email2.style.border = "red solid 3px";
                return false;
            }
};