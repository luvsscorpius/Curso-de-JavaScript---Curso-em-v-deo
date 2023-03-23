function carregar(){
let msg = window.document.getElementById('msg')
let img = window.document.getElementById('imagem')
let data = new Date()
let hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas`
if (hora >= 0 && hora < 12){
    // Bom dia!
    img.src = 'Manha.png'
    document.body.style.background = '#D9965B'
} else if (hora >= 12 && hora < 18 ){
    // Boa tarde!
    img.src = 'Tarde.png'
    document.body.style.background = '#C9E2F2'
} else {
    // Boa noite!
    img.src = 'Noite.png'
    document.body.style.background = '#5E4873'
}
}