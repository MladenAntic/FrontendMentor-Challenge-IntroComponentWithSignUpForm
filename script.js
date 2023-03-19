const inputs = document.querySelectorAll("input");
const submit = document.getElementById("submit");
const errorMessages = document.querySelectorAll(".error");
const iconError = document.querySelectorAll("img");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  if (inputs[0].checkValidity()) {
    inputs[0].style.border = "1px solid var(--grayish-blue)";
    inputs[0].style.marginBottom = "20px";
    errorMessages[0].style.display = "none";
    iconError[0].style.display = "none";
  }

  if (inputs[1].checkValidity()) {
    inputs[1].style.border = "1px solid var(--grayish-blue)";
    inputs[1].style.marginBottom = "20px";
    errorMessages[1].style.display = "none";
    iconError[1].style.display = "none";
  }

  if (inputs[2].checkValidity()) {
    inputs[2].style.border = "1px solid var(--grayish-blue)";
    inputs[2].style.marginBottom = "20px";
    errorMessages[2].style.display = "none";
    iconError[2].style.display = "none";
  }
  
  if (inputs[3].checkValidity()) {
    inputs[3].style.border = "1px solid var(--grayish-blue)";
    inputs[3].style.marginBottom = "20px";
    errorMessages[3].style.display = "none";
    iconError[3].style.display = "none";
  } else if (
    !inputs[0].checkValidity() &&
    !inputs[1].checkValidity() &&
    !inputs[2].checkValidity() &&
    !inputs[3].checkValidity()
  ) {
    inputs.forEach((input) => {
      input.style.border = "1px solid var(--red)";
      input.style.marginBottom = "40px";
      errorMessages.forEach((message) => {
        message.style.display = "block";
      });
      iconError.forEach((icon) => {
        icon.style.display = "block";
      });
    });
  }
  inputs.forEach((input, idx) => {
    input.addEventListener("invalid", (e) => {
      e.target.style.border = "1px solid var(--red)";
      switch (idx) {
        case 0:
          input.style.marginBottom = "40px";
          errorMessages[0].style.display = "block";
          iconError[0].style.display = "block";
          break;
        case 1:
          input.style.marginBottom = "40px";
          errorMessages[1].style.display = "block";
          iconError[1].style.display = "block";
          break;
        case 2:
          input.style.marginBottom = "40px";
          errorMessages[2].style.display = "block";
          iconError[2].style.display = "block";
          break;
        case 3:
          input.style.marginBottom = "40px";
          errorMessages[3].style.display = "block";
          iconError[3].style.display = "block";
          break;
      }
    });
  });
});
