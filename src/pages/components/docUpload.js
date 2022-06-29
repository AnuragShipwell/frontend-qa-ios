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
    //async photo(){
        //return await this.element('~Photo, March 30, 2018, 2:14 PM')
    //}
    async photo(){
        return await this.element('//XCUIElementTypeImage[2]')
    }
    async chooseButton(){
        return await this.element('~Choose')
    }
    async documentPreviewTitle(){
        return await this.element('~Document Preview')
    }
    async imagePreview(){
        return await this.element('//XCUIElementTypeImage')
    }
    async nextButton(){
        return await this.element('~Next')
    }
    async documentInfoTitle(){
        return await this.element('~Document Info')
    }
    async documentInfoImagePreview(){
        return await this.element('//XCUIElementTypeImage')
    }
    async documentInfoDocumentType(){
        return await this.element('//XCUIElementTypeTextField')
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
        return await this.element('~SuccessModalConfirmBtn')
    }
    async saveImagePreview(){
        return await this.element('//XCUIElementTypeImage')
    }
    async backIcon(){
        return await this.element('~back icon')
    }
    async backIcon1(){
        return await this.element('~AllDocumentsBackBtn')
    }
    async testback(){
        return await this.element('~AllDocumentsBackBtn')
    }
    async cancelButton(){
        return await this.element('~Cancel')
    } 
    async shipwellSpinner(){
        return await this.element('~ShipwellSpinner')
    }
    async pickerWhell(){
        return await this.element('//XCUIElementTypePickerWheel')
    }
    
    async shipmentDocumentUpload(timeOut=35000){
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
        const cancelButton= await this.cancelButton()
        const shipwellSpinner= await this.shipwellSpinner()
        const testback= await this.testback()
        const pickerWhell= await this.pickerWhell()

        await this.driver.pause(1000)
        if (await shipperCompassAllOpenTitle.isDisplayed()){
            await quickActionDocument.touchAction('tap')
        }
        else{
            await documentUploadButton.touchAction('tap')
            backIcon1=backIcon;
        }


        await this.driver.pause(3000)
        await shipDocumentTitle.waitForDisplayed({ timeout: timeOut })
        await shipUploadDocumentText.waitForDisplayed({ timeout: timeOut })
        
        await shipUploadDocumentButton.waitForDisplayed({ timeout: timeOut })
        await shipUploadDocumentButton.touchAction('tap')

        await camera.waitForDisplayed({ timeout: timeOut })
        await this.driver.pause(1000)
        await photoLibrary.waitForDisplayed({ timeout: timeOut })
        await photoLibrary.touchAction('tap')
        await this.driver.pause(2000)
        if (await photo.isDisplayed()){
            await photo.touchAction('tap')
            await this.driver.pause(2000)
            await chooseButton.waitForDisplayed({ timeout: timeOut })
            await chooseButton.touchAction('tap')
            await this.driver.pause(1000)
            if (await chooseButton.isDisplayed()){
                await chooseButton.touchAction('tap')
            }
            await this.driver.pause(2000)
            await documentPreviewTitle.waitForDisplayed({ timeout: timeOut })
            await imagePreview.waitForDisplayed({ timeout: timeOut })
        
            await nextButton.waitForDisplayed({ timeout: timeOut })
            await nextButton.touchAction('tap')
        
            await documentInfoTitle.waitForDisplayed({ timeout: timeOut })
            await documentInfoImagePreview.waitForDisplayed({ timeout: timeOut })
       
            await documentInfoDocumentType.waitForDisplayed({ timeout: timeOut })
            await documentInfoDocumentType.touchAction('tap')
            await pickerWhell.waitForDisplayed({ timeout: timeOut })
            await pickerWhell.addValue("Proof of Delivery (POD)")

            await documentInfoDescription.waitForDisplayed({ timeout: timeOut })
            //await documentInfoDescription.touchAction('tap')
            await documentInfoDescription.setValue('Testing')

            if (await doneButton.isDisplayed()){
                await doneButton.touchAction("tap")
            }
            await documentInfoSaveButton.waitForDisplayed({ timeout: timeOut })
            await documentInfoSaveButton.touchAction('tap')
            await this.driver.pause(1000)
            if (await shipwellSpinner.isDisplayed()){
                await shipwellSpinner.waitForDisplayed({timeout: timeOut, reverse: true})
            }
            else{
                await this.driver.pause(3000)
            }
            await this.driver.pause(3000)
            await successModalOkSavebutton.waitForDisplayed({ timeout: timeOut })
            await successModalOkSavebutton.touchAction('tap')
            await this.driver.pause(1000)
            await documentPreviewTitle.waitForDisplayed({ timeout: timeOut })
            await saveImagePreview.waitForDisplayed({ timeout: timeOut })
            await this.driver.pause(1000)
            if (await shipwellSpinner.isDisplayed()){
                await shipwellSpinner.waitForDisplayed({timeout: timeOut, reverse: true})
            }
        
            await backIcon.waitForDisplayed({ timeout: timeOut })
            await backIcon.touchAction('tap')
            await this.driver.pause(1000)
            if (await shipwellSpinner.isDisplayed()){
                await shipwellSpinner.waitForDisplayed({timeout: timeOut, reverse: true})
            }
            else{
                await this.driver.pause(3000)
            }
            await backIcon1.waitForDisplayed({ timeout: timeOut })
            await backIcon1.touchAction('tap')
            await this.driver.pause(1000)
            if (await shipwellSpinner.isDisplayed()){
                await shipwellSpinner.waitForDisplayed({timeout: timeOut, reverse: true})
            }
            await this.driver.pause(5000)
        }
        else{
            await cancelButton.waitForDisplayed({ timeout: timeOut })
            await cancelButton.touchAction('tap')
            await testback.waitForDisplayed({ timeout: timeOut })
            await testback.touchAction('tap')
            await this.driver.pause(1000)
            if (await shipwellSpinner.isDisplayed()){
                await shipwellSpinner.waitForDisplayed({timeout: 25000, reverse: true})
            }


        }
        
}
}
export default DocUploadPage;