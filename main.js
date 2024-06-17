const form = document.querySelector('form')

const numA = document.querySelector('input#numA')
const numB = document.querySelector('input#numB')

function validaNum(N1, N2) {
    return N2 > N1
}

form.addEventListener('submit', function(e){
    e.preventDefault()

    numValido = validaNum(numA.value, numB.value)

    const invalido = document.querySelector('p#invalido')
    const certo = document.querySelector('p#certo')
    
    if(!numValido) {
        invalido.innerHTML = 'O Número A deve ser menor que o Número B!'
        invalido.style.display = 'block'
        certo.style.display = 'none'
        document.querySelector('input#btn-enviar').disabled = true
    }else{
        certo.innerHTML = `Número A: <strong>${numA}</strong> é menor que o Número B: <strong>${num}</strong>!`
        certo.style.dispplay = 'block'
        invalido.style.display = 'none'
    }
})
