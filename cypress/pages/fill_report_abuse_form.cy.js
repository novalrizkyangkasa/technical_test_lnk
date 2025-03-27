require('cypress-xpath');
class FillFormPage_ReportAbuse {

    fillFormReportAbuse_blank_violation_field(){
        cy.fixture('datas').then((userData) => {

            cy.get('#ReportAbuseId_CommentsTitle')
              .should('have.text', 'Comments')
              .should('be.visible');
            
            cy.xpath('//*[@id="form-main-content1"]/div/div[2]/div[3]/span/textarea')
              .should('have.attr', 'placeholder', "Please provide additional details about the abuse or offensive behavior you're reporting.")
              .should('be.visible');
            
            cy.get('[data-automation-id="textInput"]').type(userData.comments).should('have.value' , userData.comments);

            cy.xpath('//*[@id="form-main-content1"]/div/div[2]/div[4]/button')
              .should('be.visible')
              .should('contain.text', 'Submit')
              .click();
        });
    }

    fillFormReportAbuse_blank_comments_field(){
        cy.fixture('datas').then((userData) => {

            cy.get('#ReportAbuseId_CommentsTitle')
              .should('have.text', 'Comments')
              .should('be.visible');
            
            cy.get('#reportAbuseOption_0')
              .should('have.text', 'Phishing')
              .should('be.visible')
              .click();
            
            // cy.get('[data-automation-id="textInput"]').type(userData.comments).should('have.value' , userData.comments);

            cy.xpath('//*[@id="form-main-content1"]/div/div[2]/div[4]/button')
              .should('be.visible')
              .should('contain.text', 'Submit')
              .click();
        });
    }

    fillFormReportAbuse_allblank_field(){
        cy.fixture('datas').then((userData) => {

            cy.get('#ReportAbuseId_CommentsTitle')
              .should('have.text', 'Comments')
              .should('be.visible');
            
            cy.xpath('//*[@id="form-main-content1"]/div/div[2]/div[3]/span/textarea')
              .should('have.attr', 'placeholder', "Please provide additional details about the abuse or offensive behavior you're reporting.")
              .should('be.visible');
            
            // cy.get('[data-automation-id="textInput"]').type(userData.comments).should('have.value' , userData.comments);

            cy.xpath('//*[@id="form-main-content1"]/div/div[2]/div[4]/button')
              .should('be.visible')
              .should('contain.text', 'Submit')
              .click();
        });
    }

    fillFormReportAbuse_comment_field_with_specialchar(){
        cy.fixture('datas').then((userData) => {

            cy.get('#ReportAbuseId_CommentsTitle')
              .should('have.text', 'Comments')
              .should('be.visible');
            
            cy.get('#reportAbuseOption_0')
              .should('have.text', 'Phishing')
              .should('be.visible')
              .click();
            
            cy.get('[data-automation-id="textInput"]').type(userData.commentsspecialchar).should('have.value' , userData.commentsspecialchar);

            cy.xpath('//*[@id="form-main-content1"]/div/div[2]/div[4]/button')
              .should('be.visible')
              .should('contain.text', 'Submit')
              .click();
        });
    }

}

export default FillFormPage_ReportAbuse;