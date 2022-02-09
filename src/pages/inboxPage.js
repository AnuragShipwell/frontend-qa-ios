class InboxPage{
    constructor(driver){
        this.driver=driver;
    }
    async element(selector){
        return await this.driver.$(selector)
    }
    async hamburgerButton(){
        return await this.element('-ios class chain:**/XCUIElementTypeButton[`label == \"menu hamburger\"`]') //===========//
    }
    async inboxText(){
        return await this.element('-ios class chain:**/XCUIElementTypeOther[`name == \"Inbox\"`]')
    }
    async inboxMessages(){
        return await this.element('-ios class chain:**/XCUIElementTypeTable[`name == \"SWSideMenuController-table\"`]/XCUIElementTypeCell[1]/XCUIElementTypeOther/XCUIElementTypeOther')
    }
    async inboxNotification(){
        return await this.element('-ios class chain:**/XCUIElementTypeTable[`name == \"SWSideMenuController-table\"`]/XCUIElementTypeCell[2]/XCUIElementTypeOther/XCUIElementTypeOther')
    }
    async inboxMessagesTitle(){
      return await this.element('-ios class chain:**/XCUIElementTypeStaticText[`label == \"Messages\"`]')
    }
    async inboxMessageTop(){
        return await this.element('-ios class chain:**/XCUIElementTypeCell[`name == \"ShipmentMessagesCardParentView\"`][1]')
    }
    async inboxMessageBottom(){
        return await this.element('-ios class chain:**/XCUIElementTypeCell[`name == \"ShipmentMessagesCardParentView\"`][7]')
    }
    async inboxNotificationsTitle(){
        return await this.element('//XCUIElementTypeStaticText[@name=\"LoadBoardListTitle\"]')
    }
    async newShipmentTopNotification(){
        return await this.element("-ios class chain:**/XCUIElementTypeOther[`name == \"SWNotificationsViewController\"`]/XCUIElementTypeTable/XCUIElementTypeCell[1]/XCUIElementTypeOther[1]")
    }
    async newShipmentButtomNotification(){
        return await this.element("-ios class chain:**/XCUIElementTypeOther[`name == \"SWNotificationsViewController\"`]/XCUIElementTypeTable/XCUIElementTypeCell[1]/XCUIElementTypeOther[3]")
    }
    async notificationReadtext(){
        return await this.element("~ic read document")
    }
    async notificationUnReadtext(){
        return await this.element("~ic unread notification")
    }
    async redDotNotification(){
        return await this.element("-ios class chain:**/XCUIElementTypeOther[`name == \"SWNotificationsViewController\"`]/XCUIElementTypeTable/XCUIElementTypeCell[1]/XCUIElementTypeOther[3]")
    }
    async inbox(){
        const hamburgerButton= await this.hamburgerButton()
        const inboxText= await this.inboxText()
        const inboxMessages= await this.inboxMessages()
        const inboxMessagesTitle= await this.inboxMessagesTitle()
        const inboxNotification= await this.inboxNotification()
        const inboxMessageTop= await this.inboxMessageTop()
        const inboxMessageBottom= await this.inboxMessageBottom()
        const inboxNotificationsTitle= await this.inboxNotificationsTitle()
        const newShipmentTopNotification= await this.newShipmentTopNotification()
        const newShipmentButtomNotification= await this.newShipmentButtomNotification()
        const notificationReadtext= await this.notificationReadtext()
        const notificationUnReadtext= await this.notificationUnReadtext()
        const redDotNotification= await this.redDotNotification()
        await this.driver.pause(2000)
        if (await hamburgerButton.isDisplayed()){
            await hamburgerButton.touchAction('tap')
        }
        await inboxText.waitForEnabled({ timeout: 5000 })
        await inboxText.touchAction('tap')

        //Checking Inbox >> Messages
        await inboxMessages.waitForEnabled({ timeout: 5000 })
        await inboxMessages.touchAction('tap')

        await inboxMessagesTitle.waitForDisplayed({ timeout: 5000 })
        await inboxMessageTop.waitForDisplayed({ timeout: 5000 })
        await inboxMessageBottom.waitForDisplayed({ timeout: 5000 })
        await hamburgerButton.touchAction('tap')

        //Checking Inbox >> Notification
        await inboxNotification.waitForEnabled({ timeout: 5000 })
        await inboxNotification.touchAction('tap')

        await inboxNotificationsTitle.waitForDisplayed({ timeout: 5000 })
        await newShipmentTopNotification.waitForDisplayed({ timeout: 5000 })
        await newShipmentButtomNotification.waitForDisplayed({ timeout: 5000 })

        if(await redDotNotification.isDisplayed()){
            await this.driver.touchPerform([
            {action: "longPress", options: {x: 48, y: 150}},
            { action: 'wait', options: { ms: 100 }},
            {action: "moveTo", options: {x: 122, y: 150}},
            {action: "release"},
        ])
            await notificationReadtext.waitForDisplayed({ timeout: 5000 })
            await notificationReadtext.waitForEnabled({ timeout: 5000 })
            await notificationReadtext.touchAction('tap')

            await this.driver.touchPerform([
                {action: "longPress", options: {x: 80, y: 150}},
                { action: 'wait', options: { ms: 100 }},
                {action: "moveTo", options: {x: -26, y: 156}},
                {action: "release"},
            ])
            await notificationUnReadtext.waitForDisplayed({ timeout: 5000 })
            await notificationUnReadtext.waitForEnabled({ timeout: 5000 })
            await notificationUnReadtext.touchAction('tap')

        }
        else{
            await this.driver.touchPerform([
                {action: "longPress", options: {x: 80, y: 150}},
                { action: 'wait', options: { ms: 100 }},
                {action: "moveTo", options: {x: -26, y: 156}},
                {action: "release"},
            ])
            await notificationUnReadtext.waitForDisplayed({ timeout: 5000 })
            await notificationUnReadtext.waitForEnabled({ timeout: 5000 })
            await notificationUnReadtext.touchAction('tap')

            await this.driver.touchPerform([
                {action: "longPress", options: {x: 48, y: 150}},
                { action: 'wait', options: { ms: 100 }},
                {action: "moveTo", options: {x: 122, y: 150}},
                {action: "release"},
            ])
            await notificationReadtext.waitForDisplayed({ timeout: 5000 })
            await notificationReadtext.waitForEnabled({ timeout: 5000 })
            await notificationReadtext.touchAction('tap')
       
        }
    }



}
export default InboxPage