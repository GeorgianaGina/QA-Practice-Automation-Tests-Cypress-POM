class SwitchToANewBrowserwindowPage{

    getSubmitButton(){
        return cy.get('button').contains('Press me - New Window').click();
    }
}
export default new SwitchToANewBrowserwindowPage();