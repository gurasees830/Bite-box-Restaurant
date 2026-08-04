
// Login with correct password and id

function login()
{

    event.preventDefault();
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let error = document.getElementById("error");

    if (email === "gurasees@25" && password === "200425"){
        localStorage.setItem("User", email);
        localStorage.setItem("Password", password);

        // Redirect

        window.location.href = "index.html";

    } else{
        error.innerHTML = "Invalid Email or Password";
    }
    
}

// Show password or hide

function togglepassword(){
    let password = document.getElementById("password");

    if (password.type === "password"){
        password.type = "text";
    }else{
        password.type = "password";
    }
}

