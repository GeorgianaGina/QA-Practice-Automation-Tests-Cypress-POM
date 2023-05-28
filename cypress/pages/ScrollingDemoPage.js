class ScrollingDemoPage{

    getScrollToButtom(){
        return cy.scrollTo('bottom');
    }
}
export default new ScrollingDemoPage();