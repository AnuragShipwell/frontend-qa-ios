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
        return await this.element('-ios class chain:**/XCUIElementTypeStaticText[`label == \"Internal Notes\"`]')
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

    async shipmentInternalNotes(){
        const quickActionInternalNotes= await this.quickActionInternalNotes()
        const quickActionInternalNotesTitle= await this.quickActionInternalNotesTitle()
        //const quickActionInternalNotesShipID= await this.quickActionInternalNotesShipID()
        //const quickActionInternalNotesAddress= await this.quickActionInternalNotesAddress()
        const quickActionChatInput= await this.quickActionChatInput()
        const quickActionChatSendButton= await this.quickActionChatSendButton()
        const backIcon= await this.backIcon()
        
        await quickActionInternalNotes.waitForDisplayed({ timeout: 10000 })
        await quickActionInternalNotes.touchAction('tap')
        
        await quickActionInternalNotesTitle.waitForDisplayed({ timeout: 5000 })
        //await quickActionInternalNotesShipID.waitForDisplayed({ timeout: 5000 })
        //await quickActionInternalNotesAddress.waitForDisplayed({ timeout: 5000 })
        
        await quickActionChatInput.waitForEnabled({ timeout: 5000 })
        await quickActionChatInput.touchAction('tap')
        await quickActionChatInput.setValue('Testing')

        await quickActionChatSendButton.waitForDisplayed({ timeout: 5000 })
        await quickActionChatSendButton.waitForEnabled({ timeout: 5000 })
        await quickActionChatSendButton.touchAction('tap')
        
        await backIcon.waitForDisplayed({ timeout: 5000 })
        await backIcon.waitForEnabled({ timeout: 5000 })
        await backIcon.touchAction('tap')
        
        await backIcon.waitForDisplayed({ timeout: 5000 })
        await backIcon.waitForEnabled({ timeout: 5000 })
        await backIcon.touchAction('tap')
    
    }

}
export default InternalNotesPage