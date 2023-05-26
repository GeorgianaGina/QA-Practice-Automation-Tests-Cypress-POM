class RadioButttonsPage {
  getRadioButton1() {
    return cy.get("#radio-button1");
  }
  getRadioButton2() {
    return cy.get("#radio-button2");
  }
  getRadioButton3() {
    return cy.get("#radio-button3");
  }
}
export default new RadioButttonsPage();
