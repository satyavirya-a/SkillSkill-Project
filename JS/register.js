
// Untuk milih gender
function radioValidadion() {
    const gender = document.getElementsByName("gender");
    const genderError = document.querySelector(".gender-form .error");
    let genValue = false;

    for (let i = 0; i < gender.length; i++) {
        if (gender[i].checked === true) {
            genValue = true;
            break;
        }
    }

    if (!genValue) {
        if (genderError) {
            genderError.innerText = "Harus pilih salah satu opsi";
        }
        return false;
    }

    if (genderError) {
        genderError.innerText = "";
    }

    return true;
}



// Untuk Icon Mata Password
let eyeIcon = document.getElementById("eye-icon");
let passwordInput = document.getElementById("pass");

eyeIcon.onclick = function() {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        eyeIcon.src = "../Assets/eye-slash-icon.png"
    } else {
        passwordInput.type = "password";
        eyeIcon.src = "../Assets/eye-icon.png"
    }
}

let eyeIconConf = document.getElementById("eye-icon-conf");
let confPasswordInput = document.getElementById("conf-pass");

eyeIconConf.onclick = function() {
    if (confPasswordInput.type === "password") {
        confPasswordInput.type = "text";
        eyeIconConf.src = "../Assets/eye-slash-icon.png"
    } else {
        confPasswordInput.type = "password";
       eyeIconConf.src = "../Assets/eye-icon.png"
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

//validasi input form
const form = document.getElementById('form');
let nameInput = document.getElementById("name");
let dobInput = document.getElementById("dob");
let emailInput = document.getElementById("email");
let termsInput = document.getElementById("terms");

const getErrorDisplay = element => {
    const fieldContainer = element.closest(".form-text, .gender-form, .terms-container");
    if (fieldContainer) {
        return fieldContainer.querySelector(".error");
    }

    const parent = element.parentElement;
    return parent ? parent.querySelector(".error") : null;
};

const setError = (element, message) => {
    const errorDisplay = getErrorDisplay(element);

    if (errorDisplay) {
        errorDisplay.innerText = message;
    }
    element.classList.add("error");
}

const setSuccess = element => {
    const errorDisplay = getErrorDisplay(element);

    if (errorDisplay) {
        errorDisplay.innerText = '';
    }
    // element.classList.add("success");
    element.classList.remove("error");
}


function validateName() {
    let name = nameInput.value.trim();

    if (name.length === 0) {
        setError(nameInput, "Name is required");
        return false;
    }

    setSuccess(nameInput);
    return true;
}

function validateDob() {
    let dob = dobInput.value.trim();

    if (dob.length === 0) {
        setError(dobInput, "Date of Birth is required");
        return false;
    }

    const dobDate = new Date(dob);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (Number.isNaN(dobDate.getTime()) || dobDate > today) {
        setError(dobInput, "Date of Birth is not valid");
        return false;
    }

    setSuccess(dobInput);
    return true;
}

function validateEmail() {
    let mail = emailInput.value.trim();

    const posAtSymbolIdx = mail.indexOf('@'); //Harus ada @ dan gak boleh char pertama (idx != 0)
    const lastPosDotIdx = mail.lastIndexOf('.'); //. terakhir tidak boleh di akhir email dan minimal 1 char lebih dari @
    const spaceIdx = mail.indexOf(' '); // kaga boleh ada spasi

    const isEmailValid =
        posAtSymbolIdx > 0 &&
        lastPosDotIdx > posAtSymbolIdx + 1 &&
        lastPosDotIdx < (mail.length - 1) &&
        spaceIdx === -1;

    if (!isEmailValid) {
            setError(emailInput, "Email Tidak Valid");
            return false;
    }

    setSuccess(emailInput);
    return true;

}


function validatePassword() {
    let pass = passwordInput.value;
    if (pass.length === 0) {
        setError(passwordInput, "Password is required");
        return false;
    }

    else if (pass.length < 8) {
        setError(passwordInput, "Password must be at least 8 character.");
        return false;
    }

    setSuccess(passwordInput);
    return true;
}

function validateConfirmPassword() {
    let confpass = confPasswordInput.value;
    if (confpass.length === 0) {
        setError(confPasswordInput, "Confirm Password is required");
        return false;
    }

    else if (confpass !== passwordInput.value){
        setError(confPasswordInput, "Confirm Password is different with Password");
        return false;
    }

    setSuccess(confPasswordInput);
    return true;
}

function validateTerms() {
    let terms = termsInput.checked;

    if (terms === false) {
        setError(termsInput, "Please Read the Terms and Privacy Policy first");
        return false;
    }

    setSuccess(termsInput);
    return true;
}


nameInput.addEventListener("input", validateName);
dobInput.addEventListener("input", validateDob);
passwordInput.addEventListener("input", validatePassword);
confPasswordInput.addEventListener("input", validateConfirmPassword);
emailInput.addEventListener("input", validateEmail);
passwordInput.addEventListener("input", () => {
    if (confPasswordInput.value.length > 0) {
        validateConfirmPassword();
    }
});
termsInput.addEventListener("change", validateTerms);

//validasi gender lagi untuk final validation sebelum di submit
const genderInputs = document.getElementsByName("gender");
for (let i = 0; i < genderInputs.length; i++) {
    genderInputs[i].addEventListener("change", radioValidadion);
}

form.addEventListener("submit", e => {
    const isNameValid = validateName();
    const isGenderValid = radioValidadion();
    const isDobValid = validateDob();
    const isPassValid = validatePassword();
    const isConfPassValid = validateConfirmPassword();
    const isEmailValid = validateEmail();
    const isTermsValid = validateTerms();

    if (!isNameValid || !isGenderValid || !isDobValid || !isPassValid || !isConfPassValid || !isEmailValid || !isTermsValid) {
        alert("Register Gagal");
        e.preventDefault(); //seperti system pause
        return;
    }

    e.preventDefault(); // biar tidak langsung menjalankan apa yanga ada di html 
    window.location.href = "homepage.html";
});


