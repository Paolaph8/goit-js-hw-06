// Obtiene el elemento del contador y los botones
const counter = document.getElementById("counter");
const decrementButton = counter.querySelector('[data-action="decrement"]');
const incrementButton = counter.querySelector('[data-action="increment"]');
const valueSpan = counter.querySelector("#value");

let counterValue = 0;

function updateCounter() {
  valueSpan.textContent = counterValue;
}

function incrementCounter() {
  counterValue++;
  updateCounter();
}

function decrementCounter() {
  counterValue--;
  updateCounter();
}

decrementButton.addEventListener("click", decrementCounter);
incrementButton.addEventListener("click", incrementCounter);
