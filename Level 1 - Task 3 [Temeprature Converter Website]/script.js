function convertTemperature() {







function addEffect(type) {
  const container = document.getElementById("effect-container");
  container.innerHTML = ""; // Clear previous

  for (let i = 0; i < 50; i++) {
    const effect = document.createElement("div");

    if (type === "cold") {
      effect.className = "snowflake";
      effect.style.left = Math.random() * 100 + "vw";
      effect.style.animationDuration = (2 + Math.random() * 3) + "s";
    } else if (type === "hot") {
      effect.className = "spark";
      effect.style.left = Math.random() * 100 + "vw";
      effect.style.background = ["#ff4500", "#ff9900", "#ff2200"][Math.floor(Math.random() * 3)];
    } else if (type === "normal") {
      effect.className = "bubble";
      effect.style.left = Math.random() * 100 + "vw";
      effect.style.animationDuration = (5 + Math.random() * 3) + "s";
    }

    container.appendChild(effect);



    function addEffect(type) {
  const container = document.getElementById("effect-container");
  container.innerHTML = ""; // Clear previous

  for (let i = 0; i < 50; i++) {
    const effect = document.createElement("div");

    if (type === "cold") {
      effect.className = "snowflake";
      effect.style.left = Math.random() * 100 + "vw";
      effect.style.animationDuration = (2 + Math.random() * 3) + "s";
    } else if (type === "hot") {
      effect.className = "spark";
      effect.style.left = Math.random() * 100 + "vw";
      effect.style.background = ["#ff4500", "#ff9900", "#ff2200"][Math.floor(Math.random() * 3)];
    } else if (type === "normal") {
      effect.className = "bubble";
      effect.style.left = Math.random() * 100 + "vw";
      effect.style.animationDuration = (5 + Math.random() * 3) + "s";
    }

    container.appendChild(effect);
  }
}

  }
}









  const input = document.getElementById("tempInput").value;
  const from = document.getElementById("fromUnit").value;
  const to = document.getElementById("toUnit").value;
  const resultDiv = document.getElementById("result");
  const body = document.getElementById("bodyBg");

  if (input === "" || isNaN(input)) {
    resultDiv.textContent = "❗ Please enter a valid temperature.";
    return;
  }

  const temp = parseFloat(input);
  let result;

  let celsius;
  if (from === "celsius") celsius = temp;
  else if (from === "fahrenheit") celsius = (temp - 32) * 5/9;
  else if (from === "kelvin") celsius = temp - 273.15;

  if (to === "celsius") result = celsius;
  else if (to === "fahrenheit") result = (celsius * 9/5) + 32;
  else if (to === "kelvin") result = celsius + 273.15;

  result = result.toFixed(2);
  resultDiv.textContent = `🌡️ ${result} °${to.charAt(0).toUpperCase()}`;

  body.classList.remove("hot", "cold", "normal");

  if (celsius > 38) {
    body.classList.add("hot");
  } else if (celsius < 5) {
    body.classList.add("cold");
  } else {
    body.classList.add("normal");
  }
}
