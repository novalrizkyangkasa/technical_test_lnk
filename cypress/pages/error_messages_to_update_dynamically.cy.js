class ErrorMessages_to_Update {

    fillForm_errormessage_to_update_field(){
        cy.fixture('datas').then((userData) => {
        //  cy.get('#question-list > div:nth-child(1) > div.-bR-49 > div > span > input').type(userData.name).should('have.value', userData.name);
        //  cy.get('#question-list > div:nth-child(2) > div.-bR-49 > div > span > input').type(userData.phone_number).should('have.value', userData.phone_number);
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

            cy.get('#ErrorMsgId_r9f62b2a1fbe746ab953326f6937d4e73')
              .should('be.visible')
              .should('have.text', 'This question is required.');

            cy.get('#ErrorMsgId_r5c2dd5cf6732459894e3d1cb504c8110')
              .should('be.visible')
              .should('have.text', 'This question is required.');

            cy.get('[data-automation-id="submitError"]')
              .scrollIntoView()
              .should('be.visible')
              .should('include.text', 'question(s) need to be completed before submitting: Question');

            cy.get('#question-list > div:nth-child(1) > div.-bR-49 > div > span > input').type(userData.name).should('have.value', userData.name);

            cy.get('[data-automation-id="submitButton"]')
              .scrollIntoView()
              .should('be.visible').click();

            cy.get('#ErrorMsgId_r9f62b2a1fbe746ab953326f6937d4e73')
              .should('not.exist');

            cy.get('#ErrorMsgId_r5c2dd5cf6732459894e3d1cb504c8110')
              .scrollIntoView()
              .should('be.visible')
              .should('have.text', 'This question is required.');

            cy.get('[data-automation-id="thankYouMessage"]')
              .should('not.exist');
                
            cy.xpath('//*[@id="form-main-content1"]/div/div/div[2]/div[1]/div[2]/div[3]/span')
              .should('not.exist');

            cy.get('[data-automation-id="saveAndEditButton"]')
              .should('not.exist');

            cy.get('[data-automation-id="submitAnother"]')
              .should('not.exist');

            cy.xpath('//*[@id="form-main-content1"]/div/div/div[2]/div[1]/div[3]')
              .should('not.exist');  
         });
     }

    fillForm_errormessage_to_update_not_showing_again(){
        cy.fixture('datas').then((userData) => {
        //  cy.get('#question-list > div:nth-child(1) > div.-bR-49 > div > span > input').type(userData.name).should('have.value', userData.name);
        //  cy.get('#question-list > div:nth-child(2) > div.-bR-49 > div > span > input').type(userData.phone_number).should('have.value', userData.phone_number);
            cy.get(`[data-automation-value="${userData.radioOption1}"]`).click().should('be.visible');
            cy.get(`[aria-label="${userData.rate4star}"]`).click();

            const today = new Date();
            const day = today.getDate(); // Hari ini

            cy.get('#DatePicker0-label').click()  ;
            cy.get('.ms-DatePicker')
              .contains(day)
              .should('include.text', day)
              .click();

            cy.get('[data-automation-id="submitButton"]').should('be.visible').click();

            cy.get('#ErrorMsgId_r9f62b2a1fbe746ab953326f6937d4e73')
              .should('be.visible')
              .should('have.text', 'This question is required.');

            cy.get('#ErrorMsgId_r5c2dd5cf6732459894e3d1cb504c8110')
              .should('be.visible')
              .should('have.text', 'This question is required.');

            cy.get('[data-automation-id="submitError"]')
              .scrollIntoView()
              .should('be.visible')
              .should('include.text', 'question(s) need to be completed before submitting: Question');

            cy.get('#question-list > div:nth-child(1) > div.-bR-49 > div > span > input').type(userData.name).should('have.value', userData.name);
            cy.get('#question-list > div:nth-child(2) > div.-bR-49 > div > span > input').type(userData.phone_number).should('have.value', userData.phone_number);

            cy.get('[data-automation-id="submitButton"]')
              .scrollIntoView()
              .should('be.visible').click();

            cy.get('#ErrorMsgId_r9f62b2a1fbe746ab953326f6937d4e73')
              .should('not.exist');

            cy.get('#ErrorMsgId_r5c2dd5cf6732459894e3d1cb504c8110')
              .should('not.exist');

            cy.get('[data-automation-id="thankYouMessage"]').should('include.text', 'Your response was submitted.');
            cy.xpath('//*[@id="form-main-content1"]/div/div/div[2]/div[1]/div[2]/div[3]/span').should('include.text', 'Important thing you can do next');
            cy.get('[data-automation-id="saveAndEditButton"]').should('be.visible');
            cy.get('[data-automation-id="submitAnother"]').should('be.visible');
            cy.xpath('//*[@id="form-main-content1"]/div/div/div[2]/div[1]/div[3]').should('be.visible'); 
         });
     }

}

export default ErrorMessages_to_Update;