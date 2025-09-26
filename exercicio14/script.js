function carregar (){
    var msg = document.getElementById('msg')
    // msg = msg.value 
    var img = document.getElementById('imagem')
    
    var hora = new Date()
    // var minutos = new Date()
    // minutos = minutos.getMinutes()
    hora = hora.getHours()
    // hora = 
    // msg.innerText = `agora sao ${hora} horas`

    if (hora >= 0 && hora < 12){
        // document.write('BOM DIA..!')
        msg.innerText = `BOM DIA , AGORA SAO ${hora} HORAS`
        img.src = "imagens/diaa.png"
        document.body.style.backgroundColor = '#e2cd9f'

    }
    else if (hora < 18 && hora >=12){
        // document.write('BOA TARDE')
        msg.innerText =`BOA TARDE , AGORA SAO ${hora} HORAS`
        img.src = "tardee.png"
        document.body.style.backgroundColor = '#b9846f'
    }
    else{
        // document.write('BOA NOITE')
        msg.innerText = `BOA NOITE  , AGORA SAO ${hora} HORAS`
        img.src = 'imagens/noitee.png'
        document.body.style.backgroundColor = '#515154'
    }



}