function carregar(){
    var msg = window.document.getElementById('msg')
    var foto = window.document.getElementById('imagem')
    var min = window.document.getElementsByClassName('min')
    var min = new Date();
    var min = min.getMinutes();
    var data= new Date()
    var hora = data.getHours()
    

    msg.innerHTML = `Agora são ${hora}:${min} horas`

    if(hora >= 0 && hora < 12) {
        //bom dia
        foto.src = './img/manha.png'
        document.body.style.background = '#e2cd9f'
    } else if( hora >= 12 && hora < 18) {
        //boa tarde
        foto.src = './img/tarde.png'
        document.body.style.background = '#b9846f'
    }else{
        //boa noite
        foto.src = './img/noite.png'
        document.body.style.background = '#301f2a'
    }
}