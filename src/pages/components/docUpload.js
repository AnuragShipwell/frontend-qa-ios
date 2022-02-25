class DocUploadPage{
    constructor(driver){
        this.driver=driver;
    }
    async element(selector){
        return await this.driver.$(selector)
    }
    async quickActionDocument(){
        return await this.element('-ios class chain:**/XCUIElementTypeButton[`label == \"ic documents new\"`][1]')
    }
    async documentUploadButton(){
        return await this.element('~ic documents new')
    }
    async shipperCompassAllOpenTitle(){
        return await this.element('-ios class chain:**/XCUIElementTypeStaticText[`label == \"ALL OPEN\"`]')
    }
    async watchedShipmentTitle(){
        return await this.element('-ios class chain:**/XCUIElementTypeStaticText[`label == \"Watched Shipment\"`]')
    }
    async shipDocumentTitle(){
        return await this.element('~AllDocumentsTitle')
    }
    async shipUploadDocumentText(){
        return await this.element('~Upload Document')
    }
    async shipUploadDocumentButton(){
        return await this.element('~AllDocumentsUploadBtn')
    }
    async camera(){
        return await this.element('~Camera')
    }
    async photoLibrary(){
        return await this.element('~Photo Library')
    }
    async photo(){
        return await this.element('~Photo, March 30, 2018, 2:14 PM')
    }
    async chooseButton(){
        return await this.element('~Choose')
    }
    async documentPreviewTitle(){
        return await this.element('~Document Preview')
    }
    async imagePreview(){
        return await this.element('-ios class chain:**/XCUIElementTypeOther[`name == \"SWSideMenuContainerController\"`]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeImage')
    }
    async nextButton(){
        return await this.element('~Next')
    }
    async documentInfoTitle(){
        return await this.element('~Document Info')
    }
    async documentInfoImagePreview(){
        return await this.element('-ios class chain:**/XCUIElementTypeOther[`name == \"SWSideMenuContainerController\"`]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeScrollView/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]/XCUIElementTypeImage')
    }
    async documentInfoDocumentType(){
        return await this.element('-ios class chain:**/XCUIElementTypeOther[`name == \"SWSideMenuContainerController\"`]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeScrollView/XCUIElementTypeOther[1]/XCUIElementTypeTextField')
    }
    async documentInfoDescription(){
        return await this.element('~Description:')
    }
    async doneButton(){
        return await this.element('~Done')
    }
    async documentInfoSaveButton(){
        return await this.element('~Save')
    }
    async successModalSuccessText(){
        return await this.element('~Success')
    }
    async successModalOkSavebutton(){
        return await this.element('~OK')
    }
    async saveImagePreview(){
        return await this.element('-ios class chain:**/XCUIElementTypeOther[`name == \"SWSideMenuContainerController\"`]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeImage')
    }
    async backIcon(){
        return await this.element('~back icon')
    }
    async backIcon1(){
        return await this.element('~AllDocumentsBackBtn')
    }
    async shipmentDocumentUpload(){
        const documentUploadButton= await this.documentUploadButton()
        const shipperCompassAllOpenTitle= await this.shipperCompassAllOpenTitle()
        const quickActionDocument= await this.quickActionDocument()
        const shipDocumentTitle= await this.shipDocumentTitle()
        const shipUploadDocumentText= await this.shipUploadDocumentText()
        const shipUploadDocumentButton= await this.shipUploadDocumentButton()
        const camera= await this.camera()
        const photoLibrary= await this.photoLibrary()
        const photo= await this.photo()
        const chooseButton= await this.chooseButton()
        const documentPreviewTitle= await this.documentPreviewTitle()
        const imagePreview= await this.imagePreview()
        const nextButton= await this.nextButton()
        const documentInfoTitle= await this.documentInfoTitle()
        const documentInfoImagePreview= await this.documentInfoImagePreview()
        const documentInfoDocumentType= await this.documentInfoDocumentType()
        const documentInfoDescription= await this.documentInfoDescription()
        const doneButton= await this.doneButton()
        const documentInfoSaveButton= await this.documentInfoSaveButton()
        const successModalOkSavebutton= await this.successModalOkSavebutton()
        const saveImagePreview= await this.saveImagePreview()
        const backIcon= await this.backIcon()
        let backIcon1= await this.backIcon1()

        if (await shipperCompassAllOpenTitle.isDisplayed()){
            await quickActionDocument.touchAction('tap')
        }
        else{
            await documentUploadButton.touchAction('tap')
            backIcon1=backIcon;
        }
        await shipDocumentTitle.waitForDisplayed({ timeout: 5000 })
        await shipUploadDocumentText.waitForDisplayed({ timeout: 5000 })
        
        await shipUploadDocumentButton.waitForDisplayed({ timeout: 5000 })
        await shipUploadDocumentButton.touchAction('tap')

        await camera.waitForDisplayed({ timeout: 5000 })

        await photoLibrary.waitForDisplayed({ timeout: 5000 })
        await photoLibrary.touchAction('tap')
        await photo.waitForDisplayed({ timeout: 5000 })
        await photo.touchAction('tap')
        await chooseButton.waitForDisplayed({ timeout: 5000 })
        await chooseButton.touchAction('tap')
        if (chooseButton.isDisplayed()){
            await chooseButton.touchAction('tap')
        }
        await this.driver.pause(1000)
        await documentPreviewTitle.waitForDisplayed({ timeout: 5000 })
        await imagePreview.waitForDisplayed({ timeout: 5000 })
        
        await nextButton.waitForDisplayed({ timeout: 5000 })
        await nextButton.touchAction('tap')
        
        await documentInfoTitle.waitForDisplayed({ timeout: 5000 })
        await documentInfoImagePreview.waitForDisplayed({ timeout: 5000 })
       
        await documentInfoDocumentType.waitForDisplayed({ timeout: 5000 })
        await documentInfoDocumentType.touchAction('tap')
        await documentInfoDocumentType.setValue("Proof of Delivery (POD)")

        await documentInfoDescription.waitForDisplayed({ timeout: 5000 })
        await documentInfoDescription.touchAction('tap')
        await documentInfoDescription.setValue('Testing')

        if (await doneButton.isDisplayed()){
            await doneButton.touchAction("tap")
        }
        await documentInfoSaveButton.waitForDisplayed({ timeout: 5000 })
        await documentInfoSaveButton.touchAction('tap')

        await successModalOkSavebutton.waitForDisplayed({ timeout: 10000 })
        await successModalOkSavebutton.touchAction('tap')
        
        await documentPreviewTitle.waitForDisplayed({ timeout: 5000 })
        await saveImagePreview.waitForDisplayed({ timeout: 5000 })
        await this.driver.pause(3000)
        
        await backIcon.waitForDisplayed({ timeout: 5000 })
        await backIcon.touchAction('tap')
        
        await backIcon1.waitForDisplayed({ timeout: 5000 })
        await backIcon1.touchAction('tap')
        await this.driver.pause(1000)
}
}
export default DocUploadPage;