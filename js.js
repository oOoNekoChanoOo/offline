let inputNumber = document.getElementById("inputNumber");
function validateInput() {
  let errorMessage = document.getElementById("display_error");
  let value = document.getElementById("inputNumber").value;
  if (value === "") {
    errorMessage.textContent = "Hãy nhập 1 chữ số vào ô input";
    return false;
  }
  if (value <= 0) {
    console.log(value);
    errorMessage.textContent = "Hãy nhập 1 chữ số lớn hơn 0";
    return false;
  }
  if (isNaN(value)) {
    errorMessage.textContent = "Hãy nhập 1 số ";
    return false;
  }
  return true;
}

let btnGenerate = document.getElementById("btnGenerate");
btnGenerate.addEventListener("click", function (event) {
  checkNum();
  validateInput();
  event.preventDefault();
});

function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
function checkNum(num) {
  document.getElementById("container").innerHTML = "";
  let value = document.getElementById("inputNumber").value;

  for (let i = 1; i <= value; i++) {
    const div = document.createElement("div");
    div.classList.add("block");
    div.textContent = i;

    if (i % 2 === 0) {
      div.classList.add("even");
    } else {
      div.classList.add("odd");
    }

    if (isPrime(i)) {
      div.classList.add("prime");
    }

    container.appendChild(div);
  }
}
