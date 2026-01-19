function login() {
  let user = document.getElementById("username").value.trim();
  let pass = document.getElementById("password").value.trim();

  let userError = document.getElementById("userError");
  let passError = document.getElementById("passError");
  let successMsg = document.getElementById("successMsg");

  let correctUser = "Hari";
  let correctPass = "1234";

  userError.innerText = "";
  passError.innerText = "";
  successMsg.style.display = "none";

  if (user === "" && pass === "") {
    userError.innerText = "Enter your username";
    passError.innerText = "Enter your password";
  } else if (user === "") {
    userError.innerText = "Enter your username";
  } else if (pass === "") {
    passError.innerText = "Enter your password";
  } else if (user.toLowerCase() !== correctUser.toLowerCase()) {
    userError.innerText = "Invalid Username";
  } else if (pass !== correctPass) {
    passError.innerText = "Invalid Password";
  } else {
    successMsg.innerText = "Login Successfully ✔";
    successMsg.style.display = "block";

    setTimeout(() => {
      window.location.href = "home.html";
    }, 2000);
  }
}

function logout() {
  window.location.href = "index.html";
}
