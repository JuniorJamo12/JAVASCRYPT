function veirificar (){
    var data = new Date()
    var ano = data.getFullYear()

    var anoForm = document.getElementById('anoNascimento')
    // anoForm = Number (anoForm.value)
    var img = document.getElementById('imagem') 
    var sex = document.getElementsByName('sex')

    var botao = document.getElementById('veri')

    if (anoForm.value.length==0 || anoForm.value  > ano || anoForm.value < 0){
        window.alert('[ERRO] ano indisponivel')
    }

    else{
        var idade = ano - anoForm.value
        var genero = ''
        if (sex[0].checked){
            genero = 'M'
        }
        else{
            genero = 'F'
        }
       
        if (idade <=3 && genero =='M')
        {
            img.src = 'imagens/bebe.png'
        }
        else{
            img.src = 'imagens/beba.png'
        }

         if (idade > 14 && idade <= 19){
              if (genero == 'M')
              {
                img.src = 'imagens/adolescente.png'
              }
              else{
                  img.src = 'imagens/adolescenta.png'
              }
        }

         if (idade > 19 && idade < 40){
            if (genero = 'M'){
                img.src = 'imagens/jovem.png'
            }
            else{
                img.src = 'imagens/jovam.png'
            }
        }

        if (idade >= 40){
            if (genero = 'M'){
                img.src = 'imagens/idoso.png'
            }
            else{
                img.src = 'imagens/idosa.png'
            }

        }

        var res = document.querySelector('div#resultado>p')
        res.innerHTML = (`<p> a sua idade e de <strong> ${idade} anos </strong> </p>`)

    }    
}