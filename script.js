/*Dato un array di oggetti rappresentante un team di un’azienda, creare una pagina dedicata in cui mostrare una card per ciascun componente.*/

const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

/***************ESERCIZIO****************/

//-- SELEZIONE DEL CONTAINER --//
const cardContainer = document.getElementById("cardContainer");

//-- MEMORIZZIAMO LE STRINGHE NEL PROCESSO DI OUTPUT (Variabile di accumulo Output/Stringhe) --//
let cards = "";

//-- CYCLE PER GLI OGGETTI DELL'ARRAY (Scoporando la funzione ma passando i valori di riferimento necessari) --//
for (let i = 0; i < teamMembers.length; i++) {
  const member = teamMembers[i]; //Estrapolazione del singolo oggetto dell'Array e lo "cicla" uno dopo l'altro finchè esistono oggetti da inserire

  console.log(member); //Check console.log

  cards += createNewCard(member); //Scorporazione 
  
  console.log(cards); //Check console.log
}

//-- OUTPUT DELLE CARDS NELL'HTML (Container) --//
cardContainer.innerHTML = cards;

//-- FUNZIONE DI CREAZIONE DI UNA NUOVA CARD--//

function createNewCard(oggettoDiRiferimento) {
  const card = `<div id="cardTeam" class="d-flex col-md-4 p-5">
        <div id="cardImg col-4">
            <img src="${oggettoDiRiferimento.img}" alt="${oggettoDiRiferimento.name}">
        </div>
        <div id="cardInfo" class="text-light text-center bg-success col-8">
            <h3>${oggettoDiRiferimento.name}</h3>
            <p>${oggettoDiRiferimento.role}</p>
            <label for="email">${oggettoDiRiferimento.email}</label>
        </div>
    </div>`

    return card
}

/**********DESTRUTTURANDO (404 file not found DA CONTROLLARE)**********/

//function createNewCard(oggettoDiRiferimento) {
//
//  const { image, name, role, email } = oggettoDiRiferimento; //Nome delle proprietà
//
//  const card = `<div id="cardTeam">
//        <div id="cardImg">
//            <img src="${image}" alt="${name}">
//        </div>
//        <div id="cardInfo">
//            <h3>${name}</h3>
//            <p>${role}</p>
//            <label for="email">${email}</label>
//        </div>
//    </div>`
//
//    return card
//}

/**************OPPURE**************/

////-- CYCLE PER GLI OGGETTI DELL'ARRAY --//
//for (let i = 0; i < teamMembers.length; i++) {
//  const member = teamMembers[i]; //Estrapolazione del singolo oggetto dell'Array e lo "cicla" uno dopo l'altro finchè esistono oggetti da inserire
//
//  console.log(member); //Check console.log
//
//  cards += //Creazione del contenitore/card grazie al template literal (stringa, grazie al backtick``) per ogni oggetto, inserita nel cycle prenderà tutti gli oggetti dell'Array
//    `<div id="cardTeam">
//        <div id="cardImg">
//            <img src="${member.img}" alt="${member.name}">
//        </div>
//        <div id="cardInfo">
//            <h3>${member.name}</h3>
//            <p>${member.role}</p>
//            <label for="email">${member.email}</label>
//        </div>
//    </div>`;
//
//  console.log(cards); //Check console.log
//}
//
////-- OUTPUT DELLE CARDS NELL'HTML (Container) --//
//cardContainer.innerHTML = cards;