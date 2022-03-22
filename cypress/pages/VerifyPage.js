class VerifyPage {
    
    go() {
        cy.visit('./src/index.html')
        cy.title().should('eq', 'Central de Atendimento ao Cliente TAT')
        cy.get('[id="title"]').should('have.text', 'CAC TAT')

    }

    fillForm(client){
        cy.get('input[name="firstName"]').type(client.firstName)
        cy.get('input[name="lastName"]').type(client.lastName)
        cy.get('input[type="email"]').type(client.email)
        cy.get('input[type="number"]').type(client.phoneNumber)

        cy.get('#product').select('Blog').should('have.value', 'blog')

        cy.get('input[value="ajuda"]').click().should('have.value', 'ajuda')
        cy.get('[id="email-checkbox"]').click().should('have.value', 'email')

        cy.get('input[type="file"]').attachFile('error-site.jpg')
    }

    submit(){
        cy.get('.button').click()
        cy.get('.success > strong').should('have.text', 'Mensagem enviada com sucesso.')
    }

    modalContentShouldBe(expectedMessage){
        cy.get('[id="open-text-area"]').type(expectedMessage)
    }

    alertMessageShouldBe(expectedMessage){
        cy.get('.error > strong').should('have.text', expectedMessage)
    }

}

export default VerifyPage;