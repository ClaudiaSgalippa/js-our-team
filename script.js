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

/*******************************/

//-- SELEZIONE DEL CONTAINER --//
const cardContainer = document.getElementById("#cardContainer");

//--  --//

//-- CYCLE PER GLI OGGETTI DELL'ARRAY --//
for (let i = 0; i < teamMembers.length; i++) {
   const teamMember = teamMembers[i];

   console.log(teamMember);
}

//<div id="cardTeam">
//    <div id="cardImg">
//        <img src="img/male1.png">
//    </div>
//    <div id="cardInfo">
//        <h3>Marco Bianchi</h3>
//        <p>Designer</p>
//        <label for="email">marcobianchi@team.com</label>
//    </div>
//</div>