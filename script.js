const selectProperty = document.getElementById("select-property");
const inputText = document.getElementById("input-text");
const selectMana = document.getElementById("select-mana");
const selectType = document.getElementById("select-type");
const selectRarity = document.getElementById("select-rarity");
const searchButton = document.getElementById("search-button");
const cardSection = document.getElementById("card-section");

const deck = [
  {
    name: "Gargadonte Maggiore",
    manaCost: ["9", "R"],
    convertedManaCost: 10,
    type: "Creatura",
    subType: "Bestia",
    expansion: {
      cod: "TSR",
      name: "Time Spiral Remastered",
      cardNr: 167,
      totalNr: 289,
    },
    rarity: "Rara",
    abilities: [
      {
        launchCost: ["10", "R"],
        description:
          "Sacrifica un artefatto, una creatura o una terra: Rimuovi un segnalino tempo dal Gargadonte Maggiore. Attiva questa abilità solo se il Gargadonte Maggiore è sospeso.",
      },
    ],
    flavorText: "",
    illustration: {
      source: "./img/gargadonte_maggiore.jpg",
      author: {
        id: 1,
        name: "Rob Alexander",
      },
    },
    power: 9,
    toughness: 7,
    borderColor: "#001622",
  },
  {
    name: "Rimbalzo Selvaggio",
    manaCost: ["2", "R", "R"],
    convertedManaCost: 4,
    type: "Istantaneo",
    subType: "",
    expansion: {
      cod: "LRW",
      name: "Lorwyn",
      cardNr: 196,
      totalNr: 301,
    },
    rarity: "Rara",
    abilities: [
      {
        launchCost: [],
        description:
          "Puoi scegliere nuovi bersagli per una magia istantaneo o stregoneria bersaglio. Poi copia quella magia. Puoi scegliere nuovi bersagli per la copia.",
      },
    ],
    flavorText:
      '"Conoscevo questo trucchetto molto prima che la bisnonna di tua nonna nascesse."',
    illustration: {
      source: "./img/rimbalzo_selvaggio.jpg",
      author: {
        id: 2,
        name: "Dan Scott",
      },
    },
    power: "",
    toughness: "",
    borderColor: "#000000",
  },
  {
    name: "Omicidio su Commissione",
    manaCost: ["3", "B", "B"],
    convertedManaCost: 5,
    type: "Stregoneria",
    subType: "",
    expansion: {
      cod: "XLN",
      name: "Ixalan",
      cardNr: 95,
      totalNr: 279,
    },
    rarity: "Comune",
    abilities: [
      {
        launchCost: [],
        description:
          'Distruggi una creatura bersaglio. Crea due pedine artefatto Tesoro incolori con "Tap, Sacrifica questo artefatto: Aggiungi un mana di un qualsiasi colore alla tua riserva di mana".',
      },
    ],
    flavorText:
      "Per il giusto prezzo, la città galleggiante della Secca offre tutti gli agi a cui un pirata può aspirare: riposo, rancio e rivalsa.",
    illustration: {
      source: "./img/omicidio_su_commissione.jpg",
      author: {
        id: 3,
        name: "Winona Nelson",
      },
    },
    power: "",
    toughness: "",
    borderColor: "#141011",
  },
];

printDeck(deck);

