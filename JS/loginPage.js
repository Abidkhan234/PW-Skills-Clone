// For password check

const passwordEyeBtn = document.querySelectorAll(".password-eye-btn");

passwordEyeBtn.forEach((v) => {
    v.addEventListener("click", () => passwordChecker(v));
})

const passwordChecker = (v) => {

    let i = v.querySelector("i");

    let passwordBox = v.parentElement.parentElement.querySelector(".password")

    if (i.classList.contains("fa-eye-slash")) {

        passwordBox.type = "text";
        i.classList.replace("fa-eye-slash", "fa-eye");

    } else {

        passwordBox.type = "password";
        i.classList.replace("fa-eye", "fa-eye-slash");

    }

}

// For password check

// For login and sign in fields check

const loginFormBtn = document.getElementById("login-btn");

const loginPasswordBox = document.getElementById("password");

const loginEmailBox = document.getElementById("email");

const data = JSON.parse(localStorage.getItem("data"));

loginFormBtn.addEventListener("click", (e) => {

    let messages =
    {
        email: "",
        password: ""
    };

    if (data) {

        // For Email field checking
        if (loginEmailBox.value.length === 0) {
            messages.email = "Email is required";
        } else if (loginEmailBox.value !== data.email) {
            messages.email = "Invalid email";
        }

        // For Email field checking

        // For Password field checking
        if (loginPasswordBox.value.length === 0) {
            messages.password = "Password is required";
        } else if (loginPasswordBox.value !== data.password) {
            messages.password = "Invalid Password";
        }

        // For Password field checking


        if (messages.email || messages.password) {
            errorShowingFunc(e.target.parentElement.parentElement.classList[0], undefined, messages);
        } else {
            window.location.href = "/index.html";
        }

    } else {
        alert("Plz create account first");
        container.classList.add("check");
        return;
    }

});

const errorShowingFunc = (v, messages1, messages2) => {

    if (v === "login-form") {
        // For Login
        const errorEle = document.querySelectorAll(".login-form .error p");

        errorEle[0].parentElement.classList.remove("invisible");
        errorEle[1].parentElement.classList.remove("invisible");

        errorEle[0].innerHTML = messages2.email;
        errorEle[1].innerHTML = messages2.password;

        const div = document.querySelectorAll(".password-eye-btn-div");

        if (errorEle[0].innerHTML !== "") {
            div[0].classList
                .replace("translate-y-[-50%]", "translate-y-[-25%]")
            div[0].classList.replace("top-[50%]", "top-[25%]");
        } else {
            div[0].classList.replace("translate-y-[-25%]", "translate-y-[-50%]")
            div[0].classList.replace("top-[25%]", "top-[50%]");
        }

        if (errorEle[1].innerHTML !== "") {
            div[1].classList.replace("translate-y-[-50%]", "translate-y-[-25%]")
            div[1].classList.replace("top-[50%]", "top-[25%]")
        } else {
            div[1].classList.replace("translate-y-[-25%]", "translate-y-[-50%]")
            div[1].classList.replace("top-[25%]", "top-[50%]")
        }

        messages2 = {};
        // For Login
    } else {
        // For SignIn
        const errorEle = document.querySelectorAll(".signIn-form .error p");

        errorEle[0].parentElement.classList.remove("invisible");
        errorEle[1].parentElement.classList.remove("invisible");
        errorEle[2].parentElement.classList.remove("invisible");

        errorEle[0].innerHTML = messages1.fullName;
        errorEle[1].innerHTML = messages1.email;
        errorEle[2].innerHTML = messages1.password;

        const div = document.querySelectorAll(".signIn-form .password-eye-btn-div");

        if (errorEle[0].innerHTML !== "") {
            div[0].classList
                .replace("translate-y-[-50%]", "translate-y-[-25%]")
            div[0].classList.replace("top-[50%]", "top-[25%]");
        } else {
            div[0].classList.replace("translate-y-[-25%]", "translate-y-[-50%]")
            div[0].classList.replace("top-[25%]", "top-[50%]");
        }

        if (errorEle[1].innerHTML !== "") {
            div[1].classList.replace("translate-y-[-50%]", "translate-y-[-25%]")
            div[1].classList.replace("top-[50%]", "top-[25%]")
        } else {
            div[1].classList.replace("translate-y-[-25%]", "translate-y-[-50%]")
            div[1].classList.replace("top-[25%]", "top-[50%]")
        }


        if (errorEle[2].innerHTML !== "") {
            div[2].classList.replace("translate-y-[-50%]", "translate-y-[-25%]")
            div[2].classList.replace("top-[50%]", "top-[25%]")
        } else {
            div[2].classList.replace("translate-y-[-25%]", "translate-y-[-50%]")
            div[2].classList.replace("top-[25%]", "top-[50%]")
        }

        // For SignIn
        messages1 = {};
    }

}