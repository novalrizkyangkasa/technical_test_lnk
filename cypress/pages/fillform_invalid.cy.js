class FillFormPage_Invalid {

    fillForm_invalid_blankFullName_field(){
        cy.fixture('datas').then((userData) => {
            // cy.get('#question-list > div:nth-child(1) > div.-bR-49 > div > span > input').type(userData.name).should('have.value', userData.name);
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
            
            cy.get('[data-automation-id="submitButton"]')
              .scrollIntoView()
              .should('be.visible')
              .click();

            cy.get('#ErrorMsgId_r9f62b2a1fbe746ab953326f6937d4e73')
              .scrollIntoView()
              .should('be.visible')
              .should('have.text', 'This question is required.');

            cy.get('[data-automation-id="submitError"]')
              .scrollIntoView()
              .should('be.visible')
              .should('include.text', 'question(s) need to be completed before submitting: Question');

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

    fillForm_invalid_blankPhoneNumber_field(){
        cy.fixture('datas').then((userData) => {
            cy.get('#question-list > div:nth-child(1) > div.-bR-49 > div > span > input').type(userData.name).should('have.value', userData.name);
            // cy.get('#question-list > div:nth-child(2) > div.-bR-49 > div > span > input').type(userData.phone_number).should('have.value', userData.phone_number);
            cy.get(`[data-automation-value="${userData.radioOption1}"]`).click().should('be.visible');
            cy.get(`[aria-label="${userData.rate4star}"]`).click();

            const today = new Date();
            const day = today.getDate(); // Hari ini

            cy.get('#DatePicker0-label').click();
            cy.get('.ms-DatePicker')
              .contains(day)
              .should('include.text', day)
              .click();

            cy.get('[data-automation-id="submitButton"]')
              .scrollIntoView()
              .should('be.visible')
              .click();

            cy.get('#ErrorMsgId_r5c2dd5cf6732459894e3d1cb504c8110')
              .scrollIntoView()
              .should('be.visible')
              .should('have.text', 'This question is required.');

            cy.get('[data-automation-id="submitError"]')
              .scrollIntoView()
              .should('be.visible')
              .should('include.text', 'question(s) need to be completed before submitting: Question');

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
   
   fillForm_invalid_blankProductAffordability_field(){
       cy.fixture('datas').then((userData) => {
            cy.get('#question-list > div:nth-child(1) > div.-bR-49 > div > span > input').type(userData.name).should('have.value', userData.name);
            cy.get('#question-list > div:nth-child(2) > div.-bR-49 > div > span > input').type(userData.phone_number).should('have.value', userData.phone_number);
            // cy.get(`[data-automation-value="${userData.radioOption1}"]`).click().should('be.visible');
            cy.get(`[aria-label="${userData.rate4star}"]`).click();

            const today = new Date();
            const day = today.getDate(); // Hari ini

            cy.get('#DatePicker0-label').click();
            cy.get('.ms-DatePicker')
              .contains(day)
              .should('include.text', day)
              .click();

            cy.get('[data-automation-id="submitButton"]')
              .scrollIntoView()
              .should('be.visible')
              .click();

            cy.get('#ErrorMsgId_r8bc17b753f0048ecb03794ef45037bb7')
              .scrollIntoView()
              .should('be.visible')
              .should('have.text', 'This question is required.');

            cy.get('[data-automation-id="submitError"]')
              .scrollIntoView()
              .should('be.visible')
              .should('include.text', 'question(s) need to be completed before submitting: Question');

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

    fillForm_invalid_blankRateServices_field(){
        cy.fixture('datas').then((userData) => {
            cy.get('#question-list > div:nth-child(1) > div.-bR-49 > div > span > input').type(userData.name).should('have.value', userData.name);
            cy.get('#question-list > div:nth-child(2) > div.-bR-49 > div > span > input').type(userData.phone_number).should('have.value', userData.phone_number);
            cy.get(`[data-automation-value="${userData.radioOption1}"]`).click().should('be.visible');
        //  cy.get(`[aria-label="${userData.rate4star}"]`).click();

            const today = new Date();
            const day = today.getDate(); // Hari ini

            cy.get('#DatePicker0-label').click();
            cy.get('.ms-DatePicker')
              .contains(day)
              .should('include.text', day)
              .click();

            cy.get('[data-automation-id="submitButton"]')
              .scrollIntoView()
              .should('be.visible')
              .click();

            cy.get('#ErrorMsgId_r9f97f2550332479a8fdd2914bd99bc1d')
              .scrollIntoView()
              .should('be.visible')
              .should('have.text', 'This question is required.');

            cy.get('[data-automation-id="submitError"]')
              .scrollIntoView()
              .should('be.visible')
              .should('include.text', 'question(s) need to be completed before submitting: Question');

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

    fillForm_invalid_blankReviewDate_field(){
        cy.fixture('datas').then((userData) => {
             cy.get('#question-list > div:nth-child(1) > div.-bR-49 > div > span > input').type(userData.name).should('have.value', userData.name);
             cy.get('#question-list > div:nth-child(2) > div.-bR-49 > div > span > input').type(userData.phone_number).should('have.value', userData.phone_number);
             cy.get(`[data-automation-value="${userData.radioOption1}"]`).click().should('be.visible');
             cy.get(`[aria-label="${userData.rate4star}"]`).click();
 
            //  const today = new Date();
            //  const day = today.getDate(); // Hari ini
 
            //  cy.get('#DatePicker0-label').click();
            //  cy.get('.ms-DatePicker')
            //  .contains(day)
            //  .should('include.text', day)
            //  .click();
 
            cy.get('[data-automation-id="submitButton"]')
              .scrollIntoView()
              .should('be.visible')
              .click();
 
            cy.get('#ErrorMsgId_r1abee94394494318b1e34a419838e56c')
              .scrollIntoView()
              .should('be.visible')
              .should('have.text', 'This question is required.');

            cy.get('[data-automation-id="submitError"]')
              .scrollIntoView()
              .should('be.visible')
              .should('include.text', 'question(s) need to be completed before submitting: Question');

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

    fillForm_invalid_blankMultiple_field(){
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

            cy.get('[data-automation-id="submitButton"]')
              .scrollIntoView()
              .should('be.visible')
              .click();

            cy.get('#ErrorMsgId_r9f62b2a1fbe746ab953326f6937d4e73')
              .scrollIntoView()
              .should('be.visible')
              .should('have.text', 'This question is required.');

            cy.get('#ErrorMsgId_r5c2dd5cf6732459894e3d1cb504c8110')
              .scrollIntoView()
              .should('be.visible')
              .should('have.text', 'This question is required.');

            cy.get('[data-automation-id="submitError"]')
              .scrollIntoView()
              .should('be.visible')
              .should('include.text', 'question(s) need to be completed before submitting: Question');

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

    fillForm_invalid_blankPartial_field(){
        cy.fixture('datas').then((userData) => {
            //  cy.get('#question-list > div:nth-child(1) > div.-bR-49 > div > span > input').type(userData.name).should('have.value', userData.name);
            //  cy.get('#question-list > div:nth-child(2) > div.-bR-49 > div > span > input').type(userData.phone_number).should('have.value', userData.phone_number);
            cy.get(`[data-automation-value="${userData.radioOption1}"]`).click().should('be.visible');
            cy.get(`[aria-label="${userData.rate4star}"]`).click();

            // const today = new Date();
            // const day = today.getDate(); // Hari ini

            // cy.get('#DatePicker0-label').click();
            // cy.get('.ms-DatePicker')
            //   .contains(day)
            //   .should('include.text', day)
            //   .click();

            cy.get('[data-automation-id="submitButton"]')
              .scrollIntoView()
              .should('be.visible')
              .click();

            cy.get('#ErrorMsgId_r9f62b2a1fbe746ab953326f6937d4e73')
              .scrollIntoView()
              .should('be.visible')
              .should('have.text', 'This question is required.');

            cy.get('#ErrorMsgId_r5c2dd5cf6732459894e3d1cb504c8110')
              .scrollIntoView()
              .should('be.visible')
              .should('have.text', 'This question is required.');

            cy.get('#ErrorMsgId_r1abee94394494318b1e34a419838e56c')
              .scrollIntoView()
              .should('be.visible')
              .should('have.text', 'This question is required.');         

            cy.get('[data-automation-id="submitError"]')
              .scrollIntoView()
              .should('be.visible')
              .should('include.text', 'question(s) need to be completed before submitting: Question');

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

    fillForm_invalid_blankLainnyaText_field(){
        cy.fixture('datas').then((userData) => {
            cy.get('#question-list > div:nth-child(1) > div.-bR-49 > div > span > input').type(userData.name).should('have.value', userData.name);
            cy.get('#question-list > div:nth-child(2) > div.-bR-49 > div > span > input').type(userData.phone_number).should('have.value', userData.phone_number);
            cy.xpath('//*[@id="question-list"]/div[3]/div[2]/div/div[2]/label/span/input').click();
            cy.get(`[aria-label="${userData.rate4star}"]`).click();

            const today = new Date();
            const day = today.getDate(); // Hari ini

            cy.get('#DatePicker0-label').click();
            cy.get('.ms-DatePicker')
              .contains(day)
              .should('include.text', day)
              .click();

            cy.get('[data-automation-id="submitButton"]')
              .scrollIntoView()
              .should('be.visible')
              .click();

            cy.get('#ErrorMsgId_r8bc17b753f0048ecb03794ef45037bb7')
              .scrollIntoView()
              .should('be.visible')
              .should('have.text', 'The Other field should not be empty.');

            cy.get('[data-automation-id="submitError"]')
              .scrollIntoView()
              .should('be.visible')
              .should('include.text', 'question(s) need to be completed before submitting: Question');

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

    fillForm_invalid_blankAll_field(){
        cy.fixture('datas').then((userData) => {

            cy.get('[data-automation-id="submitButton"]')
              .scrollIntoView()
              .should('be.visible')
              .click();

            cy.get('#ErrorMsgId_r9f62b2a1fbe746ab953326f6937d4e73')
              .scrollIntoView()
              .should('be.visible')
              .should('have.text', 'This question is required.');

            cy.get('#ErrorMsgId_r5c2dd5cf6732459894e3d1cb504c8110')
              .scrollIntoView()
              .should('be.visible')
              .should('have.text', 'This question is required.');

            cy.get('#ErrorMsgId_r8bc17b753f0048ecb03794ef45037bb7')
              .scrollIntoView()
              .should('be.visible')
              .should('have.text', 'This question is required.');

            cy.get('#ErrorMsgId_r9f97f2550332479a8fdd2914bd99bc1d')
              .scrollIntoView()
              .should('be.visible')
              .should('have.text', 'This question is required.');
            
            cy.get('#ErrorMsgId_r1abee94394494318b1e34a419838e56c')
              .scrollIntoView()
              .should('be.visible')
              .should('have.text', 'This question is required.');

            cy.get('[data-automation-id="submitError"]')
              .scrollIntoView()
              .should('be.visible')
              .should('include.text', 'question(s) need to be completed before submitting: Question');

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

}

export default FillFormPage_Invalid;