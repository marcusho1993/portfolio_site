/* 
File: app.css
Author: Hoi Fong Ho
StudentID: 301084469
Date: Oct 24, 2020
*/

(() => {
    function Start() {
        console.log("App Started...");
    }

    window.addEventListener('load', Start);
})();

// Send message from contact form onsubmit
const SendMessage = () => {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let msg = document.getElementById('message').value;

    let messageInfo = `Name: ${name}\n`;
    messageInfo += `Email: ${email}\n`;
    messageInfo += `Phone: ${(phone != "")? phone:"Not provided"}\n`;
    messageInfo += `Message: ${msg}`;

    alert(messageInfo);
    alert("Message sent...");

    location.href = '/';
}

// Click somewhere else to close Navbar
const UIMain = document.querySelector('main');
const UINavbar = document.querySelector('#navbarNav');
const UINavbarBtn = document.querySelector('.navbar-toggler');

function ClickToCloseNavbar() {
    UINavbar.classList.remove('show');
    UINavbarBtn.classList.add('collapsed');
    UINavbarBtn.setAttribute('aria-expanded', false);
}

// Remove Extra boarder from button after click
const UIBtns = document.querySelectorAll('.btn');
UIBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        btn.blur();
    });
});

// Load All Event Listeners
function loadAllEventListeners() {
    // Click somewhere else to close Navbar
    UIMain.addEventListener('click', ClickToCloseNavbar);
}

loadAllEventListeners();