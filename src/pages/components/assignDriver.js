class AssignDriverComponent{
    constructor(driver){
        this.driver=driver;
    }
    async element(selector){
        return await this.driver.$(selector)
    }
    async clearTextButton(){
        return await this.element('-ios class chain:**/XCUIElementTypeButton[`label == \"Clear text\"`]')
    }
    async shipmentBoardSearchField(){
        return await this.element('~Search Shipments')
    }
    async shipmentcardDetails(){
        return await this.element('~ShipmentCardTitle')
    }
    async shipmentcardID(){
        return await this.element('~ShipmentCardId')
    }
    async shipmentcardAssignButton(){
        return await this.element('~ShipmentCardActionBtn')
    }

    async shipmentcardAssignDriverText(){
        return await this.element('~Assign Driver')
    }
    async shipmentcardAssignDriverPhNumber(){
        return await this.element('~assign-driver-number-text-field')
    }
    async shipmentcardMakeMeDriverButton(){
        return await this.element('~assign-make-me-driver-button')
    }
    async shipmentcardAssignEquipmentText(){
        return await this.element('~Assign Equipment')
    }
    async shipmentPowerUnitInput(){
        return await this.element('-ios class chain:**/XCUIElementTypeTextField[`label == \"enterEmail\"`][1]')
    }
    async shipmentTrailer(){
        return await this.element('-ios class chain:**/XCUIElementTypeTextField[`label == \"enterEmail\"`][2]')
    }
    async shipmentAssignDriverCancelButton(){
        return await this.element('-ios class chain:**/XCUIElementTypeButton[`label == \"Cancel\"`]')
    }
    async shipmentAssignDriverAssignButton(){
        return await this.element('-ios class chain:**/XCUIElementTypeButton[`label == \"Assign\"`]')
    }
    async backButton(){
        return await this.element('-ios class chain:**/XCUIElementTypeButton[`label == \"back icon\"`]')
    }
    async doneButton(){
        return await this.element('~Done')
    }


    async assignDriver(){
        const clearTextButton= await this.clearTextButton()
        const shipmentBoardSearchField= await this.shipmentBoardSearchField()
        const shipmentcardDetails= await this.shipmentcardDetails()
        const shipmentcardID= await this.shipmentcardID()
        const shipmentcardAssignButton= await this.shipmentcardAssignButton()

        const shipmentcardAssignDriverText= await this.shipmentcardAssignDriverText()
        const shipmentcardAssignDriverPhNumber= await this.shipmentcardAssignDriverPhNumber()
        const shipmentcardMakeMeDriverButton= await this.shipmentcardMakeMeDriverButton()
        const shipmentcardAssignEquipmentText= await this.shipmentcardAssignEquipmentText()
        const shipmentPowerUnitInput= await this.shipmentPowerUnitInput()
        const shipmentTrailer= await this.shipmentTrailer()
        const shipmentAssignDriverCancelButton= await this.shipmentAssignDriverCancelButton()
        const shipmentAssignDriverAssignButton= await this.shipmentAssignDriverAssignButton()
        const backButton= await this.backButton()
        const doneButton= await this.doneButton()

        await this.driver.pause(2000)
        await clearTextButton.waitForDisplayed({ timeout: 5000 })
        await clearTextButton.touchAction('tap')

        await shipmentBoardSearchField.waitForDisplayed({ timeout: 5000 })
        await shipmentBoardSearchField.touchAction('tap')
        await shipmentBoardSearchField.setValue('KPKC65')

        await shipmentcardDetails.waitForDisplayed({ timeout: 5000 })
        await shipmentcardID.waitForDisplayed({ timeout: 5000 })
        await shipmentcardAssignButton.waitForDisplayed({ timeout: 5000 })
        await shipmentcardAssignButton.touchAction('tap')

        await shipmentcardAssignDriverText.waitForDisplayed({ timeout: 5000 })
        await shipmentcardAssignDriverPhNumber.waitForDisplayed({ timeout: 5000 })
        await shipmentcardMakeMeDriverButton.waitForDisplayed({ timeout: 5000 })
        await shipmentcardAssignEquipmentText.waitForDisplayed({ timeout: 5000 })
        await shipmentPowerUnitInput.waitForDisplayed({ timeout: 5000 })
        await shipmentTrailer.waitForDisplayed({ timeout: 5000 })

        await shipmentcardAssignDriverPhNumber.setValue('5128064080')
        if(await doneButton.isDisplayed()){
            await doneButton.touchAction('tap')
        }
        await shipmentPowerUnitInput.touchAction('tap')
        await shipmentTrailer.setValue('FTL')
        if(await doneButton.isDisplayed()){
            await doneButton.touchAction('tap')
        }
        await shipmentAssignDriverCancelButton.waitForDisplayed({ timeout: 5000 })
        await shipmentAssignDriverAssignButton.waitForDisplayed({ timeout: 5000 })
        await backButton.waitForDisplayed({ timeout: 5000 })
        await backButton.touchAction('tap')


}



}
export default AssignDriverComponent;