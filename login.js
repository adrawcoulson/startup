function login() {
    const nameEl = document.querySelector("#name");
    localStorage.setItem("userName", nameEl.value);
    const passEl = document.querySelector("#password");
    localStorage.setItem("password", passEl.value);
    window.location.href = "landing.html";
    }