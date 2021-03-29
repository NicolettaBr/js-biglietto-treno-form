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

    //Carrozza





    //stampare risultati 

    document.getElementById('name-result').innerHTML = userName;
    document.getElementById('offer-result').innerHTML = userOffer;
})





