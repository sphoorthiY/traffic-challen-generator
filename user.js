const userForm = document.getElementById("user-form");
const userButton = document.getElementById("user-form-submit");
const userErrorMsg = document.getElementById("user-error-msg");

userButton.addEventListener("click", (e) => {
  e.preventDefault();
  const username = userForm.username.value;
  const password = userForm.password.value;

  if (username === "Sphoorthi" && password === "lol") {
    alert("You have successfully logged in.");
    window.location.assign("challen.html");
  } else {
    loginErrorMsg.style.opacity = 1;
  }
});
