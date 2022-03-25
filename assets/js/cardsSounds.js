const cardsBtn = document.querySelectorAll('.fa-circle-play');
cardsBtn.forEach(btn => {
  btn.addEventListener('click', ev => {
    let file = '';
    switch (ev.currentTarget.attributes.card.value) {
      case 'cloclo':
        file = '/assets/son/CloSample.mp3';
        break;
      case 'jeanne':
        file = '/assets/son/JeanDarcSample.mp3';
        break;
      case 'soldat':
        file = '/assets/son/SoldatSample.mp3';
        break;
      default:
        file = '/assets/son/FIRE.mp3';
        break;
    }
    const sound = new Audio(file);
    sound.play();
  });
});
