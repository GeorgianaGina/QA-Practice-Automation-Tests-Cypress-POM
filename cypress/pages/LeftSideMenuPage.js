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
}

export default new LeftSideMenuPage();