let startDay = new Date("01/01/2022");

const getCounter = () => {

  let toDay = new Date();

  //Get the number of days to the next session
  const daysToNextSession = Math.floor(startDay.getTime() / (24 * 60 * 60 * 1000)) % 28;

  //Get the date of the next session
  const nextSessionDate = new Date(new Date().setDate(toDay.getDate() + daysToNextSession));
  document.querySelector(".nextSessionDate").innerHTML = nextSessionDate.toLocaleDateString();
  //Get the number of hour, minutes and seconds (minus the number of days) to the next session
  const newHour = 24 - (toDay.getHours() === 0 ? 24 : toDay.getHours());
  const newMinute = 60 - (toDay.getMinutes() === 0 ? 60 : toDay.getMinutes()) - 1;
  const newSecond = 60 - (toDay.getSeconds() === 0 ? 60 : toDay.getSeconds());

  const counter = document.querySelector(".counterTime");

  counter.innerHTML = `${daysToNextSession.toString().padStart(2, "0")}:${newHour.toString().padStart(2, "0")}:${newMinute.toString().padStart(2, "0")}:${newSecond.toString().padStart(2, "0")}`;
}

document.querySelector(".setDate").addEventListener("change", (ev) => {
  const date = ev.currentTarget.value.split("-");
  console.log(`${date[1]}/${date[2]}/${date[0]}`);
  startDay = new Date(`${date[1]}/${date[2]}/${date[0]}`);
})

setInterval(getCounter, 1000)
