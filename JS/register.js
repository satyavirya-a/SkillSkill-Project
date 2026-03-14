
// Untuk milih gender
function radioValidadion() {
    var gender = document.getElementsByName("gender");
    var genValue = false;

    for (var i =0; i < gender.length; i++) {
        if (gender[i].ariaChecked == true) {
            genValue = true;
        }
    }

    if (!genValue) {
        alert("Please choose gender");
        return false;
    }
}



// Untuk Icon Mata Password
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

let eyeIconConf = document.getElementById("eye-icon-conf");
let confPasswordInput = document.getElementById("conf-pass");

eyeIconConf.onclick = function() {
    if (confPasswordInput.type === "password") {
        confPasswordInput.type = "text";
        eyeIconConf.classList.remove("bx-eye");
        eyeIconConf.classList.add("bx-eye-slash");
    } else {
        confPasswordInput.type = "password";
        eyeIconConf.classList.remove("bx-eye-slash");
        eyeIconConf.classList.add("bx-eye");
    }
}


// buat fungsi buat pengawas ketika event pageshow
window.addEventListener('pageshow', function(event) {
    //event persisted contohnya ketika klik back
  if (event.persisted) {
    //halaman di reload ulang agar css/js tidak rusak
    window.location.reload();
  }
});


//Validasi Password dan Confirm Password
// let confirmPasswordInput = document.getElementById("conf-pass");
// console.log(confirmPasswordInput);
// let registerBtn = document.getElementById("cofirmBtn");
// registerBtn.onclick = function() {
//     if (confirmPasswordInput != passwordInput) {
//         alert("Confirm Password berbeda dengan password");
//         // registerBtn.reload();
//         return false;
//     }

//     return true;
// }
