let listaNumeri = []  //array vuoto numeri

const btnLista = document.querySelector(".confermaNum");


btnLista.addEventListener("click", function () {
    const numerInputElement = document.querySelector("[id=numeroInput]");

    let singNum = numerInputElement.value 
    console.log(singNum)

    listaNumeri.push (singNum)
    console.log(listaNumeri)

})