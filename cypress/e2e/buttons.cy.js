/// <reference types = "cypress" />
import LeftSideMenuPage from "../pages/LeftSideMenuPage";
import CheckboxesPage from "../pages/CheckboxesPage";
import RadioButtonsPage from "../pages/RadioButtonsPage";

describe("Buttons test suite", () => {
  beforeEach(() => {
    cy.visit("https://qa-practice.netlify.app");
  });

  it("Checkboxes test", () => {
    LeftSideMenuPage.getButtons().click();
    LeftSideMenuPage.getCheckboxesLink().click();
    CheckboxesPage.getCheckMeOut1().click().should("be.checked");
    CheckboxesPage.getCheckMeOut2().click().should("be.checked");
    CheckboxesPage.getCheckMeOut3().click().should("be.checked");
    CheckboxesPage.getResetButton().click();
    cy.get(":checkbox").uncheck();
  });

  it("Radio buttons test", () => {
    LeftSideMenuPage.getButtons().click();
    LeftSideMenuPage.getRadioButtonsLink().click();
    RadioButtonsPage.getRadioButton1().click().should("be.checked");
    RadioButtonsPage.getRadioButton2().click().should("be.checked");
    RadioButtonsPage.getRadioButton3().click().should("be.checked");
  });
});
