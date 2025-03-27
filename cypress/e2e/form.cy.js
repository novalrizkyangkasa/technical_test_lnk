import FillFormPage from '../pages/fillform.cy';
import VerifyDetailElementsPage from '../pages/verify_detail_elements.cy';
import FillFormPage_Invalid from '../pages/fillform_invalid.cy';
import ErrorMessages_to_Update from '../pages/error_messages_to_update_dynamically.cy';
import '@shelex/cypress-allure-plugin';

describe('Form Page', () => {
    const fillForm = new FillFormPage();
    const verify_detail_elements = new VerifyDetailElementsPage();
    const fillForm_Invalid = new FillFormPage_Invalid();
    const errorMessagesUpdate = new ErrorMessages_to_Update();

// Cypress.on('command:end', (command) => {
//         const blacklist = ['screenshot', 'viewport', 'wait']; // Hindari recursive screenshot
//         if (!blacklist.includes(command.attributes.name)) {
//           const fileName = `${command.attributes.name}-${Date.now()}`;
//           cy.screenshot(fileName, { capture: 'viewport' });
//           cy.allure().attachment(`${command.attributes.name} Screenshot`, `screenshots/${Cypress.spec.name}/${fileName}.png`, 'image/png');
//         }
//       });

beforeEach(() => {
    cy.visit('https://forms.office.com/pages/responsepage.aspx?id=is2XW8LLaEmfFhLKD9VwE9lpKmxdveNGmMWKETZvAWNUMzhBV1lYTlc1SDNRS00xRVg4OFhPODlQTS4u');
      });

    it('As User, I must be able to access "Form Submission Microsoft" web page', () => {

        verify_detail_elements.VerifyDetailElementisVisible_fullname_field();
        verify_detail_elements.VerifyDetailElementisVisible_phonenumber_field();
        verify_detail_elements.VerifyDetailElementisVisible_productaffordable_field();
        verify_detail_elements.VerifyDetailElementisVisible_rateourservices_field();
        verify_detail_elements.VerifyDetailElementisVisible_reviewdate_field();
        verify_detail_elements.VerifyDetailElementisVisible_ctabutton_field();
        verify_detail_elements.VerifyDetailElementisVisible_disclaimermessage_field();
        verify_detail_elements.VerifyDetailElementisVisible_365branding_field();

        fillForm_Invalid.fillForm_invalid_blankFullName_field();
    })

    it('As a user, I want to fill out the form correctly to ensure the form submission works smoothly', () => {
        cy.fixture('datas').then((userData) => {

        fillForm.fillForm_valid();
        })
    })

    it('As a user, I want to select the "Lainnya" option and input additional information about the affordability of the product or service', () => {
        cy.fixture('datas').then((userData) => {

        fillForm.fillForm_valid_with_lainnyaoption();
        })
    })

    it('As a user, I want to input special characters in the "Lainnya" (Other) text box', () => {
        cy.fixture('datas').then((userData) => {

        fillForm.fillForm_valid_with_lainnyaoption_specialChar();
        })
    })

    it('Verify Full Name Empty Validation', () => {
        cy.fixture('datas').then((userData) => {

        fillForm_Invalid.fillForm_invalid_blankFullName_field();
        })
    })

    it('Verify Phone Number Empty Validation', () => {
        cy.fixture('datas').then((userData) => {

        fillForm_Invalid.fillForm_invalid_blankPhoneNumber_field();
        })
    })

    it('Verify Product Affordability Selection Empty Validation', () => {
        cy.fixture('datas').then((userData) => {

        fillForm_Invalid.fillForm_invalid_blankProductAffordability_field();
        })
    })

    it('Verify Rating Services Empty Validation', () => {
        cy.fixture('datas').then((userData) => {

        fillForm_Invalid.fillForm_invalid_blankRateServices_field();
        })
    })

    it('Verify Review Date Empty Validation', () => {
        cy.fixture('datas').then((userData) => {

        fillForm_Invalid.fillForm_invalid_blankReviewDate_field();
        })
    })

    it('Verify Multiple Dynamic Error Message Display', () => {
        cy.fixture('datas').then((userData) => {

        fillForm_Invalid.fillForm_invalid_blankMultiple_field();
        })
    })

    it('Verify Partial Dynamic Error Message Display', () => {
        cy.fixture('datas').then((userData) => {

        fillForm_Invalid.fillForm_invalid_blankPartial_field();
        })
    })

    it('Verify All Field Error Message Display', () => {
        cy.fixture('datas').then((userData) => {

        fillForm_Invalid. fillForm_invalid_blankAll_field();
        })
    })

    it('Verify Dynamic Error Message is Resetting when previously user let empty the field and after that fill that field', () => {
        cy.fixture('datas').then((userData) => {

        errorMessagesUpdate.fillForm_errormessage_to_update_field();
        })
    })

    it('Verify Dynamic Error Message is Resetting when previously user let empty the field and after that fill complete field', () => {
        cy.fixture('datas').then((userData) => {

        errorMessagesUpdate.fillForm_errormessage_to_update_not_showing_again();
        })
    })

    it('Verify Empty "Lainnya" Custom Input Validation', () => {
        cy.fixture('datas').then((userData) => {

        fillForm_Invalid.fillForm_invalid_blankLainnyaText_field();
        })
    })

});