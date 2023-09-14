describe('Cadastro de artistas', () => {
  it('Tenta se cadastrar', () => {
    
    cy.visit('localhost:5173/signup');
    
    cy.get("#email_input_field").type("someone2@example.com");
    
    cy.get("#password_input_field").type("somepassword");
    
    cy.get("#nome_input_field").type("Example Scrobblers");
    
    cy.get("#genero_input_field").type("Test Rock");
    
    cy.get("#desc_input_field").type("Lorem Ipsum do sei lá o que. É isso aí mesmo.");
    
    cy.get('#submit').click();

    cy.contains('Sucesso! Artista criado!')
  });
});

