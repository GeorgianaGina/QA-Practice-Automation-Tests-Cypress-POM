class FileUploadPage{
    getChoseFile(){
        return cy.get('#file_upload');
    }
    
    getSubmitButton(){
        return cy.get('button').contains('Submit').click();
    }
}
export default new FileUploadPage();