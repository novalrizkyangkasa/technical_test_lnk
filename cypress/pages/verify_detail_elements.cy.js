require('cypress-xpath');
class VerifyDetailElementsPage {

    VerifyDetailElementisVisible_fullname_field(){
        cy.get('#QuestionId_r9f62b2a1fbe746ab953326f6937d4e73')
          .find('[class="text-format-content "]')
          .should('have.text', 'Full name')
          .should('be.visible');
        
        cy.get('input[data-automation-id="textInput"]') // Menargetkan elemen input berdasarkan data-automation-id
          .invoke('attr', 'placeholder') // Mengambil atribut placeholder
          .should('eq', 'Enter your answer'); // Menyesuaikan dengan nilai yang diharapkan, bisa disesuaikan jika perlu
    }

    VerifyDetailElementisVisible_phonenumber_field(){
        cy.get('#QuestionId_r5c2dd5cf6732459894e3d1cb504c8110')
          .find('[class="text-format-content "]')
          .should('have.text', 'Phone Number')
          .should('be.visible');

        cy.get('input[data-automation-id="textInput"]')
          .invoke('attr', 'placeholder')
          .should('eq', 'Enter your answer');
    }

    VerifyDetailElementisVisible_productaffordable_field(){
        cy.get('#QuestionId_r8bc17b753f0048ecb03794ef45037bb7')
          .find('[class="text-format-content "]')
          .should('have.text', 'Do you think your product or service is affordable or expensive?')
          .should('be.visible');
        
        cy.get('[data-automation-id="choiceItem"]')
          .find('#QuestionChoiceOption1')
          .should('have.text', 'Affordable')
          .should('be.visible');
        
        cy.get('[data-automation-id="choiceItem"]')
          .find('#QuestionChoiceOption2')
          .should('have.text', 'Expensive')
          .should('be.visible');
        
        cy.get('[data-automation-id="radio"]')
          .should('be.visible');
        
        cy.get('#question-list > div:nth-child(3) > div.-bR-49 > div > div.-mP-75 > label > div > span > input')
          .invoke('attr', 'placeholder')
          .should('eq', 'Other');
    }

    VerifyDetailElementisVisible_rateourservices_field(){
        cy.get('#QuestionId_r9f97f2550332479a8fdd2914bd99bc1d')
          .find('[class="text-format-content "]')
          .should('have.text', 'Rate our services')
          .scrollIntoView()
          .should('be.visible');

        cy.get('#question-list > div:nth-child(4) > div.-bR-49 > div > div')
          .should('be.visible');
    }

    VerifyDetailElementisVisible_reviewdate_field(){
        cy.get('#QuestionId_r1abee94394494318b1e34a419838e56c')
        .find('[class="text-format-content "]')
        .should('have.text', 'Review date')
        .scrollIntoView()
        .should('be.visible');

        cy.get('#DatePicker0-label')
          .scrollIntoView()
          .should('be.visible')
          .invoke('attr', 'placeholder')
          .should('eq', 'Please input date (M/d/yyyy)');

        cy.get('#DatePicker0-label')
          .scrollIntoView()
          .click();

        cy.xpath('//*[@id="DatePicker-Callout1"]/div/div/div[2]')
          .should('be.visible');

        // cy.get('#DatePicker-Callout1 > div > div > div.ms-DatePicker.root-318.ms-slideDownIn10 > div.root-323 > div.header-324 > div > button:nth-child(3) > i')
        //   .click();
          
    }

    VerifyDetailElementisVisible_ctabutton_field(){
        cy.get('[data-automation-id="submitButton"]')
          .scrollIntoView()
          .should('be.visible')
          .should('have.text', 'Submit');
    }

    VerifyDetailElementisVisible_disclaimermessage_field(){
        cy.xpath('//*[@id="form-main-content1"]/div/div/div[2]/div[4]')
          .should('have.text', 'Never give out your password.Report abuse')
          .should('be.visible');
    }

    VerifyDetailElementisVisible_365branding_field(){
        cy.xpath('//*[@id="branding-footer"]/div[1]/img')
          .scrollIntoView()
          .should('be.visible');
        
        cy.xpath('//*[@id="branding-footer"]/div[2]/div/div[1]')
          .scrollIntoView()
          .should('be.visible')
          .should('have.text', 'This content is created by the owner of the form. The data you submit will be sent to the form owner. Microsoft is not responsible for the privacy or security practices of its customers, including those of this form owner. Never give out your password.');
        
        cy.xpath('//*[@id="branding-footer"]/div[2]/div/div[2]/div[1]')
          .scrollIntoView()
          .should('be.visible')
          .should('have.text', 'Microsoft Forms | AI-Powered surveys, quizzes and pollsCreate my own form');
        
        cy.xpath('//*[@id="branding-footer"]/div[2]/div/div[2]/div[2]/span[1]')
          .scrollIntoView()
          .should('be.visible')
          .should('have.text', 'The owner of this form has not provided a privacy statement as to how they will use your response data. Do not provide personal or sensitive information.');

        cy.xpath('//*[@id="branding-footer"]/div[2]/div/div[2]/div[2]/a')
          .scrollIntoView()
          .should('be.visible')
          .should('have.text', 'Terms of use');
    }
}

export default VerifyDetailElementsPage;