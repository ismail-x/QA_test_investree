describe('My First Testing', () => {

    beforeEach(function () {
        cy.visit('https://www.phptravels.net/visa/')
    });

    it('To Country', () => {
        cy.get('#to_country')
        .select('Indonesia', {force:true})
        .should('have.value', 'ID' )
    })
    it('From Country', () => {
        
    cy.get('#from_country')
    .select('Andorra', {force:true})
    .should('have.value', 'AD' )

    })
    it('Date Picker', () => {
        cy.get('#visa-submit')
        .find('input').then(input => {
            cy.wrap(input).click({ force:true})
            cy.get('[class="datepicker dropdown-menu"]')
            .find('[class="day "]')
            .contains('24').click()
            cy.wrap(input).invoke('prop', 'value').should('contain', '24-05-2022')
        }) 
    })
    
    it('Submit', () => {

        cy.get('#from_country')
        .select('Andorra', {force:true})
        .should('have.value', 'AD' )


        cy.get('#to_country')
        .select('Indonesia', {force:true})
        .should('have.value', 'ID' )

        cy.get('#visa-submit')
        .find('input').then(input => {
            cy.wrap(input).click({ force:true})
            cy.get('[class="datepicker dropdown-menu"]')
            .find('[class="day "]')
            .contains('24').click()
            cy.wrap(input).invoke('prop', 'value').should('contain', '24-05-2022')
        }) 

        cy.get('button').contains('Submit')
        .click({force:true})
    })

    it('Name', () => {

        cy.visit('https://www.phptravels.net/visa/submit/ad/id/24-05-2022')

        cy.get('.form-content')
        .find('[placeholder="First Name"]')
        .type('cypress', {force:true})
        .should('have.value', 'cypress')

    })
    it('Last Name', () => {

        cy.visit('https://www.phptravels.net/visa/submit/ad/id/24-05-2022')

        cy.get('.form-content')
        .find('[placeholder="Last Name"]')
        .type('Ismail', {force:true})
        .should('have.value', 'Ismail')
        

    })
    it('Email', () => {

        cy.visit('https://www.phptravels.net/visa/submit/ad/id/24-05-2022')

        cy.get('.form-content')
        .find('[placeholder="Email"]')
        .type('ismail.xdev@gmail.com', {force:true})
        .should('have.value', 'ismail.xdev@gmail.com')


    })

    it('Phone', () => {

        cy.visit('https://www.phptravels.net/visa/submit/ad/id/24-05-2022')

        cy.get('.form-content')
        .find('[placeholder="Phone"]')
        .type('081264008862', {force:true})
        .should('have.value', '081264008862')

    })

    it('Date', () => {

        cy.visit('https://www.phptravels.net/visa/submit/ad/id/24-05-2022')

        cy.get('.form-content')
        .find('[placeholder="Date"]')
        .then(input => {
            cy.wrap(input).click({ force:true})
            cy.get('[class="datepicker dropdown-menu"]')
            .find('[class="day  active"]')
            .contains('24').click()
            cy.wrap(input).invoke('prop', 'value').should('contains', '24-05-2022')
        }) 

    })

    it('Notes', () => {

        cy.visit('https://www.phptravels.net/visa/submit/ad/id/24-05-2022')

        cy.get('.form-content')
        .find('[placeholder="Notes"]')
        .type('kacau nih', {force:true})
        .should('have.value', 'kacau nih')

    })


    it('My first testing', () => {

        cy.get('#from_country')
        .select('Andorra', {force:true})
        .should('have.value', 'AD' )
        
        cy.get('#to_country')
        .select('Indonesia', {force:true})
        .should('have.value', 'ID' )

        cy.get('#visa-submit')
        .find('input').then(input => {
            cy.wrap(input).click({ force:true})
            cy.get('[class="datepicker dropdown-menu"]')
            .find('[class="day "]')
            .contains('24').click()
            cy.wrap(input).invoke('prop', 'value').should('contain', '24-05-2022')
        }) 

        cy.get('button').contains('Submit')
        .click({force:true})

        cy.get('.form-content')
        .find('[placeholder="First Name"]')
        .type('cypress', {force:true})
        .should('have.value', 'cypress')

        cy.get('.form-content')
        .find('[placeholder="Last Name"]')
        .type('Ismail', {force:true})
        .should('have.value', 'Ismail')

        cy.get('.form-content')
        .find('[placeholder="Email"]')
        .type('ismail.xdev@gmail.com', {force:true})
        .should('have.value', 'ismail.xdev@gmail.com')

        cy.get('.form-content')
        .find('[placeholder="Phone"]')
        .type('081264008862', {force:true})
        .should('have.value', '081264008862')

        cy.get('.form-content')
        .find('[placeholder="Date"]')
        .then(input => {
            cy.wrap(input).click({ force:true})
            cy.get('[class="datepicker dropdown-menu"]')
            .find('[class="day  active"]')
            .contains('24').click()
            cy.wrap(input).invoke('prop', 'value').should('contains', '24-05-2022')
        }) 

        cy.get('.form-content')
        .find('[placeholder="Notes"]')
        .type('kacau nih', {force:true})
        .should('have.value', 'kacau nih')

        cy.get('button').contains('Submit')
        .click({force:true})

        cy.get('h2')
        .should('contain', 'Your visa form has been submitted')

    })




})