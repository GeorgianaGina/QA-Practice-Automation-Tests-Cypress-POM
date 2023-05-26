import LeftSideMenuPage from "../pages/LeftSideMenuPage";
import RecoverPasswordPage from "../pages/RecoverPasswordPage";
describe("User auth test suite", () => {
    beforeEach(() => {
      cy.visit("https://qa-practice.netlify.app");
    });
it("Recover password test", () => {

    LeftSideMenuPage.getForms().click();
    LeftSideMenuPage.getRecoverPasswordFormLink().click();
    RecoverPasswordPage.getEmail().type("admin@admin.com");
    RecoverPasswordPage.getRecoverPasswordButton().click();
    cy.contains("An email with the new password has been sent to admin@admin.com. Please verify your inbox!").should(
      "be.visible"
    );
  });
});