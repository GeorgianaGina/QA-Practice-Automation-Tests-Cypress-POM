class SwitchToANewBrowserTabPage{

    getSubmitButton(){
        return cy.get('button').contains('Press me - New Tab').click();
    }
}
export default new SwitchToANewBrowserTabPage();