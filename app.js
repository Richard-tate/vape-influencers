const dotsNav = document.querySelector(".carousel__dots");
const dots = Array.from(dotsNav.children);
const track = document.querySelector(".cards__wrapper");
const cards = Array.from(track.children);
const toogleBtn = document.querySelector(".btn.btn_toogle");

toogleBtn.addEventListener("click", () => {
	const menu = document.querySelector(".menu");
	menu.classList.toggle("open");
});

const updateDots = (currentDot, targetDot) => {
	currentDot.classList.remove("active");
	targetDot.classList.add("active");
};
const updateCards = (currentCard, targetCard, prevCard) => {
	if (currentCard === targetCard) return;
	currentCard.classList.remove("active");
	currentCard.classList.add("prev");
	prevCard.classList.remove("prev");
	prevCard.classList.add("next");
	targetCard.classList.add("active");
	targetCard.classList.remove("next");
};

track.addEventListener("click", (e) => {
	const targetCard = e.target.closest(".card");
	if (!targetCard) return;
	const currentCard = track.querySelector(".active");
	const currentDot = dotsNav.querySelector(".active");
	const targetDot = dotsNav.children[cards.indexOf(targetCard)];
	const prevCard = track.querySelector(".prev");
	updateDots(currentDot, targetDot);
	updateCards(currentCard, targetCard, prevCard);
});

dotsNav.addEventListener("click", (e) => {
	const targetDot = e.target.closest("li");
	if (!targetDot) return;
	const currentDot = dotsNav.querySelector(".active");
	const currentCard = track.querySelector(".active");
	const targetIndex = dots.findIndex((dot) => dot === targetDot);
	const targetCard = cards[targetIndex];
	const prevCard = track.querySelector(".prev");
	updateDots(currentDot, targetDot);
	updateCards(currentCard, targetCard, prevCard);
});
