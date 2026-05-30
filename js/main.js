const inputCalcu = document.getElementById("display");

function appendDisplay(value) {
  inputCalcu.value += value;
}

function calcu() {
  try {
    inputCalcu.value = eval(inputCalcu.value);
  } catch {
    inputCalcu.value = "Error";
  }
}

function delall() {
  inputCalcu.value = "";
}

function del() {
  inputCalcu.value = inputCalcu.value.slice(0, -1);
}
