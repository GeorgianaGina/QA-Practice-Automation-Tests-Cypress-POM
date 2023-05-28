/// <reference types = "cypress" />
import LeftSideMenuPage from "../pages/LeftSideMenuPage";
import DoubleClickOnButtonExamplePage from "../pages/DoubleClickOnButtonExamplePage";
import ScrollingDemoPage from "../pages/ScrollingDemoPage";

describe("Btn actions test suite", () => {
  beforeEach(() => {
    cy.visit("https://qa-practice.netlify.app");
    LeftSideMenuPage.getBtnActions().click();
  });

  it("Double click btn test", () => {
    LeftSideMenuPage.getDoubleClickBtnLink().click();
    DoubleClickOnButtonExamplePage.getSubmitButton().dblclick();
    cy.contains("Congrats, you double clicked!").should("be.visible");
  });

  it("Scrolling test", () => {
    LeftSideMenuPage.getScrollingLink().click({ force: true });
    ScrollingDemoPage.getScrollToButtom();
    cy.contains("THE END").should("be.visible");
  });
});
