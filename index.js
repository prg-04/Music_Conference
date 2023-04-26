const speakersData = [
  {
    name: "John Ondoro",
    position:
      "Music Producer and Composer, Founder of East African Music Academy",
    aboutAuthor:
      "John Ondoro is a renowned music producer and composer in East Africa. He is the founder of the East African Music Academy, a platform that promotes music education and talent development in the region.",
    imgSrc: "./assets/ondoro.jpg",
    imgAlt: "John",
  },
  {
    name: "Wanjiku Kamau",
    aboutAuthor:
      " Wanjiku Kamau is a music business consultant and the founder of Music Connect Africa, a platform that connects musicians and stakeholders in the music industry across East Africa. She is a prominent advocate for the growth and development of the music business in the region.",
    imgSrc: "./assets/wanjiku.jpg",
    imgAlt: "Wanjiku",
  },
  {
    name: "Amina Abdi Rabar",
    position: "TV and Radio Host, Music Influencer",
    aboutAuthor:
      "Amina Abdi Rabar is a renowned TV and radio host and a music influencer in East Africa. She has a wide following and is known for her passion for music and her contributions to the music industry in the region.",
    imgSrc: "./assets/speaker3.jpg",
    imgAlt: "Amina",
  },
  {
    name: "Sauti Sol",
    position: "Award-winning Afro-pop Band",
    aboutAuthor:
      "Sauti Sol is an award-winning Afro-pop band from East Africa. Known for their unique blend of African and contemporary music, they have gained international recognition and have become one of the most successful bands in the region.",
    imgSrc: "./assets/Sauti-Sol-1.jpg",
    imgAlt: "Sauti-sol",
  },
  {
    name: "Diamond Platnumz",
    position: "  Tanzanian bongo flava artist",
    aboutAuthor:
      "  Diamond Platnumz is one of the most popular and successful artists in East Africa, with hits such as 'Number one,' 'Marry You,' and 'African Beauty.' His music is a mix of traditional Tanzanian rhythms, pop, and hip-hop, with lyrics that address love, relationships, and social issues.",
    imgSrc: "./assets/platnumz.jpg",
    imgAlt: "Diamond",
  },
  {
    name: "Nneka",
    position: "Nigerian-German singer and songwriter",
    aboutAuthor:
      " Nneka's music is a unique blend of hip-hop, reggae, and soul, with politically conscious lyrics that address issues such as poverty, corruption, and social injustice. She has released six studio albums, including 'Victim of Truth' and 'Soul Is Heavy.'",
    imgSrc: "./assets/Nneka.jpg",
    imgAlt: "Nneka",
  },
];

const div = document.createElement("div");
div.className = "spkr-ttl";
div.innerHTML = `
<h2>Feature Artists</h2>
        <hr />
`;


function renderSpeakersOnHomePage(speakersData) {
  if (location.pathname === "/") {
    var speakersSection = document.getElementById("speakers");
    var speakersContainer = document.createElement("div");
    speakersContainer.className = "cards";

    for (var i = 0; i < speakersData.length; i++) {
      const speaker = speakersData[i];
      const { name, position, aboutAuthor, imgSrc, imgAlt } = speaker;
      var card = document.createElement("div");
      card.className = "card";

      var imagesContainer = document.createElement("div");
      imagesContainer.className = "imgs";

      var checkedImage = document.createElement("img");
      checkedImage.className = "checked";
      checkedImage.src = "./assets/checked.png";
      checkedImage.alt = "checked-image";
      imagesContainer.appendChild(checkedImage);

      var speakerImage = document.createElement("img");
      speakerImage.className = "spkr";
      speakerImage.src = imgSrc;
      speakerImage.alt = imgAlt;
      imagesContainer.appendChild(speakerImage);

      card.appendChild(imagesContainer);

      var textContainer = document.createElement("div");
      textContainer.className = "text";

      var speakerName = document.createElement("h5");
      speakerName.textContent = name;
      textContainer.appendChild(speakerName);

      var speakerPosition = document.createElement("p");
      speakerPosition.className = "position";
      speakerPosition.textContent = position;
      textContainer.appendChild(speakerPosition);

      var speakerAboutAuthor = document.createElement("p");
      speakerAboutAuthor.className = "abt-author";
      speakerAboutAuthor.textContent = aboutAuthor;
      textContainer.appendChild(speakerAboutAuthor);

      card.appendChild(textContainer);

      speakersContainer.appendChild(card);
    }

    speakersSection.appendChild(div);
    speakersSection.appendChild(speakersContainer);
  }
}

renderSpeakersOnHomePage(speakersData);

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".toggle");
  const navlinks = document.querySelector("#navlinks");
  const links = document.querySelectorAll(".link");

  toggle.addEventListener("click", () => {
    toggle.classList.toggle("open");
    navlinks.classList.toggle("open");
  });

  links.forEach((link) => {
    link.addEventListener("click", () => {
      toggle.classList.remove("open");
      navlinks.classList.remove("open");
    });
  });

  const eventDate = new Date("2023-05-10T10:00:00Z");

  function timeRemaining() {
    const now = new Date();
    const distance = eventDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
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
    const countDown = document.querySelector(".eventOn");

    countDown.innerHTML = `${timeLeft.days}:Days ${timeLeft.hours}:Hours ${timeLeft.minutes}:Minutes ${timeLeft.seconds}:Seconds`;
  }

  if (window.location.pathname === "/") {
    setInterval(displayCountDown, 1000);
  }

  if (window.location.pathname === "/") {
    const more = document.querySelector(".more");
    const less = document.querySelector(".less");
    const toggleCards = document.querySelectorAll(".toggle-card");

    if (more) {
      more.addEventListener("click", () => {
        more.classList.add("hide");
        less.classList.add("show");
        toggleCards.forEach((card) => {
          card.classList.add("open");
        });
      });
    }

    if (less) {
      less.addEventListener("click", () => {
        more.classList.remove("hide");
        less.classList.remove("show");
        toggleCards.forEach((card) => {
          card.classList.remove("open");
        });
      });
    }
  }
});

$(document).ready(function () {
  $(".container").slick({
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 500,
    arrows: false,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  });
});
