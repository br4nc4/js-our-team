//HTML CARD

/* <div class="team-card">
        <div class="card-image">
                <img
                    src="img/wayne-barnett-founder-ceo.jpg"
                    alt="Wayne Barnett"
                />
        </div>
        <div class="card-text">
                <h3>Wayne Barnett</h3>
                <p>Founder & CEO</p>
        </div>
</div> */

//variabili globali
const containerTeam = document.querySelector(".team-container");
const teamCard = document.querySelector(".team-card");
const cardText = document.createElement("div");
cardText.classList.add("card-text");





//creo l'array di oggetti contenente i membre del Team
//per iniziare il numero di membri è pari a 6
const membriTeam = [
    //OBJECT 1 ALL'INDICE 0
    {
        nominativo: "Wayne Barnett",
        ruolo: "Founder & CEO",
    },
    //OBJECT 2 ALL'INDICE 1
    {
        nominativo: "Angela Carol",
        ruolo: "Chief Editor",
    },
    //OBJECT 3 ALL'INDICE 2
    {
        nominativo: "Walter Gordon",
        ruolo: "Office Manager",
    },
    //OBJECT 4 ALL'INDICE 3
    {
        nominativo: "Angela Lopez",
        ruolo: "Social Media Manager",
    },
    //OBJECT 5 ALL'INDICE 4
    {
        nominativo: "Scott Estrada",
        ruolo: "Developer",
    },
    //OBJECT 6 ALL'INDICE 5
    {
        nominativo: "Barbara Ramos",
        ruolo: "Graphic Designer",
    },
];

//MILESTONE 1
for(let i=0; i<membriTeam.length; i++){
    const cardMember = membriTeam[i];
    //console.log(`Memebro del Team ${cardMember.nominativo} Ruolo ${cardMember.ruolo}`);
    console.log(`Membro \n ${cardMember.nominativo} \nRuolo \n ${cardMember.ruolo}`);
    cardText.innerHTML = `<h3>${membriTeam[0].nominativo}</h3> \n <p>${membriTeam[0].ruolo}</p>`;
    teamCard.append(cardText);
}