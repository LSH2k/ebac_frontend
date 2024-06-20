const form = document.querySelector('form')
const imgAprovado = '<img src="images/aprovado.png" alt="Emoji festejando" />'
const imgReprovado = '<img src="images/reprovado.png" alt="Emoji decepcionado" />'
const atividades = []
const notas = []

let linhas = ''

form.addEventListener('submit', function(e){
    e.preventDefault()

    adicionaLinha()
    atualizaTabela()
})

function adicionaLinha() {
    const inputNomeAtividade = document.querySelector('input#nome-atividade')
    const inputNotaAtividade = document.querySelector('input#nota-atividade')

    atividades.push(inputNomeAtividade.value)
    notas.push(inputNotaAtividade.value)
    
    let linha = '<tr>'
    linha += `<td>${inputNomeAtividade.value}</td>`
    linha += `<td>${inputNotaAtividade.value}</td>`
    linha += `<td>${inputNotaAtividade.value >= 7 ? imgAprovado : imgReprovado}</td>`
    linha += '</tr>'

    linhas += linha

    inputNomeAtividade = ''
    inputNotaAtividade = ''
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
}

function atualizaMediaFinal () {
    console.log(atividades)
    console.log(notas)
}