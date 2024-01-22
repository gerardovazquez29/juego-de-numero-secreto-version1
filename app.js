
let numeroMaximoPosible = 50;
let numeroSecreto = Math.floor(Math.random()*numeroMaximoPosible)+1;
let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = 'vez';
let maximosIntentos = 5;

//console.log(numroSecreto);
while ( numeroUsuario != numroSecreto ) {
    numeroUsuario = parseInt(prompt(`me indicas un numero entre 1 y ${numeroMaximoPosible} por favor`));

    console.log(typeof(numeroUsuario));
    
    if (numeroUsuario == numroSecreto ) {
        alert(`asertaste el numero es: ${numeroUsuario}. lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'vases'}`);// temple string//Operador terniario
    }else {
        if (numeroUsuario > numroSecreto) {
            alert('El numero es menor');
        }else{
            alert('El numero es mayor ');
        }
        // incrementamos el contador cuando no acierta 
        //intentos = intentos + 1;
        intentos++;
        //palabraVeces = 'veces';
        if(intentos > maximosIntentos ) {
            alert(`llegaste al numero maximo de ${maximosIntentos} intentos`);
            break;
        }
    }
}
