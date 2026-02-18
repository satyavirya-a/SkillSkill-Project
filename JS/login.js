
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


// buat fungsi buat pengawas ketika event pageshow
window.addEventListener('pageshow', function(event) {
    //event persisted contohnya ketika klik back
  if (event.persisted) {
    //halaman di reload ulang agar css/js tidak rusak
    window.location.reload();
  }
});

