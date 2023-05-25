import LeftSideMenuPage from "../pages/LeftSideMenuPage";
import LoginPage from "../pages/LoginPage";
// -- This is a parent command --
Cypress.Commands.add("login", (email, password) => {
  LeftSideMenuPage.getForms().click();
  LeftSideMenuPage.getLoginFormLink().click();
  LoginPage.getEmail().type(email);
  LoginPage.getPassword().type(password);
  LoginPage.getSubmitButton().click();
});


//Cypress.Commands.add("numeComandaNoastra", (parametrii, parametrii) => {
//   logica test
// });


// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
