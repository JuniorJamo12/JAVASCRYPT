
function passar() {

    var inicio = Number(document.getElementById('inicio').value)
    var fim = Number(document.getElementById('fim').value)
    var passo = Number(document.getElementById('passo').value)
    var res = document.getElementById('resultado')

    if (inicio > fim || inicio < 0 || passo <= 0) {
        window.alert('IMPOSSIVEL')
    }

    else {
        do {

            inicio = inicio + passo
            res.innerHTML += `<p> &#128073;<strong>${inicio}</strong </p>`

        } while (inicio < fim)

        res.innerHTML += `fim..!  \u{1F3C1}`
    }

}