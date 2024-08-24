function Animais(nome, tipo, habitat) {
    this.nome = nome
    this.tipo = tipo
    this.habitat = habitat
}

function Mamifero(nome, tipo, habitat, tipoPelagem) {
    Animais.call(this, nome, tipo, habitat)
    this.tipoPelagem = tipoPelagem
}

function Ave(nome, tipo, habitat, podeVoar) {
    Animais.call(this, nome, tipo, habitat)
    this.podeVoar = podeVoar
}

const baleia = new Mamifero('Baleia', 'Carnívoro', 'Oceano', 'Não possui')
const corvo = new Ave('Corvo', 'Onívoro', 'Florestas', 'Sim')
const elefante = new Mamifero('Elefante', 'Herbívoro', 'Savanas', 'Curta')

console.log(baleia)
console.log(corvo)
console.log(elefante)
