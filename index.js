const speakersData = [
  {
    name: "Yochai Benkler",
    position:
      "Berkman Professor of Enterpreneurship legal studies at Harvard Law School",
    aboutAuthor:
      "Benkler studies commons based peer production and published his seminal book The Wealth of Networks in 2006",
    imgSrc: "./assets/speaker1.jpg",
    imgAlt: "Yochai",
  },
  {
    name: "Kilnam Chon",
    aboutAuthor:
      "Kilnam Chon helped bring the internet to Asia and is an outspoken advocate for the open web and digital commons. In 2012, he was inducted into the inaugural class of the Internet Society's (ISOC) Internet Hall of Fame.",
    imgSrc: "./assets/speaker2.jpg",
    imgAlt: "Kilnam",
  },
  {
    name: "SohYeong Noh",
    position: "Director of Art Center Nabi and a board of members of CC Kenya",
    aboutAuthor:
      "As the main venue for new media art production in Kenya, Nabi promotes cross-disciplinary collaboration and understanding among science, technology, humanities, and the arts.",
    imgSrc: "./assets/speaker3.jpg",
    imgAlt: "SohYeong",
  },
  {
    name: "Julia Leda",
    position: "President of Young Pirates of Europe",
    aboutAuthor:
      "European integration, political democracy, and participation of youth through online as her major condemn, Leda's report outlining potential changes to EU copyright law was approved by the Parliament in July.",
    imgSrc: "./assets/speaker4.jpg",
    imgAlt: "Julia",
  },
  {
    name: "Lila Tretikov",
    position: "Executive Director of the Wikimedia Foundation",
    aboutAuthor:
      "Lila Tretikov is the Executive Director of the Wikimedia Foundation, the nonprofit organization that operates Wikipedia. Wikipedia is freely available in 290 languages and used by nearly half a billion people around the world every month.",
    imgSrc: "./assets/speaker5.jpg",
    imgAlt: "Lila",
  },
  {
    name: "Ryan Merkley",
    position: "CEO of Creative Commons, ex COO of the Mozilla Foundation",
    aboutAuthor:
      "Ryan had been leading open-source projects at the Mozilla Foundation such as the open source movement.",
    imgSrc: "./assets/speaker6.jpg",
    imgAlt: "Ryan",
  },
];

function renderSpeakers(speakersData) {
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

  speakersSection.appendChild(speakersContainer);
}

renderSpeakers(speakersData);

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

  const eventDate = new Date("2023-05-01T10:00:00Z");

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
