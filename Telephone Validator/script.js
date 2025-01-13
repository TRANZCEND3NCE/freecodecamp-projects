const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div");

checkBtn.addEventListener("click", () => {
  const text = userInput.value;

  if (text.length === 0) {
    alert("Please provide a phone number");
    return;
  };

  const countryCode = '^(1\\s?)?';
  const areaCode = '(\\([0-9]{3}\\)|[0-9]{3})';
  const spacesDashes = '[\\s\\-]?';
  const phoneNumber = '[0-9]{3}[\\s\\-]?[0-9]{4}$';
  const phoneRegex = new RegExp(`${countryCode}${areaCode}${spacesDashes}${phoneNumber}`);
  phoneRegex.test(text) ? (resultsDiv.style.color = '#066637') : (resultsDiv.style.color = '#af0f0f');
  resultsDiv.innerHTML = `${phoneRegex.test(text) ? "Valid" : "Invalid"} US number: ${text}`;
});

clearBtn.addEventListener("click", () => {
  resultsDiv.innerHTML = "";
});
