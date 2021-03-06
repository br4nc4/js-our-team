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
    //TEST MILESTONE 2
    //cardTeam.innerHTML += `<div class="card-text"><h3>${membriTeam[i].nominativo}</h3><p>${membriTeam[i].ruolo}</p></div>`;
    //containerTeam.append(cardTeam);
    containerTeam.append(createCard(membriTeam[i]));
    
}

//MILESTONE 2
/* function createCard(membriTeam){
    const cardTeam = document.createElement("div");
    

    cardTeam.classList.add("card-text");


    cardTeam.innerHTML += `<h3>${membriTeam.nominativo}</h3> \n <p>${membriTeam.ruolo}</p>`;
    

    return cardTeam;
} */

//MILESTONE2
function createCard(membriTeam){
    const entireCard = document.createElement("div");
    entireCard.classList.add("team-card");
    entireCard.append(textCard(membriTeam));
    return entireCard;
}

function textCard(membriTeam){
    const txtCard = document.createElement("div");
    txtCard.classList.add("card-text");
    txtCard.innerHTML += `<h3>${membriTeam.nominativo}</h3> \n <p>${membriTeam.ruolo}</p>`;
    return txtCard;
}