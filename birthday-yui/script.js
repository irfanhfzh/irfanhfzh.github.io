const baseUrl = window.location.origin;
const cardWrapper = document.querySelector(".card__wrapper");
const cards = document.querySelectorAll(".card__content");
const cardCountdown = document.getElementById("card__content--countdown");
const hiddenTextElement = document.getElementById("hiddenText");
const hiddenTextElement2 = document.getElementById("hiddenText2");
const usiaKamu = document.querySelectorAll("#usiaKamu");
const popupYourDay = document.getElementById("popupYourDay");
const mulaiPerayaan = document.getElementById("mulai");
const audio = document.getElementById("myAudio");
const audioBacotLu = document.getElementById("bacotLu");
const audioClap = document.getElementById("clappingAudio");
const audioBoxHadiah = document.getElementById("boxHadiah");
const audioPakyu = document.getElementById("pakyu");
const videoHbd = document.getElementById("videoHbd");
const cardBtnDua = document.getElementById("card__btn--nextContent--dua");
const cardBtnPrevTiga = document.getElementById("card__btn--prevContent--tiga");
const cardBtnNextTiga = document.getElementById("card__btn--nextContent--tiga");
const cardBtnEmpat = document.getElementById("card__btn--prevContent--empat");

if (window.innerHeight >= "733") {
  document.body.style.overflow = "hidden";
  cardBtnDua.addEventListener("click", () => {
    videoHbd.removeAttribute("loop");
    videoHbd.pause();
    videoHbd.currentTime = 0;
  });
  cardBtnPrevTiga.addEventListener("click", () => {
    audioClap.play();
    audioClap.volume = 0.5;
    videoHbd.play();
    videoHbd.setAttribute("loop", "");
    confetti.start();
    audioClap.addEventListener("ended", () => {
      confetti.stop();
    });
  });
  cardBtnNextTiga.addEventListener("click", () => {
    audioBoxHadiah.play();
  });
  cardBtnEmpat.addEventListener("click", () => {
    audioBoxHadiah.pause();
    audioBoxHadiah.currentTime = 0;
  });
} else {
  document.body.style.overflow = "auto";
  videoHbd.setAttribute("controls", "");
  cardBtnNextTiga.addEventListener("click", () => {
    audioBoxHadiah.play();
  });
  cardBtnEmpat.addEventListener("click", () => {
    audioBoxHadiah.pause();
    audioBoxHadiah.currentTime = 0;
  });
}

function pakyuStart() {
  audioBoxHadiah.pause();
  audioBoxHadiah.currentTime = 0;
  audioPakyu.play();
  audioPakyu.volume = 0.5;
  audioPakyu.loop = true;
}
function pakyuStop() {
  audioPakyu.pause();
  audioPakyu.currentTime = 0;
}

function mainkanSuara() {
  audio.currentTime = 0;
  audio.play();
}

function tampilkanTeks(event) {
  let teksLebar = hiddenTextElement.offsetWidth;
  let teksTinggi = hiddenTextElement.offsetHeight;

  let viewportLebar = window.innerWidth;
  let viewportTinggi = window.innerHeight;

  let posisiX = event.clientX;
  let posisiY = event.clientY;

  if (posisiX + teksLebar > viewportLebar) posisiX = viewportLebar - teksLebar;

  if (posisiY + teksTinggi > viewportTinggi)
    posisiY = viewportTinggi - teksTinggi;

  hiddenTextElement.style.display = "block";
  hiddenTextElement.style.left = posisiX + "px";
  hiddenTextElement.style.top = posisiY + "px";

  audio.addEventListener("ended", () => {
    hiddenTextElement.style.display = "none";
    audioBacotLu.play();
    hiddenTextElement2.style.display = "block";
    hiddenTextElement2.style.left = posisiX + "px";
    hiddenTextElement2.style.top = posisiY + "px";
    audioBacotLu.addEventListener("ended", () => {
      hiddenTextElement2.style.display = "none";
    });
  });
}

