const slider = document.getElementById("slider");
const output = document.getElementById("ageslider");
output.innerHTML = "";

slider.oninput = () => {
  output.innerHTML = this.value;
  if (slider.value < 30) {
    output.innerHTML = "Ça va";
  } else if (slider.value < 40) {
    output.innerHTML = "Premières rides";
  } else if (slider.value < 50) {
    output.innerHTML = "Nivea";
  } else if (slider.value < 60) {
    output.innerHTML = "Un peu plus de Nivea";
  } else if (slider.value < 80) {
    output.innerHTML = "Et le reste";
  } else if (slider.value >= 80) {
    output.innerHTML = "Accordéon";
  }
};
