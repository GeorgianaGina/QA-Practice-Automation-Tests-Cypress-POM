class LeftSideMenuPage {
  getForms() {
    return cy.get("#forms");
  }

  getFileUpload() {
    return cy.get("#file-upload-item");
  }

  getLoginFormLink() {
    return cy.get('a[href="login.html"]');
  }
  getRegisterFormLink(){
    return cy.get("#register");
  }
  getRecoverPasswordFormLink(){
    return cy.get("#recover-password");
  }
  getButtons(){
    return cy.get("a[href='#pageSubmenu']");
  }
  getCheckboxesLink(){
    return cy.get("a[href='checkboxes.html']");
  }
  getRadioButtonsLink(){
    return cy.get("#radio-buttons");
  }
  getNewTabWindow(){
    return cy.get("a[href='#browserSubmenu']");
  }
  getNewBrowserLink(){
    return cy.get("a[href='tab.html']");
  }
}

export default new LeftSideMenuPage();