let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");

let strings = "";
let arr = Array.from(buttons);

const handleInput = (char) => {
  if (char === "=") {
    strings = eval(strings);
    input.value = strings;
  } else if (char === "AC") {
    strings = "";
    input.value = strings;
  } else if (char === "Del") {
    strings = strings.substring(0, strings.length - 1);
    input.value = strings;
  } else {
    strings += char;
    input.value = strings;
  }
};

arr.forEach((button) => {
  button.addEventListener("click", (e) => {
    handleInput(e.target.innerHTML);  
  });
});

document.addEventListener("keydown", (e) => {
  const key = e.key;

  if (
    (key >= "0" && key <= "9") ||
    ["+", "-", "*", "/"].includes(key) ||
    key === "Enter" ||
    key === "Backspace" ||
    key === "Delete"
  ) {
    if (key === "Enter") {
      handleInput("=");
    } else if (key === "Backspace") {
      handleInput("Del");
    } else if (key === "Delete") {
      handleInput("AC");
    } else {
      handleInput(key);
    }
  }

  if (key === "Enter") {
    e.preventDefault();
  }
});
