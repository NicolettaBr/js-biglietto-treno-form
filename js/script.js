//Come funziona bottone "Genera"

var buttonGenerator = document.getElementById ('btn-genera');
buttonGenerator.addEventListener('click', function(){
    //operazioni da svolgere al click del button

    //Passeggero: leggere id passeggero e inserirlo in ticket-result-section
    var userName = document.getElementById('name-input').value;
    console.log(userName);

    //offerta: leggere fascia d'età, in base al valore definisco offerta 
    var userAge = document.getElementById('age-input').value;
    console.log(userAge);

    var userOffer = 'Tariffa standard';
    if(userAge == 'minorenne'){
        userOffer = 'Tariffa per minorenne';
    }else if(userAge == 'over'){
        userOffer = 'Tariffa per minorenne';
    }

    //Carrozza: con funzione genero numero random da 1 (min) a 15 (max) (numero carrozze)
    
    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }

    //Codice CP : con una funzione genero numero random da 90000 a 100000 

    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }

    //Costo biglietto
    var costoAlKm = 0.21;
    //numero km inseriti (è una stringa)
    var userKm = document.getElementById('km-input').value;
    //console.log(userKm);
    //trasformo valore in numero
    var userKmAsNumber = parseInt(userKm);
    //console.log(userKmAsNumber);
    //costo biglietto standard
    var finalprice = userKmAsNumber * costoAlKm;
    console.log(finalprice);
    //costo per tariffe ridotte
    if (userAge == 'minorenne'){
        finalprice = finalprice - (finalprice * 20 / 100);
        console.log(finalprice);
    }else if (userAge == 'over'){
        finalprice = finalprice - (finalprice * 40 / 100);
        console.log(finalprice);
    }


    //stampare risultati 

    document.getElementById('name-result').innerHTML = userName;
    document.getElementById('offer-result').innerHTML = userOffer;
    document.getElementById('train-result').innerHTML = getRndInteger(1,15);
    document.getElementById('code cp-result').innerHTML = getRndInteger(90000,100000);
    document.getElementById('price-result').innerHTML = finalprice;
})





