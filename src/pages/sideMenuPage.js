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
        return await this.element('-ios class chain:**/XCUIElementTypeStaticText[`label == \"Shipwell Inc.\"`]')
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
        return await this.element('-ios class chain:**/XCUIElementTypeTable[`name == \"SWSideMenuController-table\"`]/XCUIElementTypeCell[1]/XCUIElementTypeOther/XCUIElementTypeOther')
    }
    async shipmentDeliveredButton(){
        return await this.element('-ios class chain:**/XCUIElementTypeTable[`name == \"SWSideMenuController-table\"`]/XCUIElementTypeCell[2]/XCUIElementTypeOther/XCUIElementTypeOther')
    }
    async inboxMessagesButton(){
        return await this.element('~MESSAGES')
    }
    async inboxNotificationsButton(){
        return await this.element('~NOTIFICATIONS')
    }

    async sideMenu(){

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
    
    if (await hamburger.isDisplayed()){
        await hamburger.touchAction('tap')
    }
    
    await shipperText.waitForExist({ timeout: 5000 })
    await shipperName.waitForExist({ timeout: 5000 })
    await shipperCompanyName.waitForExist({ timeout: 5000 })
    await compassButton.waitForExist({ timeout: 5000 })
    await settingsButton.waitForExist({ timeout: 5000 })

    await shipmentButton.waitForEnabled({ timeout: 5000 })
    await shipmentButton.touchAction('tap')

    await shipmentActiveButton.waitForDisplayed({ timeout: 5000 })
    await shipmentDeliveredButton.waitForDisplayed({ timeout: 5000 })

    await inboxButton.waitForEnabled({ timeout: 5000 })
    await inboxButton.touchAction('tap')

    await inboxMessagesButton.waitForDisplayed({ timeout: 5000 })
    await inboxNotificationsButton1.waitForDisplayed({ timeout: 5000 })
}

}

export default SideMenuPage;