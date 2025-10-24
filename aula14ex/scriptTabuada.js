var res = document.getElementById('tabuada') 

function calcular() {

    var numero = Number(document.getElementById('nr').value)
    for (var i = 1; i <= 10; i++) {
         let item = document.createElement('option')
         item.text = `${numero} x ${i} = ${numero*i}`
         item.value = `opt${i}`
         res.appendChild(item)
    }
} 
function limpar (){
        res.innerHTML = ''
} 