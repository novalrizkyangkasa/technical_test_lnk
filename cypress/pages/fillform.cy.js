class FillFormPage {

    fillForm_valid(){
        cy.fixture('datas').then((userData) => {
            cy.get('#question-list > div:nth-child(1) > div.-bR-49 > div > span > input').type(userData.name).should('have.value', userData.name);
            cy.get('#question-list > div:nth-child(2) > div.-bR-49 > div > span > input').type(userData.phone_number).should('have.value', userData.phone_number);
            cy.get(`[data-automation-value="${userData.radioOption1}"]`).click().should('be.visible');
            cy.get(`[aria-label="${userData.rate4star}"]`).click();

            const today = new Date();
            const day = today.getDate(); // Hari ini

            cy.get('#DatePicker0-label').click();
            cy.get('.ms-DatePicker')
              .contains(day)
              .should('include.text', day)
              .click();

            cy.get('[data-automation-id="submitButton"]').should('be.visible').click();

            cy.get('[data-automation-id="thankYouMessage"]').should('include.text', 'Your response was submitted.');
            cy.xpath('//*[@id="form-main-content1"]/div/div/div[2]/div[1]/div[2]/div[3]/span').should('include.text', 'Important thing you can do next');
            cy.get('[data-automation-id="saveAndEditButton"]').should('be.visible');
            cy.get('[data-automation-id="submitAnother"]').should('be.visible');
            cy.xpath('//*[@id="form-main-content1"]/div/div/div[2]/div[1]/div[3]').should('be.visible');  
        });
    }

    fillForm_valid_with_lainnyaoption(){
        cy.fixture('datas').then((userData) => {
            cy.get('#question-list > div:nth-child(1) > div.-bR-49 > div > span > input').type(userData.name).should('have.value', userData.name);
            cy.get('#question-list > div:nth-child(2) > div.-bR-49 > div > span > input').type(userData.phone_number).should('have.value', userData.phone_number);
            cy.get('#question-list > div:nth-child(3) > div.-bR-49 > div > div.-mP-75 > label > span > input').click().should;
            cy.xpath('//*[@id="question-list"]/div[3]/div[2]/div/div[2]/label/div/span/input').click()
              .type(userData.lainnyaoption).should('have.value', userData.lainnyaoption);
            cy.get(`[aria-label="${userData.rate5star}"]`).click();

            const today = new Date();
            const day = today.getDate(); // Hari ini

            cy.get('#DatePicker0-label').click();
            cy.get('.ms-DatePicker')
              .contains(day)
              .should('include.text', day)
              .click();

            cy.get('[data-automation-id="submitButton"]').should('be.visible').click();

            cy.get('[data-automation-id="thankYouMessage"]').should('include.text', 'Your response was submitted.');
            cy.xpath('//*[@id="form-main-content1"]/div/div/div[2]/div[1]/div[2]/div[3]/span').should('include.text', 'Important thing you can do next');
            cy.get('[data-automation-id="saveAndEditButton"]').should('be.visible');
            cy.get('[data-automation-id="submitAnother"]').should('be.visible');
            cy.xpath('//*[@id="form-main-content1"]/div/div/div[2]/div[1]/div[3]').should('be.visible');  
        });
    }

    fillForm_valid_with_lainnyaoption_specialChar(){
        cy.fixture('datas').then((userData) => {
            cy.get('#question-list > div:nth-child(1) > div.-bR-49 > div > span > input').type(userData.name).should('have.value', userData.name);
            cy.get('#question-list > div:nth-child(2) > div.-bR-49 > div > span > input').type(userData.phone_number).should('have.value', userData.phone_number);
            cy.get('#question-list > div:nth-child(3) > div.-bR-49 > div > div.-mP-75 > label > span > input').click().should;
            cy.xpath('//*[@id="question-list"]/div[3]/div[2]/div/div[2]/label/div/span/input').click()
              .type(userData.lainnyaoptionspecialchar).should('have.value', userData.lainnyaoptionspecialchar);
            cy.get(`[aria-label="${userData.rate5star}"]`).click();

            const today = new Date();
            const day = today.getDate(); // Hari ini

            cy.get('#DatePicker0-label').click();
            cy.get('.ms-DatePicker')
              .contains(day)
              .should('include.text', day)
              .click();

            cy.get('[data-automation-id="submitButton"]').should('be.visible').click();

            cy.get('[data-automation-id="thankYouMessage"]').should('include.text', 'Your response was submitted.');
            cy.xpath('//*[@id="form-main-content1"]/div/div/div[2]/div[1]/div[2]/div[3]/span').should('include.text', 'Important thing you can do next');
            cy.get('[data-automation-id="saveAndEditButton"]').should('be.visible');
            cy.get('[data-automation-id="submitAnother"]').should('be.visible');
            cy.xpath('//*[@id="form-main-content1"]/div/div/div[2]/div[1]/div[3]').should('be.visible');  
        });
    }
}

export default FillFormPage;