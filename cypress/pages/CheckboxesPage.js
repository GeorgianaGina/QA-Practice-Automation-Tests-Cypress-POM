class CheckboxesPage {
  getCheckMeOut1() {
    return cy.get("#checkbox1");
  }
  getCheckMeOut2() {
    return cy.get("#checkbox2");
  }
  getCheckMeOut3() {
    return cy.get("#checkbox3");
  }
  getResetButton() {
    return cy.get("button").contains("Reset");
  }
}
export default new CheckboxesPage();
