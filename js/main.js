//dichiaro le variabili
const objectEl = document.querySelector(".object")
const schedeEl = document.querySelector(".schede");


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
     //stampo l'array in console
     console.log(listaTeam);
     console.log(listaTeam[0]);
     console.log(listaTeam[1]);
     console.log(listaTeam[2]);
     console.log(listaTeam[3]);
     console.log(listaTeam[4]);
     console.log(listaTeam[5]);

     for( let key in listaTeam){
         console.log(listaTeam[key]);
     }
    
     //alternativa
    // console.log(listaTeam[0].nome);
    // console.log(listaTeam[0].ruolo);
    // console.log(listaTeam[0].foto);


    
     //vado a creare una funzione dove farccio un ciclo for in cui
     //per ogni oggetto dell'array vado a: creare(createElement) un elemento html(div),
     //aggiungo una classe per organizzare le info in delle cards
     //metto/appendo questo elemento html creato nel contenitore dichiarato inizialmente
    stampaInfoTeam();

    function stampaInfoTeam() {
        for (i = 0 ; i < listaTeam.length; i++){
            const divEl = document.createElement("div");
            divEl.classList.add("card");
            schedeEl.append(divEl);

            const h4El = document.createElement("h4");
            h4El.innerHTML = listaTeam[ i ].nome;
            schedeEl.append(h4El);

            
            const h5El = document.createElement("h5")
            h5El.innerHTML = listaTeam [ i ].ruolo;
            schedeEl.append(h5El);

            const h6El = document.createElement("h6");
            h6El.innerHTML = listaTeam[ i ].foto;
            schedeEl.append(h6El);
     }   
 }

 