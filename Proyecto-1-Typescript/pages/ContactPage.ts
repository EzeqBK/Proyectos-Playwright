import { Locator, Page, expect} from "@playwright/test";


export default class Contact{
    
    readonly page: Page;
    readonly nameInput: Locator;
    readonly emailInput: Locator;
    readonly subjetInput: Locator;
    readonly messageHereInput: Locator;

    readonly fileUploadInput: Locator;

    readonly submitButton: Locator;
    readonly homeButton: Locator

    //constructor
    constructor(page:Page) {
        this.page= page;
        this.nameInput= page.getByPlaceholder('Name');
        this.emailInput= page.getByPlaceholder('Email', { exact: true });
        this.subjetInput= page.getByPlaceholder('Subject');
        this.messageHereInput= page.getByPlaceholder('Your Message Here');
        
        this.fileUploadInput= page.locator('input[name="upload_file"]')

        this.submitButton=page.getByRole('button', { name: 'Submit' });
        this.homeButton=page.locator("#form-section a");
    }



    async fillData(name:string, email:string, subjet:string, menssage:string){
        await this.nameInput.fill(name);
        await this.emailInput.fill(email);
        await this.subjetInput.fill(subjet);
        await this.messageHereInput.fill(menssage);
    }

    //subimos el archivo
    async uploadFile(filePath: string){
        await this.fileUploadInput.setInputFiles(filePath);
    }

    //Damos en submit y aceptamos el cartel que nos sale en el navegador
    async submitForm(){
        //generamos un lisener que es algo que espera que un evento sudeca
        //en este caso cuando aparece un cartel en el navegador
        this.page.on("dialog", dialog => dialog.accept());
        await this.submitButton.click();

    }






























}




