const cardWrapper = document.querySelector(".card__wrapper");
const cards = document.querySelectorAll(".card__content");
const cardCountdown = document.getElementById("card__content--countdown");
const cardContentTiga = document.getElementById("card__content--tiga");
const hiddenTextElement = document.getElementById("hiddenText");
const hiddenTextElement2 = document.getElementById("hiddenText2");
const usiaKamu = document.querySelectorAll("#usiaKamu");
const popupYourDay = document.getElementById("popupYourDay");
const mulaiPerayaan = document.getElementById("mulai");
const audio = document.getElementById("myAudio");
const audioBacotLu = document.getElementById("bacotLu");
const audioClap = document.getElementById("clappingAudio");
const audioBukaHadiah = document.getElementById("bukaHadiah");
const audioHadiah = document.getElementById("audioHadiah");
const audioBacaSuratYa = document.getElementById("bacaSuratYa");
const audioSurat = document.getElementById("audioSurat");
const audioSkipBacaSurat = document.getElementById("skipBacaSurat");
const videoHbd = document.getElementById("videoHbd");
const cardsBtn = document.querySelectorAll(".card__btn");
const cardBtnNextDua = document.getElementById("card__btn--nextContent--dua");
const cardBtnPrevTiga = document.getElementById("card__btn--prevContent--tiga");
const cardBtnNextTiga = document.getElementById("card__btn--nextContent--tiga");
const cardBtnPrevEmpat = document.getElementById(
	"card__btn--prevContent--empat"
);
const click = document.getElementById("click");
const clickLabel = document.querySelector(".click");
const wishes = document.querySelector(".wishes");
const envelope = document.querySelector(".envelope-wrapper");

const baseUrl = window.location.origin;
const isOverflow = window.innerHeight >= "733";
let giftBoxHadiah = false;
let bacaSuratSelesai = false;
let clickOneTime = false;

envelope.addEventListener("click", () => {
	envelope.classList.toggle("flap");
	if (!clickOneTime) {
		clickOneTime = true;
		audioBacaSuratYa.pause();
		audioBacaSuratYa.currentTime = 0;
		setTimeout(() => {
			audioSuratStart();
		}, 2000);
	} else {
		clickOneTime = false;
		audioSuratStop();
	}
});

if (isOverflow) {
	document.body.style.overflow = "hidden";

	cardBtnNextDua.addEventListener("click", () => {
		audioClapAndConfettiStop();
		videoCardDuaStop();
		audioCardTigaStart();
	});

	cardBtnPrevTiga.addEventListener("click", () => {
		if (clickOneTime) {
			clickOneTime = false;
			envelope.classList.toggle("flap");
			audioSuratStop();
		}

		audioClapAndConfettiStart();
		videoCardDuaStart();
		audioCardTigaStop();
	});

	cardBtnNextTiga.addEventListener("click", () => {
		if (clickOneTime) {
			clickOneTime = false;
			envelope.classList.toggle("flap");
			audioSuratStop();
		}

		audioCardTigaStop();
		audioCardEmpatStart();
	});

	cardBtnPrevEmpat.addEventListener("click", () => {
		audioCardTigaStart();
		audioCardEmpatStop();

		if (giftBoxHadiah) {
			audioHadiahStop();
			clickLabel.classList.remove("checked");
			wishes.classList.remove("checked");
			click.checked = false;
		}
	});
} else {
	cardsBtn.forEach((cards) => {
		cards.style.visibility = "hidden";
	});
	document.body.style.overflow = "auto";
	videoHbd.setAttribute("controls", "");

	let oneTimeIsBelow = true;
	let oneTimeVisible = false;
	document.addEventListener("scroll", () => {
		const visibilityCardContentTiga =
			elementVisibility.elementIsVisibleInViewport(cardContentTiga, true);

		if (visibilityCardContentTiga === "isBelow") {
			oneTimeVisible = false;

			if (!oneTimeIsBelow) {
				oneTimeIsBelow = true;
				audioClapAndConfettiStart();
				videoCardDuaStart();
			}

			if (clickOneTime) {
				clickOneTime = false;
				envelope.classList.toggle("flap");
				audioSuratStop();
			}

			audioCardTigaStop();
		}

		if (visibilityCardContentTiga === "visible") {
			oneTimeIsBelow = false;

			audioClapAndConfettiStop();
			videoCardDuaStop();

			if (!oneTimeVisible) {
				oneTimeVisible = true;
				audioCardTigaStart();
			}

			if (giftBoxHadiah) {
				audioHadiahStop();
				clickLabel.classList.remove("checked");
				wishes.classList.remove("checked");
				click.checked = false;
			}

			audioCardEmpatStop();
		}

		if (visibilityCardContentTiga === "isAbove") {
			oneTimeVisible = false;

			if (clickOneTime) {
				clickOneTime = false;
				oneTimeVisible = true;
				envelope.classList.toggle("flap");
				audioSuratStop();
			} else {
				audioCardTigaStop();
				audioCardEmpatStart();
			}
		}
	});
}

