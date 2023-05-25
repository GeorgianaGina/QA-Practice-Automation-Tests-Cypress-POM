import { faker } from '@faker-js/faker';
import LeftSideMenuPage from '../pages/LeftSideMenuPage';
import RegisterPage from '../pages/RegisterPage';

describe("User auth test suite", () => {
  beforeEach(() => {
    cy.visit("https://qa-practice.netlify.app");
  });

  it("Login with valid creds", () => {
    // cy.get("#forms").click();
    // cy.get('a[href="login.html"]').click();
    // cy.get("#email").type("admin@admin.com");
    // cy.get("#password").type("admin123");
    // cy.get("#submitLoginBtn").click();
    cy.login('admin@admin.com', 'admin123');
    cy.get("#message").should("be.visible");
    cy.get("#message").should(
      "contain",
      "admin@admin.com, you have successfully logged in!"
    );

    cy.contains("admin@admin.com, you have successfully logged in!").should(
      "be.visible"
    );
  });

  it("Login with invalid creds", () => {
    cy.login('admin@admin.com', 'parola gresita');
    cy.get("#message").should("be.visible");
    cy.get("#message").should(
      "contain",
      "Bad credentials! Please try again! Make sure that you've registered."
    );

    cy.contains(
      "Bad credentials! Please try again! Make sure that you've registered."
    ).should("be.visible");
  });

  it("Register user test", () => {
    LeftSideMenuPage.getForms().click();
    LeftSideMenuPage.getRegisterFormLink().click();
    RegisterPage.getFirstName().type("Georgiana");
    RegisterPage.getLastName().type("Barsan");
    RegisterPage.getPhoneNumber().type("0747263823");
    RegisterPage.getSelectCuntry("Albania");
    RegisterPage.getEmail().type("georgiana96@gmail.com");
    RegisterPage.getPassword().type("Georgiana123");
    RegisterPage.getTermsAndCondsCheckbox().click();
    RegisterPage.getRegisterButton().click();
    cy.contains("The account has been successfully created!").should(
      "be.visible"
    );
  });

  it("Register user with random creds test", () => {
    const randomLastName = faker.person.lastName();

    LeftSideMenuPage.getForms().click();
    cy.get("#register").click();
    cy.get("#firstName").clear().type(faker.person.firstName());
    cy.get("#lastName").type(randomLastName);
    cy.get("#phone").type("0747263823");
    cy.get("select").select("Albania");
    cy.get('input[type="email"]').type(randomLastName+"."+ faker.internet.email());
    cy.get('input[type="password"]').type("Georgiana123");
    cy.get("#exampleCheck1").click();
    cy.get("button").contains("Register").click();
    cy.contains("The account has been successfully created!").should(
      "be.visible"
    );
  });
});