// Fungsi untuk menghitung usia berdasarkan tanggal lahir
function calculateAge(birthDate) {
  const now = new Date();
  const birth = new Date(birthDate);
  let age = now.getFullYear() - birth.getFullYear();

  const monthDiff = now.getMonth() - birth.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < birth.getDate())) {
    age--;
  }

  return age;
}

const birthDate = "2002-07-24"; // Tanggal lahir Anda (format: "YYYY-MM-DD")
const age = calculateAge(birthDate);

usiaKamu.forEach((usia) => {
  usia.classList.contains("card__text--usia")
    ? (usia.innerHTML = `Usia Yui Sekarang: <br /> ${age} Tahun`)
    : (usia.innerHTML = age);
});

function getTimeRemaining(targetDate) {
  const totalSeconds = Math.floor((targetDate - Date.now()) / 1000);

  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = Math.floor(totalSeconds % 60);

  return {
    days,
    hours,
    minutes,
    seconds,
  };
}

function updateCountdown() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const now = currentDate.getTime();
  const targetDate = new Date(`${currentYear}-07-24 00:00:00`).getTime();

  // Untuk Countdown Timer
  const birthdayExpired = new Date(`${currentYear}-07-25 00:00:00`).getTime();
  const targetDateBirthday = new Date(
    `${now >= birthdayExpired ? currentYear + 1 : currentYear}-07-24 00:00:00`
  ).getTime();
  const timeRemaining = getTimeRemaining(
    now >= targetDate && birthdayExpired >= now
      ? birthdayExpired
      : targetDateBirthday
  );

  timeRemaining.days > 99
    ? (hari.style.fontSize = "1.75rem")
    : (hari.style.fontSize = "2.25rem");

  // Display the countdown in the browser
  hari.innerHTML =
    timeRemaining.days < 10 ? "0" + timeRemaining.days : timeRemaining.days;
  jam.innerHTML =
    timeRemaining.hours < 10 ? "0" + timeRemaining.hours : timeRemaining.hours;
  menit.innerHTML =
    timeRemaining.minutes < 10
      ? "0" + timeRemaining.minutes
      : timeRemaining.minutes;
  detik.innerHTML =
    timeRemaining.seconds < 10
      ? "0" + timeRemaining.seconds
      : timeRemaining.seconds;

  // Refresh the countdown every second
  let timeoutCountdown = setTimeout(updateCountdown, 1000);

  if (now >= targetDate && birthdayExpired >= now) {
    console.log("today is the day");
    clearTimeout(timeoutCountdown);
    cards.forEach((card) => {
      if (card.classList.contains("cards--birthday")) {
        card.style.display = "none";
      } else {
        card.style.display = "flex";
      }
    });
    cardCountdown.removeAttribute("onclick");
    popupYourDay.style.display = "flex";
    cardWrapper.style.filter = "blur(10px)";

    mulaiPerayaan.addEventListener("click", () => {
      cards.forEach((card) => {
        if (card.classList.contains("cards--birthday")) {
          card.style.display = "flex";
        } else {
          card.style.display = "none";
        }
      });
      window.location.href = `${baseUrl}/#card__content--dua`;
      popupYourDay.style.display = "none";
      cardWrapper.style.filter = "none";
      audioClap.play();
      audioClap.volume = 0.5;
      videoHbd.play();
      videoHbd.setAttribute("loop", "");
      confetti.start();
      audioClap.addEventListener("ended", () => {
        confetti.stop();
      });
    });
  } else {
    document
      .querySelector(".card__content")
      .addEventListener("click", mainkanSuara);
    cards.forEach((card) => {
      if (card.classList.contains("cards--birthday")) {
        card.style.display = "none";
      } else {
        card.style.display = "flex";
      }
    });
  }
}

// Start the countdown
updateCountdown();

const envelope = document.querySelector(".envelope-wrapper");
envelope.addEventListener("click", () => {
  envelope.classList.toggle("flap");
});

function smoothScroll(event) {
  event.preventDefault();
  const target = document.querySelector(event.target.getAttribute("href"));
  target.scrollIntoView({ behavior: "smooth" });
}
