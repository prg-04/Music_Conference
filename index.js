const speakersData = [
  {
    name: 'John Ondoro',
    position:
      'Music Producer and Composer, Founder of East African Music Academy',
    aboutAuthor:
      'John Ondoro is a renowned music producer and composer in East Africa. He is the founder of the East African Music Academy, a platform that promotes music education and talent development in the region.',
    imgSrc: './assets/ondoro.jpg',
    imgAlt: 'John',
  },
  {
    name: 'Wanjiku Kamau',
    aboutAuthor:
      ' Wanjiku Kamau is a music business consultant and the founder of Music Connect Africa, a platform that connects musicians and stakeholders in the music industry across East Africa. She is a prominent advocate for the growth and development of the music business in the region.',
    imgSrc: './assets/wanjiku.jpg',
    imgAlt: 'Wanjiku',
  },
  {
    name: 'Amina Abdi Rabar',
    position: 'TV and Radio Host, Music Influencer',
    aboutAuthor:
      'Amina Abdi Rabar is a renowned TV and radio host and a music influencer in East Africa. She has a wide following and is known for her passion for music and her contributions to the music industry in the region.',
    imgSrc: './assets/speaker3.jpg',
    imgAlt: 'Amina',
  },
  {
    name: 'Sauti Sol',
    position: 'Award-winning Afro-pop Band',
    aboutAuthor:
      'Sauti Sol is an award-winning Afro-pop band from East Africa. Known for their unique blend of African and contemporary music, they have gained international recognition and have become one of the most successful bands in the region.',
    imgSrc: './assets/Sauti-Sol-1.jpg',
    imgAlt: 'Sauti-sol',
  },
  {
    name: 'Diamond Platnumz',
    position: '  Tanzanian bongo flava artist',
    aboutAuthor:
      "  Diamond Platnumz is one of the most popular and successful artists in East Africa, with hits such as 'Number one,' 'Marry You,' and 'African Beauty.' His music is a mix of traditional Tanzanian rhythms, pop, and hip-hop, with lyrics that address love, relationships, and social issues.",
    imgSrc: './assets/platnumz.jpg',
    imgAlt: 'Diamond',
  },
  {
    name: 'Nneka',
    position: 'Nigerian-German singer and songwriter',
    aboutAuthor:
      " Nneka's music is a unique blend of hip-hop, reggae, and soul, with politically conscious lyrics that address issues such as poverty, corruption, and social injustice. She has released six studio albums, including 'Victim of Truth' and 'Soul Is Heavy.'",
    imgSrc: './assets/Nneka.jpg',
    imgAlt: 'Nneka',
  },
];

const div = document.createElement('div');
div.className = 'spkr-ttl';
div.innerHTML = `
<h2>Feature Artists</h2>
        <hr />
`;

function createBtn() {
  const btn = document.createElement('button');
  return btn;
}

const cardBtns = document.createElement('div');
cardBtns.className = 'card-btns';
const moreBtn = createBtn();
moreBtn.className = 'more';
moreBtn.innerHTML = "More <span><i class='fa-solid fa-chevron-down'></i></span>";

const lessBtn = createBtn();
lessBtn.className = 'less';
lessBtn.innerHTML = "Less <span><i class='fa-solid fa-chevron-up'></i></span>";

cardBtns.appendChild(moreBtn);
cardBtns.appendChild(lessBtn);

function renderSpeakersOnHomePage(speakersData) {
  if (window.location.pathname === '/') {
    const speakersSection = document.getElementById('speakers');
    const speakersContainer = document.createElement('div');
    speakersContainer.className = 'cards';

    const cards = speakersData.map((speaker, index) => {
      const {
        name, position, aboutAuthor, imgSrc, imgAlt,
      } = speaker;
      const card = document.createElement('div');
      card.className = `card${index >= 2 ? ' toggle-card' : ''}`;

      const imagesContainer = document.createElement('div');
      imagesContainer.className = 'imgs';

      const checkedImage = document.createElement('img');
      checkedImage.className = 'checked';
      checkedImage.src = './assets/checked.png';
      checkedImage.alt = 'checked-image';
      imagesContainer.appendChild(checkedImage);

      const speakerImage = document.createElement('img');
      speakerImage.className = 'spkr';
      speakerImage.src = imgSrc;
      speakerImage.alt = imgAlt;
      imagesContainer.appendChild(speakerImage);

      card.appendChild(imagesContainer);

      const textContainer = document.createElement('div');
      textContainer.className = 'text';

      const speakerName = document.createElement('h5');
      speakerName.textContent = name;
      textContainer.appendChild(speakerName);

      const speakerPosition = document.createElement('p');
      speakerPosition.className = 'position';
      speakerPosition.textContent = position;
      textContainer.appendChild(speakerPosition);

      const speakerAboutAuthor = document.createElement('p');
      speakerAboutAuthor.className = 'abt-author';
      speakerAboutAuthor.textContent = aboutAuthor;
      textContainer.appendChild(speakerAboutAuthor);

      card.appendChild(textContainer);

      return card;
    });

    speakersContainer.append(...cards);
    speakersSection.appendChild(div);
    speakersSection.appendChild(speakersContainer);
    speakersSection.appendChild(cardBtns);
  }
}

renderSpeakersOnHomePage(speakersData);

window.addEventListener('load', () => {
  const slides = document.querySelectorAll('.carousel-slide');
  for (let i = 0; i < slides.length; i += 1) {
    slides[i].style.animationPlayState = 'running';
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.toggle');
  const navlinks = document.querySelector('#navlinks');
  const links = document.querySelectorAll('.link');

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('open');
    navlinks.classList.toggle('open');
  });

  links.forEach((link) => {
    link.addEventListener('click', () => {
      toggle.classList.remove('open');
      navlinks.classList.remove('open');
    });
  });

  const eventDate = new Date('2023-05-10T10:00:00Z');

  function timeRemaining() {
    const now = new Date();
    const distance = eventDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }

  function displayCountDown() {
    const timeLeft = timeRemaining();
    const countDown = document.querySelector('.eventOn');

    countDown.innerHTML = `${timeLeft.days}:Days ${timeLeft.hours}:Hours ${timeLeft.minutes}:Minutes ${timeLeft.seconds}:Seconds`;
  }

  if (window.location.pathname === '/') {
    setInterval(displayCountDown, 1000);
  }

  if (window.location.pathname === '/') {
    const more = document.querySelector('.more');
    const less = document.querySelector('.less');
    const toggleCards = document.querySelectorAll('.toggle-card');

    if (more) {
      more.addEventListener('click', () => {
        more.classList.add('hide');
        less.classList.add('show');
        toggleCards.forEach((card) => {
          card.classList.add('open');
        });
      });
    }

    if (less) {
      less.addEventListener('click', () => {
        more.classList.remove('hide');
        less.classList.remove('show');
        toggleCards.forEach((card) => {
          card.classList.remove('open');
        });
      });
    }
  }
});
