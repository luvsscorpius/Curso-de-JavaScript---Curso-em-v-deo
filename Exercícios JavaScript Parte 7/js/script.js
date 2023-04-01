let numero = document.getElementById('num')
let vetores = document.getElementById('vetores')
let res = document.getElementById('res')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inVetores(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inVetores(num.value, valores)) {
        valores.push(Number(numero.value))
        let item = document.createElement('option')
        item.text = `Valor ${numero.value} adicionado`
        vetores.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou ja encontrado na lista.')
    }
    numero.value = ''
    numero.focus()
}

function finalizar() {
    if (valores.length == '') {
        alert('Adicione números para prosseguir')
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores) {
            soma += valores[pos]
            media = soma / total
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${total} números cadastrados</p>`
        res.innerHTML += `<p>O primeiro número cadastrado foi ${valores[0]}</p>`
        res.innerHTML += `<p>O maior valor cadastrado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor cadastrado foi ${menor}</p>`
        res.innerHTML += `<p>A soma dos valores é igual a ${soma}</p>`
        res.innerHTML += `<p>A média entre os valores cadastro é ${media}</p>`
    }
}