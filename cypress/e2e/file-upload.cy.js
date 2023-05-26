/// <reference types = "cypress" />
import LeftSideMenuPage from "../pages/LeftSideMenuPage";
import FileUploadPage from "../pages/FileUploadPage";

describe("File upload test suite", () => {
  beforeEach(() => {
    cy.visit("https://qa-practice.netlify.app");
  });
  it("File upload test", () => {
    const fileName = "logo.PNG";
    
    LeftSideMenuPage.getFileUpload().click();
    FileUploadPage.getChoseFile().selectFile("cypress/fixtures/" + fileName);
    FileUploadPage.getSubmitButton().click();
    cy.contains(`You have successfully uploaded "${fileName}"`).should(
      "be.visible"
    );
  });
});
