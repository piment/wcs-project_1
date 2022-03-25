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
}

function open_infos()
{
    width = 100;
    height = 100;
    if(window.innerWidth)
  {
  var left = (window.innerWidth-width)/2;
  var top = (window.innerHeight-height)/2;
  }
  else
  {
  var left = (document.body.clientWidth-width);
  var top = (document.body.clientHeight-height);
  }
  window.open('popup.html','nom_de_ma_popup', 'fullscreen: yes');
}
 
document.querySelector('.tacos').addEventListener('change', (ev) => {
  ev.currentTarget.value === "tacos" ? open_infos() : console.log(false);
})

