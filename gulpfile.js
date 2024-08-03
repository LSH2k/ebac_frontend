const gulp = require('gulp')

function funcaoPadrao(callback) {
    setTimeout(function() {
        console.log('Executando via gulp')
        callback()
    }, 2000)
}

function dizOi(callback) {
    setTimeout(function() {
        console.log('Olá, Gulp!')
        dizTchau()
        callback()
    },1000)
    
}

function dizTchau() {
    console.log('Tchau, Gulp!')
}

exports.default = gulp.paralell(funcaoPadrao, dizOi)
exports.dizOi = dizOi