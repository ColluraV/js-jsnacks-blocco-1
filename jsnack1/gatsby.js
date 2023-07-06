//liste nomi e cognomi
const listaNomi = ["mario", "pino", "ennio", "giovanna", "maria", "antonella", "valerio", "leonardo", "riccardo", "master", "giulia", "salvatore", "pietro", "elisa", "lorenzo", "kid", "anna"];
const listaCognomi = ["piu", "scotto", "annio", "hardcore", "gelmini", "elia", "mio padre", "tartaruga", "carluccio", "yi", "corrado", "bono", "leone", "silent", "porrega", "kudi", "pepe"];

//lunghezza for selezionato dall'utente

//numero dado randomico
const btnLista = document.querySelector(".confermaNum");
btnLista.addEventListener("click", function () {
      const list = document.querySelector(".list-group");
        list.innerHTML="";
    const numerInputElement = document.querySelector("[id=numeroInput]");

    for ( let i = 1 ; i <= numerInputElement.value ; i++){

    const valMin = 0; //valore minimo obbligatorio
    const valMax = listaNomi.length - 1; //valore valido anche per i cognomi, stessa quantità

    let indiceNome = Math.round(Math.random() * (valMax - valMin));
    let nomeVisualizzato = listaNomi[indiceNome];

    let indiceCognome = Math.round(Math.random() * (valMax - valMin));
    let cognomeVisualizzato = listaCognomi[indiceCognome];

    let nomeCognome = ( nomeVisualizzato +" "+ cognomeVisualizzato )


        
        list.innerHTML += `<li class="list-group-item">
    <input class="form-check-input me-1" type="checkbox" value="" id="firstCheckbox">
    <label class="form-check-label" for="firstCheckbox">${nomeCognome}</label>
  </li>`


    console.log(indiceNome);
    console.log(nomeVisualizzato);
    console.log(indiceCognome);
    console.log(cognomeVisualizzato);
    
}})
