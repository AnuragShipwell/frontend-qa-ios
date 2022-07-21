class SideMenuPage{
    constructor(driver){
        this.driver=driver;
    }
    async element(selector){
        return await this.driver.$(selector)
    }
    async hamburger(){
        return await this.element('~menu hamburger')
    }
    async shipperText(){
        return await this.element('~Shipper')
    }
    async shipperName(){
        return await this.element('~Anurag Gogoi')
    }
    async shipperCompanyName(){
        return await this.element('-ios class chain:**/XCUIElementTypeStaticText[`label == \"Shipwell, Inc.\"`]')
    }
    async compassButton(){
        return await this.element('-ios class chain:**/XCUIElementTypeOther[`name == \"Compass\"`]')
    }
    async shipmentButton(){
        return await this.element('-ios class chain:**/XCUIElementTypeStaticText[`label == \"Shipments\"`]')
    }
    async inboxButton(){
        return await this.element('-ios class chain:**/XCUIElementTypeOther[`name == \"Inbox\"`]')
    }
    async settingsButton(){
        return await this.element('-ios class chain:**/XCUIElementTypeStaticText[`label == \"Settings\"`]')
    }
    async shipmentActiveButton(){
        return await this.element('~ACTIVE')
    }
    async shipmentDeliveredButton(){
        return await this.element('~DELIVERED')
    }
    async inboxMessagesButton(){
        return await this.element('~MESSAGES')
    }
    async inboxNotificationsButton(){
        return await this.element('~NOTIFICATIONS')
    }

    async sideMenu(timeOut=60000){

    const hamburger= await this.hamburger()
    const shipperText= await this.shipperText()
    const shipperName= await this.shipperName()
    const shipperCompanyName= await this.shipperCompanyName()
    const compassButton= await this.compassButton()
    const shipmentButton= await this.shipmentButton()
    const inboxButton= await this.inboxButton()
    const settingsButton= await this.settingsButton()
    const shipmentActiveButton= await this.shipmentActiveButton()
    const shipmentDeliveredButton= await this.shipmentDeliveredButton()
    const inboxMessagesButton= await this.inboxMessagesButton()
    const inboxNotificationsButton1= await this.inboxNotificationsButton()
    
    await this.driver.pause(3000)
    if (await hamburger.isDisplayed()){
        await hamburger.touchAction('tap')
    }
    await this.driver.pause(2000)
    await shipperText.waitForDisplayed({ timeout: timeOut })
    await shipperName.waitForDisplayed({ timeout: timeOut })
    await shipperCompanyName.waitForDisplayed({ timeout: timeOut })
    await compassButton.waitForDisplayed({ timeout: timeOut })
    await settingsButton.waitForDisplayed({ timeout: timeOut })

    await shipmentButton.waitForDisplayed({ timeout: timeOut })
    //await shipmentButton.touchAction('tap')
    await this.driver.pause(2000)

    //await shipmentActiveButton.waitForDisplayed({ timeout: timeOut })
    //await shipmentDeliveredButton.waitForDisplayed({ timeout: timeOut })

    await inboxButton.waitForDisplayed({ timeout: timeOut })
    await inboxButton.touchAction('tap')
    await this.driver.pause(2000)

    await inboxMessagesButton.waitForDisplayed({ timeout: timeOut })
    await inboxNotificationsButton1.waitForDisplayed({ timeout: timeOut })
    await this.driver.pause(2000)
    await inboxButton.touchAction('tap')
    await this.driver.pause(3000)
}

}

export default SideMenuPage;