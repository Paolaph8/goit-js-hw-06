const validationInput = document.querySelector("#validation-input");

validationInput.addEventListener("blur", () => {
  const inputLength = validationInput.value.length;
  const dataLength = parseInt(validationInput.getAttribute("data-length"));

  if (inputLength === dataLength) {
    validationInput.classList.remove("invalid");
    validationInput.classList.add("valid");
  } else {
    validationInput.classList.remove("valid");
    validationInput.classList.add("invalid");

    console.log(validationInput);
  }
});
