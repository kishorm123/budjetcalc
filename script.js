function getStarted() {
    window.location.href = "./register.html";
}

function register() {
    const uname = document.getElementById("uname").value;
    const pwd = document.getElementById("pwd").value;

    if (uname === "" || pwd === "") {
        alert("Please fill the form");
    } else {
        if (localStorage.getItem(uname)) {
            alert("Username already exists");
        } else {
            const obj = {
                username: uname,
                password: pwd
            };
            localStorage.setItem(uname, JSON.stringify(obj));
            alert("Registration successful");
            window.location.href = "./login.html";
        }
    }
}

function signIn() {
    window.location.href = "./login.html";
}

function login() {
    const username = document.getElementById("usname").value;
    const password = document.getElementById("psd").value;

    if (username === "" || password === "") {
        alert("Please fill the form");
    } else {
        const userDetails = JSON.parse(localStorage.getItem(username));
        if (userDetails && userDetails.password === password) {
            alert("Login successful");
            // Redirect to the user's dashboard or any other page
        } else {
            alert("Incorrect username or password");
        }
    }
}
