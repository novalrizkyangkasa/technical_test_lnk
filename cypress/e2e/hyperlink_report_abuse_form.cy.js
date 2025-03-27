import VerifyHyperlink from '../pages/hyperlink_report_abuse_elements.cy';
import FillFormPage_ReportAbuse from '../pages/fill_report_abuse_form.cy';
import '@shelex/cypress-allure-plugin';

describe('Report Abuse Section with Without Fill Violation Field', { testIsolation: false }, () => { //testIsolation: false mencegah Cypress melakukan reload page/reset state antar test
    const HyperlinkVerify = new VerifyHyperlink();
    const report_abuse_form = new FillFormPage_ReportAbuse();

before(() => {
    cy.visit('https://forms.office.com/pages/responsepage.aspx?id=is2XW8LLaEmfFhLKD9VwE9lpKmxdveNGmMWKETZvAWNUMzhBV1lYTlc1SDNRS00xRVg4OFhPODlQTS4u');
        });

        it('As a user, I want to click on the "Laporkan Penyalahgunaan" hyperlink', () => {

            HyperlinkVerify.VerifyHyperlink_laporkan_penyalahgunaan();
            cy.wait(2000);
        });


        it('As a user, I able to see Detail Elements Inside on "Laporkan Penyalahgunaan" ', () => {

            HyperlinkVerify.Hyperlink_laporkan_penyalahgunaan_detail_elements();
        });

        it('As a user, I able to fill on "Laporkan Penyalahgunaan" form without fill on Violation field', () => {

            report_abuse_form.fillFormReportAbuse_blank_violation_field();
        });
});

describe('Report Abuse Section with Without Fill Comment Field', { testIsolation: false }, () => { //testIsolation: false mencegah Cypress melakukan reload page/reset state antar test
    const HyperlinkVerify = new VerifyHyperlink();
    const report_abuse_form = new FillFormPage_ReportAbuse();

before(() => {
    cy.visit('https://forms.office.com/pages/responsepage.aspx?id=is2XW8LLaEmfFhLKD9VwE9lpKmxdveNGmMWKETZvAWNUMzhBV1lYTlc1SDNRS00xRVg4OFhPODlQTS4u');
        });

        it('As a user, I want to click on the "Laporkan Penyalahgunaan" hyperlink', () => {

            HyperlinkVerify.VerifyHyperlink_laporkan_penyalahgunaan();
            cy.wait(2000);
        });

        it('As a user, I able to send on report "Laporkan Penyalahgunaan" form without fill on comment field', () => {

            report_abuse_form.fillFormReportAbuse_blank_comments_field();
        });
});

describe('Report Abuse Section without Fill All Field', { testIsolation: false }, () => { //testIsolation: false mencegah Cypress melakukan reload page/reset state antar test
    const HyperlinkVerify = new VerifyHyperlink();
    const report_abuse_form = new FillFormPage_ReportAbuse();

before(() => {
    cy.visit('https://forms.office.com/pages/responsepage.aspx?id=is2XW8LLaEmfFhLKD9VwE9lpKmxdveNGmMWKETZvAWNUMzhBV1lYTlc1SDNRS00xRVg4OFhPODlQTS4u');
        });

        it('As a user, I want to click on the "Laporkan Penyalahgunaan" hyperlink', () => {

            HyperlinkVerify.VerifyHyperlink_laporkan_penyalahgunaan();
            cy.wait(2000);
        });

        it('As a user, I able to send on report "Laporkan Penyalahgunaan" form without fill on all field', () => {

            report_abuse_form.fillFormReportAbuse_allblank_field();
        });
});

describe('Report Abuse Section with fill Special Characters on Comment Field', { testIsolation: false }, () => { //testIsolation: false mencegah Cypress melakukan reload page/reset state antar test
    const HyperlinkVerify = new VerifyHyperlink();
    const report_abuse_form = new FillFormPage_ReportAbuse();

before(() => {
    cy.visit('https://forms.office.com/pages/responsepage.aspx?id=is2XW8LLaEmfFhLKD9VwE9lpKmxdveNGmMWKETZvAWNUMzhBV1lYTlc1SDNRS00xRVg4OFhPODlQTS4u');
        });

        it('As a user, I want to click on the "Laporkan Penyalahgunaan" hyperlink', () => {

            HyperlinkVerify.VerifyHyperlink_laporkan_penyalahgunaan();
            cy.wait(2000);
        });

        it('As a user, I able to send on report "Laporkan Penyalahgunaan" form without fill on all field', () => {

            report_abuse_form.fillFormReportAbuse_comment_field_with_specialchar();
        });
});