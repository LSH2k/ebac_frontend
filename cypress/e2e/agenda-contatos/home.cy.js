/// <reference types='cypress' />

describe('Teste para a home page', () => {
  beforeEach(() => {
    cy.visit('https://agenda-contatos-react.vercel.app/')
  })

  it('Deve adicionar um contato a lista', () => {
    cy.get('input[type="text"]').type('Teste')
    cy.get('input[type="email"]').type('teste@email.com')
    cy.get('input[type="tel"]').type('11 123456789')
    cy.contains('Adicionar').click()
  })

  it('Deve editar um contato da lista', () => {
    cy.get(':nth-child(2) > .sc-gueYoa > .edit').click()
    cy.get('input[type="text"]').clear().type('Teste Editar')
    cy.get('input[type="email"]').clear().type('editado@email.com')
    cy.get('input[type="tel"]').clear().type('11 987654321')
    cy.get('.alterar').click()
  })

  it('Deve remover um contato da lista', () => {
    cy.get(':nth-child(3) > .sc-gueYoa > .delete').click()
  })
})