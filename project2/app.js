const cardArray = [
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
];

cardArray.sort(() => 0.5 - Math.random()); //shuffling an array randomly

// console.log(cardArray)

const gridDisplay = document.querySelector("#grid");
let cardChosen = [];
let cardChosenIds = [];
let cardsWon = [];

function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "images/blank.png");
    card.setAttribute("dataId", i);
    card.addEventListener("click", flipCart);
    gridDisplay.appendChild(card);
  }
}
createBoard();

function checkMatch() {
  // console.log("fucked")
  const cards = document.querySelectorAll("img");
  const optionOneId = cardChosenIds[0];
  const optionTwoId = cardChosenIds[1];
  let resultDisplay = document.querySelector("#result")

  if (optionOneId == optionTwoId) {
    cards[optionOneId].setAttribute('src', 'images/blank.png')
    cards[optionTwoId].setAttribute('src', 'images/blank.png')

  }

  if (cardChosen[0] === cardChosen[1]) {
    alert("you found bitch");
    cards[optionOneId].setAttribute("src", "images/white.png");
    cards[optionTwoId].setAttribute("src", "images/white.png");
    cards[optionOneId].removeEventListener("click", flipCart);
    cards[optionTwoId].removeEventListener("click", flipCart);
    cardsWon.push(cardChosen);
  } else {
    cards[optionOneId].setAttribute("src", "images/blank.png");
    cards[optionTwoId].setAttribute("src", "images/blank.png");
    alert("Sorry, try again");
  }
  cardChosen = [];
  cardChosenIds = [];

  resultDisplay.textContent = cardsWon.length;
  if (cardsWon.length === cardArray.length / 2) {
    resultDisplay.textContent = "Congratulations! You found them all!";
  }
}

function flipCart() {
  const cardId = this.getAttribute("dataId");
  cardChosen.push(cardArray[cardId].name);
  cardChosenIds.push(cardId);
  // console.log("cl",cardId );
  // console.log(cardChosen)

  this.setAttribute("src", cardArray[cardId].img);

  if (cardChosen.length === 2) {
    setTimeout(checkMatch, 500);
  }
}
