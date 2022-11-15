//dichiaro le variabili
const objectEl = document.querySelector(".object")
const name1El = document.querySelector(".name1");
const name2El = document.querySelector(".name2");
const name3El = document.querySelector(".name3");
const name4El = document.querySelector(".name4");
const name5El = document.querySelector(".name5");
const name6El = document.querySelector(".name6");



// creo un array di oggetti
const listaTeam = [
    {
        nome:"Wayne Barnett",

        ruolo:"Founder & CEO",

        foto:" wayne-barnett-founder-ceo.jpg"
    }, {
        nome:"Angela Caroll",

        ruolo:"Chief Editor	",

        foto:"angela-caroll-chief-editor.jpg"
    }, {
        nome:"Walter Gordon",

        ruolo:"Office Manager",

        foto:"walter-gordon-office-manager.jpg"
    }, {
        nome:"Angela Lopez",

        ruolo:"Social Media Manager",

        foto:"angela-lopez-social-media-manager.jpg"
    }, {
        nome:"Scott Estrada",

        ruolo:"Developer",

        foto:"scott-estrada-developer.jpg"
    }, {
        nome:"Barbara Ramos",

        ruolo:"Graphic Designer",

        foto:"barbara-ramos-graphic-designer.jpg"
    },
];
    // stampo l'array in console
    console.log(listaTeam);
    console.log(listaTeam[0].nome);
    console.log(listaTeam[1]);
    console.log(listaTeam[2]);
    console.log(listaTeam[3]);
    console.log(listaTeam[4]);
    console.log(listaTeam[5]);

    for( let key in listaTeam){
        console.log(listaTeam[key]);
    }
    

    //stampo le info degli utenti in html
    name1El.innerHTML = listaTeam[0].nome
    name2El.innerHTML = listaTeam[1].nome
    name3El.innerHTML = listaTeam[2].nome
    name4El.innerHTML = listaTeam[3].nome
    name5El.innerHTML = listaTeam[4].nome
    name6El.innerHTML = listaTeam[5].nome




    



 