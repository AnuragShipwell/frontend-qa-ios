class InternalNotesPage{
    constructor(driver){
        this.driver=driver;
    }
    async element(selector){
        return await this.driver.$(selector)
    }
    async quickActionInternalNotes(){
        return await this.element('-ios class chain:**/XCUIElementTypeButton[`label == \"ic internal notes default\"`][1]')
    }
    async quickActionInternalNotesTitle(){
        return await this.element('~Internal Notes')
    }
    //async quickActionInternalNotesShipID(){
      //  return await this.element('-ios class chain:**/XCUIElementTypeStaticText[`label == \"Shipment S4AU6R\"`]')
    //}
    //async quickActionInternalNotesAddress(){
      //  return await this.element('-ios class chain:**/XCUIElementTypeStaticText[`label == \"Austin, TX > Las Vegas, NV\"`]')
    //}
    async quickActionChatInput(){
        return await this.element('~MessagesTextField')
    }
    async quickActionChatSendButton(){
        return await this.element('~Send')
    }
    async backIcon(){
        return await this.element('~back icon')
    }
    async shipwellSpinner(){
        return await this.element('~ShipwellSpinner')
    }
    async doneButton(){
        return await this.element("~done")
    }

    async shipmentInternalNotes(timeOut=35000){
        const quickActionInternalNotes= await this.quickActionInternalNotes()
        const quickActionInternalNotesTitle= await this.quickActionInternalNotesTitle()
        //const quickActionInternalNotesShipID= await this.quickActionInternalNotesShipID()
        //const quickActionInternalNotesAddress= await this.quickActionInternalNotesAddress()
        const quickActionChatInput= await this.quickActionChatInput()
        const quickActionChatSendButton= await this.quickActionChatSendButton()
        const backIcon= await this.backIcon()
        const shipwellSpinner= await this.shipwellSpinner()
        const doneButton= await this.doneButton()
        
        await this.driver.pause(1000)
        await quickActionInternalNotes.waitForDisplayed({ timeout: timeOut })
        await quickActionInternalNotes.touchAction('tap')
        await this.driver.pause(2000)
        await quickActionInternalNotesTitle.waitForDisplayed({ timeout: timeOut })
        //await quickActionInternalNotesShipID.waitForDisplayed({ timeout: 5000 })
        //await quickActionInternalNotesAddress.waitForDisplayed({ timeout: 5000 })
        
        await quickActionChatInput.waitForDisplayed({ timeout: timeOut })
        await this.driver.pause(2000)
        await quickActionChatInput.touchAction('tap')
        await quickActionChatInput.setValue('Testing')
        await this.driver.hideKeyboard()

        await quickActionChatSendButton.waitForDisplayed({ timeout: timeOut })
        await quickActionChatSendButton.touchAction('tap')
        await this.driver.pause(1000)
        if (await shipwellSpinner.isDisplayed()){
            await shipwellSpinner.waitForDisplayed({timeout: 35000, reverse: true})
        }
        else{
            await this.driver.pause(3000)
        }
        await backIcon.waitForDisplayed({ timeout: timeOut })
        await backIcon.touchAction('tap')
        await this.driver.pause(1000)
        if (await shipwellSpinner.isDisplayed()){
            await shipwellSpinner.waitForDisplayed({timeout: 35000, reverse: true})
        }
        else{
            await this.driver.pause(3000)
        }
        await backIcon.waitForDisplayed({ timeout: timeOut })
        await backIcon.touchAction('tap')
        await this.driver.pause(1000)
        if (await shipwellSpinner.isDisplayed()){
            await shipwellSpinner.waitForDisplayed({timeout: 25000, reverse: true})
        }
        await this.driver.pause(2000)
    
    }

}
export default InternalNotesPage