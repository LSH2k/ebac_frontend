$(document).ready(function() {
    $('form').on('submit', function(e) {
        e.preventDefault()
        const nomeTarefa = $('#nome-tarefa').val()
        const novoItem = $(`<li>${nomeTarefa}</li>`)
        $(novoItem).appendTo('ul')
        $('#nome-tarefa').val('')
    })
    
    $('li').click(function() {
        $(novoItem).val(`<li style="text-decoration: line-through">${nomeTarefa}</li>`)
    })
})