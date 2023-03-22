/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

function toLetter(el) {
  switch (el) {
    case "1":
      return "A";
      break;
    case "11":
      return "J";
      break;
    case "12":
      return "Q";
      break;
    case "13":
      return "K";
      break;
    default:
      return el;
  }
}

function toNumber(el) {
  switch (el) {
    case "A":
      return "1";
      break;
    case "J":
      return "11";
      break;
    case "Q":
      return "12";
      break;
    case "K":
      return "13";
      break;
    default:
      return el;
  }
}

function randomNumber() {
  let number = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13"
  ];
  let indexNumber = Math.floor(Math.random() * number.length);
  return number[indexNumber];
}
function randomSuit() {
  let suit = ["spade", "club", "heart", "diamond"];
  let indesSuit = Math.floor(Math.random() * suit.length);
  return suit[indesSuit];
}

var cardObj = []; // array where the values and class of the cards are being pushed
var sortCardObj = []; // array where the values of A, J, Q, K are going to be changed to numbers to be sorted correctly

let drawbtn = document.querySelector(".drawButton");
let sortbtn = document.querySelector(".sortButton");
let amountCard = document.querySelector(".amountCard");
let randomCards = document.querySelector(".randomCards");
let sortCards = document.querySelector(".bubbleSortLog");

//<-- draw button function start -->
drawbtn.addEventListener("click", () => {
  let randomCards = document.querySelector(".randomCards");
  let numberOfCards = `${amountCard.value}`;
  let olCard = document.querySelector(".card");

  cardObj.length = 0;
  sortCardObj.length = 0;

  if (olCard == null) {
    console.log("dosn't exist");
  } else {
    let child = randomCards.lastChild;
    while (child) {
      randomCards.removeChild(child);
      child = randomCards.lastChild;
    }
  }

  for (let i = 0; i < numberOfCards; i++) {
    let div = document.createElement("div");
    div.classList.add("card");
    div.classList.add(randomSuit());
    div.innerHTML = toLetter(randomNumber());

    randomCards.appendChild(div);
    cardObj.push({
      value: toNumber(div.innerHTML),
      class: div.className.split(" ")
    });
  }
  for (let j = 0; j < cardObj.length; j++) {
    sortCardObj.push(cardObj[j]);
  }
});
// <-- draw button function end -->

// <-- sort button function start -->
sortbtn.addEventListener("click", () => {
  let bubbleSortLog = document.querySelector(".bubbleSortLog");
  let olCard = document.querySelector(".sortedCard");

  if (olCard == null) {
    console.log("dosn't exist");
  } else {
    let child = bubbleSortLog.lastChild;
    while (child) {
      bubbleSortLog.removeChild(child);
      child = bubbleSortLog.lastChild;
    }
  }

  //select sort function (adapted to work with the exercise)
  let min = 0;
  while (min < sortCardObj.length - 1) {
    for (let i = min + 1; i < sortCardObj.length; i++) {
      if (parseInt(sortCardObj[min].value) > parseInt(sortCardObj[i].value)) {
        let aux = sortCardObj[min];
        sortCardObj[min] = sortCardObj[i];
        sortCardObj[i] = aux;

        let finaldiv = document.createElement("div");
        finaldiv.classList.add("bubbleSortLogDiv");
        for (let b = 0; b < sortCardObj.length; b++) {
          let bubbleSortLog = document.querySelector(".bubbleSortLog");
          let finalCard = document.createElement("div");
          finalCard.classList.add("sortedCard");
          finalCard.classList.add(
            `${sortCardObj[b].class[0]}`,
            `${sortCardObj[b].class[1]}`
          );
          finalCard.innerHTML = toLetter(`${sortCardObj[b].value}`);

          finaldiv.appendChild(finalCard);
          bubbleSortLog.appendChild(finaldiv);
        }
      }
    }
    min++;
  }
});
// <-- sort button function end -->