selectProperty.addEventListener("change", () => {
  inputText.value = "";
  selectMana.value = "W";
  selectType.value = "Artefatto";
  selectRarity.value = "Comune";
  switch (selectProperty.value) {
    case "all":
      inputText.classList.add("d-none");
      selectType.classList.add("d-none");
      selectMana.classList.add("d-none");
      selectRarity.classList.add("d-none");
      break;
    case "manaCost":
    case "abilities-launchCost":
      inputText.classList.add("d-none");
      selectType.classList.add("d-none");
      selectMana.classList.remove("d-none");
      selectRarity.classList.add("d-none");
      break;
    case "type":
      inputText.classList.add("d-none");
      selectType.classList.remove("d-none");
      selectMana.classList.add("d-none");
      selectRarity.classList.add("d-none");
      break;
    case "rarity":
      inputText.classList.add("d-none");
      selectType.classList.add("d-none");
      selectMana.classList.add("d-none");
      selectRarity.classList.remove("d-none");
      break;
    default:
      inputText.classList.remove("d-none");
      selectType.classList.add("d-none");
      selectMana.classList.add("d-none");
      selectRarity.classList.add("d-none");
  }
});
searchButton.addEventListener("click", () => {
  if (selectProperty.value === "all") {
    printDeck(deck);
  } else {
    const filteredDeck = [];
    switch (selectProperty.value) {
      case "name":
      case "subType":
      case "flavorText":
        if (inputText.value.trim() !== "") {
          for (let i = 0; i < deck.length; i++) {
            if (
              deck[i][selectProperty.value].includes(inputText.value.trim())
            ) {
              filteredDeck.push(deck[i]);
            }
          }
          printDeck(filteredDeck);
        }
        break;
      case "manaCost":
        for (let i = 0; i < deck.length; i++) {
          if (deck[i][selectProperty.value].includes(selectMana.value)) {
            filteredDeck.push(deck[i]);
          }
        }
        printDeck(filteredDeck);
        break;
      case "convertedManaCost":
      case "power":
      case "toughness":
        if (inputText.value.trim() !== "") {
          for (let i = 0; i < deck.length; i++) {
            if (deck[i][selectProperty.value] == inputText.value.trim()) {
              filteredDeck.push(deck[i]);
            }
          }
          printDeck(filteredDeck);
        }
        break;
      case "type":
        for (let i = 0; i < deck.length; i++) {
          if (deck[i][selectProperty.value] === selectType.value) {
            filteredDeck.push(deck[i]);
          }
        }
        printDeck(filteredDeck);
        break;
      case "expansion-name":
        if (inputText.value.trim() !== "") {
          const dividedProperties = selectProperty.value.split("-");
          const firstProperty = dividedProperties[0];
          const secondProperty = dividedProperties[1];
          for (let i = 0; i < deck.length; i++) {
            if (
              deck[i][firstProperty][secondProperty].includes(
                inputText.value.trim()
              )
            ) {
              filteredDeck.push(deck[i]);
            }
          }
          printDeck(filteredDeck);
        }
        break;
      case "illustration-author-name":
        if (inputText.value.trim() !== "") {
          const dividedProperties = selectProperty.value.split("-");
          const firstProperty = dividedProperties[0];
          const secondProperty = dividedProperties[1];
          const thirdProperty = dividedProperties[2];
          for (let i = 0; i < deck.length; i++) {
            if (
              deck[i][firstProperty][secondProperty][thirdProperty].includes(
                inputText.value.trim()
              )
            ) {
              filteredDeck.push(deck[i]);
            }
          }
          printDeck(filteredDeck);
        }
        break;
      case "abilities-description":
        if (inputText.value.trim() !== "") {
          const dividedProperties = selectProperty.value.split("-");
          const firstProperty = dividedProperties[0];
          const secondProperty = dividedProperties[1];
          for (let i = 0; i < deck.length; i++) {
            for (let j = 0; j < [firstProperty].length; j++) {
              if (
                deck[i][firstProperty][j][secondProperty].includes(
                  inputText.value.trim()
                )
              ) {
                filteredDeck.push(deck[i]);
              }
            }
          }
          printDeck(filteredDeck);
        }
        break;
      case "rarity":
        for (let i = 0; i < deck.length; i++) {
          if (deck[i][selectProperty.value] === selectRarity.value) {
            filteredDeck.push(deck[i]);
          }
        }
        printDeck(filteredDeck);
        break;
      case "abilities-launchCost":
        const dividedProperties = selectProperty.value.split("-");
        const firstProperty = dividedProperties[0];
        const secondProperty = dividedProperties[1];
        for (let i = 0; i < deck.length; i++) {
          for (let j = 0; j < [firstProperty].length; j++) {
            if (
              deck[i][firstProperty][j][secondProperty].includes(
                selectMana.value
              )
            ) {
              filteredDeck.push(deck[i]);
            }
          }
        }
        printDeck(filteredDeck);
        break;
    }
  }
});

function printDeck(deck) {
  cardSection.innerHTML = "";
  for (let i = 0; i < deck.length; i++) {
    printCard(deck[i]);
  }
}
function printCard(card) {
  const subType = card.subType ? `- ${card.subType}` : "";
  const flavorText = card.flavorText
    ? `<strong>Testo di colore:</strong> <em>${card.flavorText}</em>`
    : "";
  const PowTou =
    card.power && card.toughness
      ? `<strong>Forza/costituzione:</strong> ${card.power}/${card.toughness}`
      : "";
  let ability = `<em>Nessuna abilità</em>`;
  if (card.abilities.length) {
    ability = `<ul class="ms-3">`;
    for (let i = 0; i < card.abilities.length; i++) {
      if (card.abilities[i].launchCost.length) {
        ability += `<li><strong>Costo di attivazione:</strong> ${card.abilities[
          i
        ].launchCost.join("")}</li>`;
      }
      ability += `<li><strong>Descrizione:</strong> ${card.abilities[i].description}</li>`;
    }
    ability += `</ul>`;
  }
  const cardContent = `
  <div class="col-10 col-md-6 col-xl-4 p-2">
    <div class="card p-3" style="background-color:${card.borderColor};">
      <div class="p-3 bg-white" style="height: 45rem;">
        <ul class="list-unstyled">
          <li class="mb-2">
            <img class="w-100" src="${
              card.illustration.source
            }" alt="Gargadonte Maggiore">
            <em>Illustrazione di ${card.illustration.author.name}</em>
          </li>
          <li><strong>Nome:</strong> ${card.name}</li>
          <li><strong>Costo di lancio:</strong> ${card.manaCost.join("")}</li>
          <li><strong>Costo di mana convertito:</strong> ${
            card.convertedManaCost
          }</li>
          <li><strong>Tipo di carta:</strong> ${card.type} ${subType}</li>
          <li>${PowTou}</li>
          <li><strong>Espansione:</strong> ${card.expansion.name}</li>
          <li><strong>Rarità:</strong> ${card.rarity}</li>
          <li><strong>Numero della carta:</strong> ${card.expansion.cardNr}/${
    card.expansion.totalNr
  }</li>
          <li><strong>Abilità:</strong> ${ability}</li>
          <li>${flavorText}</li>
        </ul>
      </div>
    </div>
  </div>
  `;
  cardSection.innerHTML += cardContent;
}
