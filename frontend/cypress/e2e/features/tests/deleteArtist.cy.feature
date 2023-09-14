describe('Deletar artista', () => {
  it('Deleta um artista', () => {
    
    cy.visit('http://127.0.0.1:5173/artists');
    
    cy.get("#delete-7").click();

    cy.contains('Você tem certeza')

    cy.get('.delete').click();
  });
});
