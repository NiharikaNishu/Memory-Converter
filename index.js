

const convertToKB = () => {
  let given = document.getElementById("given").value;
  given = parseFloat(given);

  if (isNaN(given)) {
    console.log("Not a valid input");
    return;
  }

  let result = +(given / 1024).toFixed(2);

  let resultText = `The Memory in KiloBytes is ${result}`;
  document.getElementById("result").innerHTML = resultText;
};

const convertToMB = () => {
  let given = document.getElementById("given").value;
  given = parseFloat(given);

  if (isNaN(given)) {
    console.log("Not a valid input");
    return;
  }

  let result = +(given / (1024 * 1024)).toFixed(2);

  let resultText = `The Memory in MegaBytes is ${result}`;
  document.getElementById("result").innerHTML = resultText;
};

const convertToGB = () => {
  let given = document.getElementById("given").value;
  given = parseFloat(given);

  if (isNaN(given)) {
    console.log("Not a valid input");
    return;
  }

  let result = +(given / (1024 * 1024 * 1024)).toFixed(2);

  let resultText = `The Memory in GigaBytes is ${result}`;
  document.getElementById("result").innerHTML = resultText;
};
