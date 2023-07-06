let listaNumeri = [];  //array vuoto numeri

const btnLista = document.querySelector(".confermaNum");


btnLista.addEventListener("click", function () {
    const numerInputElement = document.querySelector("[id=numeroInput]");

    let singNum = parseInt(numerInputElement.value);
    listaNumeri.push (singNum);
    console.log(listaNumeri);
})




const btnSomma = document.querySelector(".sommaNum");

btnSomma.addEventListener("click", function () {
        let somma = 0;

        for ( let i = 0 ; i <= listaNumeri.length -1 ; i++){

            let numAttuale = parseInt (listaNumeri[i]);

            if (i %2 !==0) {
                numAttuale=0;
            }
            somma = somma + numAttuale;

        }
        console.log(somma);


})
