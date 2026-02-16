


let eyeIcon = document.getElementById("eye-icon");
let passwordInput = document.getElementById("pass");

eyeIcon.onclick = function() {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        eyeIcon.classList.remove("bx-eye");
        eyeIcon.classList.add("bx-eye-slash");
    } else {
        passwordInput.type = "password";
        eyeIcon.classList.remove("bx-eye-slash");
        eyeIcon.classList.add("bx-eye");
    }
}