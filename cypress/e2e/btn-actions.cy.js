/// <reference types = "cypress" />
import LeftSideMenuPage from "../pages/LeftSideMenuPage";
import DoubleClickOnButtonExamplePage from "../pages/DoubleClickOnButtonExamplePage";
import ScrollingDemoPage from "../pages/ScrollingDemoPage";

describe("Btn actions test suite", () => {
  beforeEach(() => {
    cy.visit("https://qa-practice.netlify.app");
  });

  it("Double click btn test", () => {
    LeftSideMenuPage.getBtnActions().click();
    LeftSideMenuPage.getDoubleClickBtnLink().click();
    DoubleClickOnButtonExamplePage.getSubmitButton().click();
    DoubleClickOnButtonExamplePage.getSubmitButton().click();
  });

  it("Scrolling test", () => {
    LeftSideMenuPage.getScrollingLink().click({force: true});
    ScrollingDemoPage.getScrollToButtom();
    cy.contains("THE END").should("be.visible");
  });
});