function audioClapAndConfettiStart() {
	audioClap.play();
	confetti.start();
	audioClap.addEventListener("ended", () => {
		confetti.stop();
	});
}
function audioClapAndConfettiStop() {
	audioClap.pause();
	audioClap.currentTime = 0;
	confetti.stop();
}
function videoCardDuaStart() {
	videoHbd.play();
	videoHbd.setAttribute("loop", "");
}
function videoCardDuaStop() {
	videoHbd.removeAttribute("loop");
	videoHbd.pause();
	videoHbd.currentTime = 0;
}
function audioCardTigaStart() {
	audioBacaSuratYa.play();
}
function audioCardTigaStop() {
	audioBacaSuratYa.pause();
	audioBacaSuratYa.currentTime = 0;
}
function audioCardEmpatStart() {
	audioBukaHadiah.play();
}
function audioCardEmpatStop() {
	audioBukaHadiah.pause();
	audioBukaHadiah.currentTime = 0;
}
function audioSuratStart() {
	audioSurat.play();
}
function audioSuratStop() {
	audioSurat.pause();
	audioSurat.currentTime = 0;
}
function audioHadiahStart() {
	audioBukaHadiah.pause();
	audioBukaHadiah.currentTime = 0;
	audioHadiah.play();
	audioHadiah.loop = true;
}
function audioHadiahStop() {
	audioHadiah.pause();
	audioHadiah.currentTime = 0;
}

function bukaBoxHadiah(event) {
	giftBoxHadiah = event;

	if (giftBoxHadiah) {
		audioHadiahStart();
		clickLabel.classList.add("checked");
		wishes.classList.add("checked");
		click.checked = true;
	} else {
		audioHadiahStop();
		clickLabel.classList.remove("checked");
		wishes.classList.remove("checked");
		click.checked = false;
	}
}
function mainkanSuara() {
	audio.currentTime = 0;
	audio.play();
}

function tampilkanTeks(event) {
	const teksLebar = hiddenTextElement.offsetWidth;
	const teksTinggi = hiddenTextElement.offsetHeight;

	const viewportLebar = window.innerWidth;
	const viewportTinggi = window.innerHeight;

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

const birthDate = "2002-07-24";
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

	let timeoutCountdown = setTimeout(updateCountdown, 1000);

	if (now >= targetDate && birthdayExpired > now) {
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

			window.location.href = `${baseUrl}/projects/birthday-yui/#card__content--dua`;
			popupYourDay.style.display = "none";
			cardWrapper.style.filter = "none";
			audioClapAndConfettiStart();
			videoCardDuaStart();
		});

		const refreshTimeout = setTimeout(() => {
			window.location.reload();
			clearTimeout(refreshTimeout);
		}, birthdayExpired - now);
	} else {
		cardCountdown.addEventListener("click", mainkanSuara);

		cards.forEach((card) => {
			if (card.classList.contains("cards--birthday")) {
				card.style.display = "none";
			} else {
				card.style.display = "flex";
			}
		});
	}
}

updateCountdown();

function smoothScroll(event) {
	event.preventDefault();
	const target = document.querySelector(event.target.getAttribute("href"));
	target.scrollIntoView({ behavior: "smooth" });
}

const elementVisibility = {
	isBelowThreshold: false,
	isAboveThreshold: false,

	elementIsVisibleInViewport: function (el) {
		const { top, bottom } = el.getBoundingClientRect();
		const { innerHeight } = window;
		const threshold = 0; // Jarak threshold tambahan yang diinginkan

		this.isAboveThreshold = bottom < -threshold; // Cek jika elemen berada di atas viewport
		this.isBelowThreshold = top >= innerHeight + threshold; // Cek jika elemen berada di bawah viewport

		if (
			((top > 1000 && top < innerHeight) ||
				(bottom > 500 && bottom < innerHeight)) &&
			!this.isAboveThreshold &&
			!this.isBelowThreshold
		) {
			// Elemen sebagian terlihat dalam viewport
			return "visible";
		} else if (this.isBelowThreshold) {
			// Elemen berada di bawah viewport
			return "isBelow";
		} else if (this.isAboveThreshold) {
			// Elemen berada di atas viewport
			return "isAbove";
		}

		return false;
	},
};
