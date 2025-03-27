require('cypress-xpath');
class VerifyHyperlink {

    VerifyHyperlink_laporkan_penyalahgunaan(){
      cy.xpath('//*[@id="form-main-content1"]/div/div/div[2]/div[4]')
        .scrollIntoView()
        .should('have.text', 'Never give out your password.Report abuse')
        .should('be.visible')
        .contains('Report abuse').click()
    }

    Hyperlink_laporkan_penyalahgunaan_detail_elements(){
      cy.get('#ReportAbuseId_FormTitle')
        .should('have.text', 'Report Abuse')
        .should('be.visible')

      cy.get('#ReportAbuseId_ReportTitle')
        .should('have.text', 'What violation are you reporting?')
        .should('be.visible')
      
      cy.get('#reportAbuseOption_0')
        .should('have.text', 'Phishing')
        .should('be.visible')

      cy.get('#reportAbuseOption_1')
        .should('have.text', 'Copyright infringement')
        .should('be.visible') 

      cy.get('#reportAbuseOption_2')
        .should('have.text', 'Other')
        .should('be.visible') 
        
      cy.get('#ReportAbuseId_CommentsTitle')
        .should('have.text', 'Comments')
        .should('be.visible')
      
      cy.xpath('//*[@id="form-main-content1"]/div/div[2]/div[3]/span/textarea')
        .should('have.attr', 'placeholder', "Please provide additional details about the abuse or offensive behavior you're reporting.")
        .should('be.visible') 
      
      cy.xpath('//*[@id="form-main-content1"]/div/div[2]/div[4]/button')
        .should('be.visible')
        .should('contain.text', 'Submit')
      
      
    }
}

export default VerifyHyperlink;