let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

const sr = ScrollReveal ({
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true
})

sr.reveal('.text',{delay: 100, origin: 'top'})
sr.reveal('.form-container form',{delay: 200, origin: 'left'})
sr.reveal('.heading',{delay: 200, origin: 'top'})
sr.reveal('.ride-container .box',{delay: 200, origin: 'top'})
sr.reveal('.services-container .box',{delay: 200, origin: 'top'})
sr.reveal('.about-container .box',{delay: 200, origin: 'top'})
sr.reveal('.contact .box',{delay: 200, origin: 'bottom'})

const forms = document.querySelector(".forms"),
pwShowHide = document.querySelectorAll(".eye-icon"),
links = document.querySelectorAll(".link");

pwShowHide.forEach(eyeIcon => {
eyeIcon.addEventListener("click", () => {
    let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");

    pwFields.forEach(password => {
        if (password.type === "password") {
            password.type = "text";
            eyeIcon.classList.replace("bx-hide", "bx-show");
            return;
        }
        password.type = "password";
        eyeIcon.classList.replace("bx-show", "bx-hide");
    })

})
})

/*links.forEach(link => {
link.addEventListener("click", e => {
    e.preventDefault(); // preventing form submit
    forms.classList.toggle("show-signup");
})
})*/

function validateForm() {
    var emailInput = document.getElementById("emailInput");
    var passwordInput = document.getElementById("passwordInput");

    if (emailInput.value.trim() === "" || passwordInput.value.trim() === "") {
        alert("Please fill in all fields.");
        return false; // Prevent form submission
    }

    // If all fields are filled, the form will submit
    return true;
}

