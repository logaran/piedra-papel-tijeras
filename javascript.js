let puntuacionPlayer = document.querySelector('#puntuacionPlayer');
let puntuacionPc = document.querySelector('#puntuacionPc');
let message = document.querySelector('#message');

let getJugada = (jugadaPlayer) => {
    let jugada = jugadaPlayer + getJugadaPc();
    let puntuacionPlayerValue = Number(puntuacionPlayer.innerHTML);
    let puntuacionPcValue = Number(puntuacionPlayer.innerHTML);
    switch(jugadaPlayer) {
        case '0':
            document.querySelector('#j1-img').className = "leftPiedra";
            break;
        case '1':
            document.querySelector('#j1-img').className = "leftPapel";
            break;
        case '2':
            document.querySelector('#j1-img').className = "leftTijeras";
            break;
    }
    switch (jugada) {
        case '02':
        case '10':
        case '21':
            document.querySelector('#message').innerText = 'Has ganado!!!';
            puntuacionPlayerValue++;
            puntuacionPlayer.innerHTML = puntuacionPlayerValue;
            break;
        case '00':
        case '11':
        case '22':
            document.querySelector('#message').innerText = 'Empate!!!';
            break;
        default:
            document.querySelector('#message').innerText = 'Loooooooser!!!';
            puntuacionPcValue++;
            puntuacionPc.innerHTML = puntuacionPcValue;
    }

    setTimeout(() => {
        document.querySelector('#message').innerText = '¿Piedra, papel o tijeras?';
        document.querySelector('#j1-img').className = "leftPiedra";
        document.querySelector('#j2-img').className = "rightPiedra";
    }, 2000);

};
let getJugadaPc = () => {
    let jugada = Math.floor(Math.random() * 3);
    switch(jugada) {
        case 0:
            document.querySelector('#j2-img').className = "rightPiedra";
            break;
        case 1:
            document.querySelector('#j2-img').className = "rightPapel";
            break;
        case 2:
            document.querySelector('#j2-img').className = "rightTijeras";
            break;
    }
    return '' + jugada;
};

