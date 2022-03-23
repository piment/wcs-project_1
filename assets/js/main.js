const dayOfFirstSession = new Date('01/01/2022');
const daysBetweenSession = 28;

const getCounter = (startDay, sessionInterval) => {
  const toDay = new Date();

  // Get the number of days to the next session
  const daysToNextSession = 28 - (Math.ceil((toDay - startDay) / (1000 * 60 * 60 * 24)) % sessionInterval);

  // Get the date of the next session
  const nextSessionDate = new Date(new Date().setDate(toDay.getDate() + daysToNextSession));

  document.querySelector('.nextSessionDate').textContent = `(${nextSessionDate.toLocaleDateString()})`;

  // Get the number of hour, minutes and seconds (minus the number of days) to the next session
  let newHour = 24 - (toDay.getHours() === 0 ? 24 : toDay.getHours()) - 1;
  newHour = newHour === -1 ? 23 : newHour;
  const newMinute = 60 - (toDay.getMinutes() === 0 ? 60 : toDay.getMinutes()) - 1;
  const newSecond = 60 - (toDay.getSeconds() === 0 ? 60 : toDay.getSeconds());

  const day = document.querySelector('.day');
  const hour = document.querySelector('.hour');
  const minute = document.querySelector('.minute');
  const second = document.querySelector('.second');

  day.textContent = `${daysToNextSession.toString().padStart(2, '0')}`;
  hour.textContent = `${newHour.toString().padStart(2, '0')}`;
  minute.textContent = `${newMinute.toString().padStart(2, '0')}`;
  second.textContent = `${newSecond.toString().padStart(2, '0')}`;
};

setInterval(getCounter, 1000, dayOfFirstSession, daysBetweenSession);

// Function to move the hero button (mobil => desktop / desktop => mobil);
function moveHeroButtonWithScreenSize(elementToMoveClass) {
  // console.log(window);
  if (window.innerWidth > 720) {
    const el = document.querySelector(elementToMoveClass);
    const parent = document.querySelector('.hero-logo');
    parent.appendChild(el);
    console.log('move to desktop');
  } else {
    const el = document.querySelector(elementToMoveClass);
    const parent = document.querySelector('.hero-button-bloc');
    parent.appendChild(el);
    console.log('move to mobil');
  }
}

// window.onresize(moveHeroButtonWithScreenSize('.hero-button'));
window.addEventListener('resize', () => moveHeroButtonWithScreenSize('.hero-button'));
document.addEventListener('resize', () => console.log('resize'));

const menuCards = [
  {
    title: 'Histoire & Règles',
    icon: '',
    text: "Découvrez l’histoire de la roulette indienne, son créateur, ainsi que ses règles."
  },
  {
    title: 'Hall of Fame',
    icon: '',
    text: "La Roulette Indienne possède nombres de variantes, chacune avec son champion incontesté."
  },
  {
    title: 'Contact & Inscription',
    icon: '',
    text: "Vous souhaitez nous contacter pour obtenir plus de renseignement? Voir directement vous inscrire à la prochaine session?"
  }
];

class CardElement extends HTMLElement {
  constructor() {
    super();
    const logoTile = document.createElement('div');
    logoTile.classList.add('logoTiles');
    //this.appendChild(logoTile);

    const article = document.createElement('div');
    article.classList.add('article');
    

    const title = document.createElement('h1');
    title.textContent = this.attributes.title.value;
    article.appendChild(title);

    const paragraph = document.createElement('p');
    paragraph.textContent = 'text de test!!!';
    article.appendChild(paragraph);
    this.appendChild(article);
  }
}

customElements.define('card-element', CardElement);

const section = document.querySelector('#cardMenu');
menuCards.forEach((card) => {
  section.innerHTML += '<card-element />';
});
