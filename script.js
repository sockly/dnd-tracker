let party = [
  {
    id: 1,
    name: "Rowan",
    hp: {
      current: 42,
      max: 42
    },
    ac: 17,
    initiative: 4,
    resources: [
      {
        name: "Spell Slots",
        current: 3,
        max: 4
      },
      {
        name: "Second Wind",
        current: 1,
        max: 1
      }
    ],
    customFields: []
  }
];

function renderParty() {

    const container =
        document.getElementById("partyContainer");

    container.innerHTML = "";

    party.forEach(character => {

        const card =
            document.createElement("div");

        card.className = "character-card";

        card.innerHTML = `
            <h2>${character.name}</h2>

            <p>
              HP:
              ${character.hp.current}
              /
              ${character.hp.max}
            </p>

            <p>AC: ${character.ac}</p>

            <p>
              Initiative:
              +${character.initiative}
            </p>
        `;

        container.appendChild(card);
    });
}
