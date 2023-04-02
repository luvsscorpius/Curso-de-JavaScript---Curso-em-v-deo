let amigo = {
    nome: 'José', sexo: 'Masculino', peso: 40, engordar(p = 0) {
        this.peso += p
        console.log('Engordou')
    }
}

amigo.engordar(10)
console.log(`${amigo.nome} pesa ${amigo.peso}kg`)