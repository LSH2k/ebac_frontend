$(document).ready(function() {
    $('#carousel-images').slick({
        autoplay:true
    })

    $('.menu-hamburguer').click(function() {
        $('nav').slideToggle()
    })

    $('#telefone').mask('(00) 0 0000-0000', {
        placeholder: '(99) 9 9999-9999'
    })

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            mensagem: {
                required: true
            },
            veiculoDeInteresse: {
                required: false
            }
        },
        messages: {
            nome: 'Por favor, insira o seu nome'
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposInvalidos = validador.numberOfInvalids()
            if (camposInvalidos) {
                alert(`Existe ${camposInvalidos} campos inválidos`)
            }
        }
    })

    $('.lista-veiculos button').click(function() {
        const destino = $('#contato')
        const nomeVeiculo = $(this).parent().find('h3').text()

        $('#veiculo-interesse').val(nomeVeiculo)

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })
})