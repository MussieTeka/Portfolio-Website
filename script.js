var sidemenu = document.getElementById("sidemenu");
function openMenu() {
  sidemenu.style.right = "0";
}
function closeMenu() {
  sidemenu.style.right = "-768px";
}

//Form Validation

const form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const emailInput = document.querySelector("#email");
  const email = emailInput.value;

  if (email === email.toLowerCase()) {
    // email is in lowercase, form can be submitted
    form.submit();
  } else {
    // email is not in lowercase, show error message
    const errorMessage = document.createElement("p");
    errorMessage.textContent =
      "Sorry! Error occured. Email must be in lowercase!";
    form.appendChild(errorMessage);
  }
}
