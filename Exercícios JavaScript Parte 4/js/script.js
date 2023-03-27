function contar() {
    let inicio = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let resultado = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 00) {
        res.innerHTML = 'Impossivel contar'
    } else {
        resultado.innerHTML = 'Contando...'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (inicio < fim) {
            //CONTAGEM CRESCENTE
            for (let c = i; c <= f; c += p) {
                resultado.innerHTML += `${c} \u{1F449}`
            }
        } else {
            //CONTAGEM REGRESSIVA
            for (let c = i; c >= f; c -= p) {
                resultado.innerHTML += `${c} \u{1F449}`
            }
        }
        resultado.innerHTML += `${c} \u{1F449}`
    }
}
