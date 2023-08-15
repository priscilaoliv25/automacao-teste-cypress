describe('Teste Cypress', () => {
  it('Testar Cadastro', () => {
    cy.visit('http://teste-cypress.s3-website-us-east-1.amazonaws.com/')
    cy.get('a[href="cadastrar.html"]').click()
    cy.get('input[placeholder="Nome Completo"]').type('Priscila Teste')
    cy.get('input[placeholder="Email"]').type('cypress@teste.com')
    cy.get('input[placeholder="senha"]').type('cypress')
    cy.get('input[placeholder="Confirme a senha"]').type('cypress')
    cy.get('button[onclick="handleRegister()"]').click()
    cy.contains('Você está logado!').should('be.visible')

  })

  it('Testar Login', () => {
    cy.visit('http://teste-cypress.s3-website-us-east-1.amazonaws.com/')
    cy.get('input[name = "user_email"]').type('cypress@teste.com')
    cy.get('input[name = "user_password"]').type('cypress')
    cy.get('button[onclick="handleLogin()"]').click()
     //cy.get('button[type="submit"]').click() ou esse vai da certo
   cy.contains('Você está logado!').should('be.visible') //Essa linha serve para visualizar se validou a ultima pagina do teste

  })
})