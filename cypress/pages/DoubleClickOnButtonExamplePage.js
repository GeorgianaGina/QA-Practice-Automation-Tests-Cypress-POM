class DoubleClickOnButtonPage{

    getSubmitButton(){
        return cy.get('button').contains('Double click me').click();
    }
}
export default new DoubleClickOnButtonPage();