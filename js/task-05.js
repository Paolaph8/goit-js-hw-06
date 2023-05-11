const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

function updateNameOutput() {
  const inputValue = nameInput.value;
  nameOutput.textContent = inputValue || "Anonymous";
}

nameInput.addEventListener("input", updateNameOutput);
