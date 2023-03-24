function verificar(){
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('Verifique os dados e tente novamente')
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let gênero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            gênero = 'Homem'
            if (idade >= 0 && idade < 10){
                //crianca
                img.setAttribute('src', 'bebe-menino.png')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'homem-jovem.png')
            } else if (idade < 50){
                // adulto
                img.setAttribute('src', 'homem-adulto.png')
            } else {
                //idoso
                img.setAttribute('src', 'homem-velho.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10){
                //crianca
                img.setAttribute('src', 'bebe-menina.png')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'mulher-jovem.png')
            } else if (idade < 50){
                // adulto 
                img.setAttribute('src', 'mulher-adulta.png')
            } else {
                //idoso
                img.setAttribute('src', 'mulher-velha.png')
            }
        }
        res.getElementsByClassName.textalign = 'center'
        res.innerHTML = `Detectamos ${gênero} com idade de ${idade} anos.`
        res.appendChild(img)
    }
}