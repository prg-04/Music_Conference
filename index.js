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

  countDown.innerHTML =
    timeLeft.days +
    ":Days " +
    timeLeft.hours +
    ":Hours " +
    timeLeft.minutes +
    ":Minutes " +
    timeLeft.seconds +
    ":Seconds"; 
}

setInterval(displayCountDown, 1000);
