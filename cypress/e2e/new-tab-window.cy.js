/// <reference types = "cypress" />
import LeftSideMenuPage from "../pages/LeftSideMenuPage";
import SwitchToANewBrowserTabPage from "../pages/SwitchToANewBrowserTabPage";

describe("New tab/window test suite", () => {
  beforeEach(() => {
    cy.visit("https://qa-practice.netlify.app");
  });

  it("New browser tab test", () => {
    LeftSideMenuPage.getNewTabWindow().click();
    LeftSideMenuPage.getNewBrowserLink().click();
    SwitchToANewBrowserTabPage.getSubmitButton();
  });
});
