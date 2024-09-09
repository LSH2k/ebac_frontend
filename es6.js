const alunos = [
    { nome: 'Eduarda', nota: 6 },
    { nome: 'Matheus', nota: 10 },
    { nome: 'Lucas', nota: 1 },
    { nome: 'Ana', nota: 5 },
    { nome: 'Pedro', nota: 7 },
    { nome: 'Julia', nota: 8 },
    { nome: 'Juan', nota: 4 },
    { nome: 'Maria', nota: 9 },
    { nome: 'Rafael', nota: 6 },
    { nome: 'Henrique', nota: 2 }
]

const filtraMedia = aluno => aluno.nota >= 6

console.log(alunos.filter(filtraMedia))