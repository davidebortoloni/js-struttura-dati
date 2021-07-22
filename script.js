const cardSection = document.getElementById("card-section");
const card = {
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
      description: "Sacrifica un artefatto, una creatura o una terra: Rimuovi un segnalino tempo dal Gargadonte Maggiore. Attiva questa abilità solo se il Gargadonte Maggiore è sospeso.",
    },
  ],
  flavorText: "",
  illustration: {
    source: "./img/gargadonte_maggiore.jpg",
    author: {
      id: 148,
      name: "Rob Alexander",
    },
  },
  power: "9",
  toughness: "7",
  borderColor: "#001622",
};

for (let i = 0; i < 100; i++) {
  printCard(card);
}

function printCard(card) {
  const subType = card.subType ? `- ${card.subType}` : "";
  const flavorText = card.flavorText ? `<strong>Testo di colore:</strong> ${card.flavorText}` : "";
  let ability = `<em>Nessuna abilità</em>`;
  if (card.abilities.length && card.abilities) {
    ability = `<ul class="ms-3">`;
    for (let i = 0; i < card.abilities.length; i++) {
      ability += `<li><strong>Costo di attivazione:</strong> ${card.abilities[i].launchCost.join("")}</li>`;
      ability += `<li><strong>Descrizione:</strong> ${card.abilities[i].description}</li>`;
    }
    ability += `</ul>`;
  }
  const cardContent = `
  <div class="col-10 col-md-6 col-xl-4 p-2">
    <div class="p-2" style="background-color:${card.borderColor};">
      <div class="card p-2 bg-white">
        <ul class="list-unstyled">
          <li><strong>Nome:</strong> ${card.name}</li>
          <li><strong>Costo di lancio:</strong> ${card.manaCost.join("")}</li>
          <li><strong>Costo di mana convertito:</strong>${card.convertedManaCost}</li>
          <li><strong>Tipo di carta:</strong> ${card.type} ${subType}</li>
          <li><strong>Espansione:</strong> ${card.expansion.name}</li>
          <li><strong>Rarità:</strong> ${card.rarity}</li>
          <li><strong>Abilità:</strong> ${ability}</li>
          <li>${flavorText}</li>
          <li><strong>Forza/costituzione:</strong> ${card.power}/${card.toughness}</li>
          <li><strong>Numero della carta:</strong> ${card.expansion.cardNr}/${card.expansion.totalNr}</li>
          <li><strong>Illustrazione di <em>${card.illustration.author.name}:</em></strong>
            <img class="w-100" src="${card.illustration.source}" alt="Gargadonte Maggiore">
          </li>
        </ul>
      </div>
    </div>
  </div>
  `;
  cardSection.innerHTML += cardContent;
}
