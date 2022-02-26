class ChatPage{
    constructor(driver){
        this.driver=driver;
    }
    async element(selector){
        return await this.driver.$(selector)
    }
    async quickActionChat(){
        return await this.element('-ios class chain:**/XCUIElementTypeButton[`label == \"ic singleChat\"`][1]')
    }
    async chatButton(){
        return await this.element('~ic singleChat')
    }
    async loadChatButton(){
        return await this.element('~LoadDetailsChatBtn')
    }
    async shipperCompassAllOpenTitle(){
        return await this.element('-ios class chain:**/XCUIElementTypeStaticText[`label == \"ALL OPEN\"`]')
    }
    //async quickActionChatTitle(){
      //  return await this.element('-ios class chain:**/XCUIElementTypeStaticText[`label == \"Shipment S4AU6R\"`]')
    //}
    //async quickActionChatTitle1(){
      //  return await this.element('-ios class chain:**/XCUIElementTypeStaticText[`label == \"Shipment 5RUCFH\"`]')
    //}
    async loadTitle(){
        return await this.element('~LoadDetailsTitle')
    }
    async quickActionChatInput(){
        return await this.element('~MessagesTextField')
    }
    async quickActionChatSendButton(){
        return await this.element('~Send')
    }
    async messageBackButton(){
        return await this.element('~MessagesBackBtn')
    }
    async loadDetailBackButton(){
        return await this.element('~LoadDetailsBackBtn')
    }
    async chat(){
        const shipperCompassAllOpenTitle= await this.shipperCompassAllOpenTitle()
        const chatButton= await this.chatButton()
        const quickActionChat= await this.quickActionChat()
        //const quickActionChatTitle= await this.quickActionChatTitle()
        //const quickActionChatTitle1= await this.quickActionChatTitle1()
        const loadTitle= await this.loadTitle()
        const quickActionChatInput= await this.quickActionChatInput()
        const quickActionChatSendButton= await this.quickActionChatSendButton()
        const messageBackButton= await this.messageBackButton()
        const loadChatButton= await this.loadChatButton()
        const loadDetailBackButton= await this.loadDetailBackButton()
        await this.driver.pause(2000)
        if (await shipperCompassAllOpenTitle.isDisplayed()){
            await quickActionChat.touchAction('tap')
        }
        //if (await quickActionChatTitle.isDisplayed()){
          //  await chatButton.touchAction('tap')
        //}
        else{
            await loadChatButton.touchAction('tap')
        }
        await quickActionChatInput.waitForDisplayed({ timeout: 5000 })
        await quickActionChatInput.touchAction('tap')
        await quickActionChatInput.setValue("Testing")

        await quickActionChatSendButton.waitForDisplayed({ timeout: 5000 })
        await quickActionChatSendButton.touchAction('tap')

        await messageBackButton.waitForDisplayed({ timeout: 5000 })
        await messageBackButton.touchAction('tap')
        await this.driver.pause(1000)

        if (await loadTitle.isDisplayed()){
            await loadDetailBackButton.touchAction('tap')
        }
        await this.driver.pause(1000)
    }
}

export default ChatPage;