class RegisterPage {
  getFirstName() {
    return cy.get("#firstName");
  }
  getLastName() {
    return cy.get("#lastName");
  }
  getPhoneNumber() {
    return cy.get("#lastName");
  }
  getSelectCuntry(countryName) {
    return cy.get("select").select(countryName);
  }
  getEmail() {
    return cy.get('input[type="email"]');
  }
  getPassword() {
    return cy.get('input[type="password"]');
  }
  getTermsAndCondsCheckbox() {
    return cy.get("#exampleCheck1");
  }
  getRegisterButton() {
    return cy.get("button").contains("Register");
  }
}
export default new RegisterPage();
