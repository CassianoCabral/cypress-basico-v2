import VerifyPage from '../pages/VerifyPage'

describe('Central de Atendimento ao Cliente TAT', function () {
    it('verifica o título da aplicação', function () {

        const signup = new VerifyPage()

        signup.go()
    })


    it('preenche os campos obrigatórios e envia o formulário', function () {

        cy.visit('./src/index.html')

        const client = {
            firstName: 'Cassiano',
            lastName: 'Souza Cabral',
            email: 'Cassiano_cabral@outlook.com',
            phoneNumber: '28999745384',
        }

        const signup = new VerifyPage()
        signup.go()
        signup.fillForm(client)
        const expectedMessage = 'Tenho algumas duvidas'
        signup.modalContentShouldBe(expectedMessage)
        signup.submit()
    })

    it('email incorreto', function () {

        cy.visit('./src/index.html')

        const client = {
            firstName: 'Cassiano',
            lastName: 'Souza Cabral',
            email: 'Cassiano_cabral.outlook.com',
            phoneNumber: '28999745384',
        }

        const signup = new VerifyPage()
        signup.go()
        signup.fillForm(client)
        const expectedMessage = 'Tenho algumas duvidas'
        signup.modalContentShouldBe(expectedMessage)
        signup.submit()
        signup.alertMessageShouldBe('Valide os campos obrigatórios!')
    })
})