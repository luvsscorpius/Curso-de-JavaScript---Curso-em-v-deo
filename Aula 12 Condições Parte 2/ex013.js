let agora = new Date() // pega a data
let hora = agora.getHours() // pega a hora
console.log(`Agora são exatamente ${hora} horas do dia ${agora}`)
if (hora < 12){
    console.log(`Bom dia!`)
} else if (hora <= 18 ){
    console.log(`Boa tarde!`)
} else {
    console.log(`Boa noite!`)
}