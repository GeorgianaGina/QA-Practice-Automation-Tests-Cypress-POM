class RecoverPasswordPage{
    getEmail(){
        return cy.get("#email");
    }
    getRecoverPasswordButton(){
        return cy.get("button").contains("Recover Password");
    }
}
export default new RecoverPasswordPage();