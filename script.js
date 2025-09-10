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
const cardContainer = document.getElementById("#cardContainer");

//-- MEMORIZZIAMO LE STRINGHE NEL PROCESSO DI OUTPUT (Variabile di accumulo Output/Stringhe) --//
let cards = "";

//-- CYCLE PER GLI OGGETTI DELL'ARRAY --//
for (let i = 0; i < teamMembers.length; i++) {
  const member = teamMembers[i]; //Estrapolazione del singolo oggetto dell'Array e lo "cicla" uno dopo l'altro finchè esistono oggetti da inserire

  console.log(member); //Check console.log

  cards += //Creazione del contenitore/card grazie al template literal (stringa, grazie al backtick``) per ogni oggetto, inserita nel cycle prenderà tutti gli oggetti dell'Array
    `<div id="cardTeam">
        <div id="cardImg">
            <img src="${member.img}" alt="${member.name}">
        </div>
        <div id="cardInfo">
            <h3>${member.name}</h3>
            <p>${member.role}</p>
            <label for="email">${member.email}</label>
        </div>
    </div>`;

  console.log(cards); //Check console.log
}

