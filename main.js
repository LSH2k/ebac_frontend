const form = document.querySelector('form')

const numA = document.querySelector('input#numA'.value)
const numB = document.querySelector('input#numB'.value)

function validaNum(N1, N2) {
    N1 = numA
    N2 = numB
    return N2 > N1
}

form.addEventListener('submit', function(e){
    e.preventDefault()
})

numValido = validaNum(numA, numB)

if (!validaNum(numValido)) {
    document.querySelector('input#btn-enviar').disabled = true
}
