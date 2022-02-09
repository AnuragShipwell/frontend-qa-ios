class TenderComponent{
    constructor(driver){
        this.driver=driver;
    }
    async element(selector){
        return await this.driver.$(selector)
    }
    async clearTextButton(){
        return await this.element('-ios class chain:**/XCUIElementTypeButton[`label == \"Clear text\"`]')
    }
    async loadBoardTenderButton(){
        return await this.element('-ios class chain:**/XCUIElementTypeButton[`label == \"Tendered\"`]')
    }
    async loadBoardSearchField(){
        return await this.element('~Search Loads')
    }
    async lbTenderParentCard(){
        return await this.element('~LoadCardParent')
    }
    async lbTenderAcceptButton(){
        return await this.element('-ios class chain:**/XCUIElementTypeButton[`label == \"Accept\"`]')
    }
    async lbTenderRejectButton(){
        return await this.element('-ios class chain:**/XCUIElementTypeButton[`label == \"Reject\"`]')
    }
    async lbTenderIDText(){
        return await this.element('~Load ID')
    }
    async lbTenderLoadCardID(){
        return await this.element('~LoadCardId')
    }
    async lbTenderLoadTenderAmount(){
        return await this.element('~LoadCardTenderedAmount')
    }
    async lbTenderLoadPickupAddress(){
        return await this.element('~LoadCardAddressOne')
    }
    async lbTenderLoadPickupTime(){
        return await this.element('~LoadCardTimeOne')
    }
    async lbTenderLoadDeliveryAddress(){
        return await this.element('~LoadCardAddressTwo')
    }
    async lbTenderLoadDeliveryTime(){
        return await this.element('~LoadCardTimeTwo')
    }
    async lbTenderLoadAlertTitle(){
        return await this.element('~AlertTitle')
    }
    async lbTenderLoadAlertTitle(){
        return await this.element('~AlertTitle')
    }
    async lbTenderLoadAlertCancel(){
        return await this.element('~AlertCancel')
    }
    async lbTenderLoadAlertAccept(){
        return await this.element('~AlertConfirm')
    }

    async lbTenderLoadDetailsTitle(){
        return await this.element('~TenderDetailsTitle')
    }
    async lbTenderLoadDetailsChat(){
        return await this.element('~TenderDetailsChatBtn')
    }
    async lbTenderLoadDetailsMap(){
        return await this.element('-ios predicate string:type == \"XCUIElementTypeMap\"')
    }
    async lbTenderLoadDetaisPickUpCard(){
        return await this.element('-ios class chain:**/XCUIElementTypeCell[`name == \"LoadDetailsStopCell\"`][1]')
    }
    async lbTenderLoadDetailsDeliveryCard(){
        return await this.element('-ios class chain:**/XCUIElementTypeCell[`name == \"LoadDetailsStopCell\"`][2]')
    }
    async lbTenderLoadDetailstext(){
        return await this.element('~Load Details')
    }
    async lbTenderLoadChatTitle(){
        return await this.element('~MessagesTitle')
    }
    async lbTenderLoadChatInput(){
        return await this.element('~MessagesTextField')
    }
    async lbTenderLoadChatSend(){
        return await this.element('~Send')
    }
    async backButton(){
        return await this.element('-ios class chain:**/XCUIElementTypeButton[`label == \"back icon\"`]')
    }
    
    
    
    async tender(){
        const clearTextButton= await this.clearTextButton()
        const loadBoardTenderButton= await this.loadBoardTenderButton()
        const loadBoardSearchField= await this.loadBoardSearchField()
        const lbTenderParentCard= await this.lbTenderParentCard()
        const lbTenderAcceptButton= await this.lbTenderAcceptButton()
        const lbTenderRejectButton= await this.lbTenderRejectButton()
        const lbTenderIDText= await this.lbTenderIDText()
        const lbTenderLoadCardID= await this.lbTenderLoadCardID()
        const lbTenderLoadTenderAmount= await this.lbTenderLoadTenderAmount()
        const lbTenderLoadPickupAddress= await this.lbTenderLoadPickupAddress()
        const lbTenderLoadPickupTime= await this.lbTenderLoadPickupTime()
        const lbTenderLoadDeliveryAddress= await this.lbTenderLoadDeliveryAddress()
        const lbTenderLoadDeliveryTime= await this.lbTenderLoadDeliveryTime()
        const lbTenderLoadAlertTitle= await this.lbTenderLoadAlertTitle()
        const lbTenderLoadAlertCancel= await this.lbTenderLoadAlertCancel()
        const lbTenderLoadAlertAccept= await this.lbTenderLoadAlertAccept()
        
        const lbTenderLoadDetailsTitle= await this.lbTenderLoadDetailsTitle()
        const lbTenderLoadDetailsChat= await this.lbTenderLoadDetailsChat()
        const lbTenderLoadDetailsMap= await this.lbTenderLoadDetailsMap()
        const lbTenderLoadDetaisPickUpCard= await this.lbTenderLoadDetaisPickUpCard()
        const lbTenderLoadDetailsDeliveryCard= await this.lbTenderLoadDetailsDeliveryCard()
        const lbTenderLoadDetailstext= await this.lbTenderLoadDetailstext()
        const lbTenderLoadChatTitle= await this.lbTenderLoadChatTitle()
        const lbTenderLoadChatInput= await this.lbTenderLoadChatInput()
        const lbTenderLoadChatSend= await this.lbTenderLoadChatSend()
        const backButton= await this.backButton()
        
        await this.driver.pause(2000)
        if (await clearTextButton.isDisplayed()){
            await clearTextButton.touchAction('tap')
        }
        await loadBoardTenderButton.waitForDisplayed({ timeout: 5000 })
        await loadBoardTenderButton.waitForEnabled({ timeout: 5000 })
        await loadBoardTenderButton.touchAction('tap')
        await this.driver.pause(2000)
        await loadBoardSearchField.touchAction('tap')
        await loadBoardSearchField.setValue('LIDAWYQFA')

        await lbTenderParentCard.waitForExist({ timeout: 5000 })
        await lbTenderParentCard.waitForDisplayed({ timeout: 5000 })
        await lbTenderAcceptButton.waitForDisplayed({ timeout: 5000 })
        await lbTenderAcceptButton.waitForEnabled({ timeout: 5000 })
        await lbTenderRejectButton.waitForDisplayed({ timeout: 5000 })
        await lbTenderRejectButton.waitForEnabled({ timeout: 5000 })
        await lbTenderIDText.waitForExist({ timeout: 5000 })
        await lbTenderIDText.waitForDisplayed({ timeout: 5000 })
        await lbTenderLoadCardID.waitForExist({ timeout: 5000 })
        await lbTenderLoadCardID.waitForDisplayed({ timeout: 5000 })
        await lbTenderLoadTenderAmount.waitForExist({ timeout: 5000 })
        await lbTenderLoadTenderAmount.waitForDisplayed({ timeout: 5000 })
        await lbTenderLoadPickupAddress.waitForExist({ timeout: 5000 })
        await lbTenderLoadPickupAddress.waitForDisplayed({ timeout: 5000 })
        await lbTenderLoadPickupTime.waitForExist({ timeout: 5000 })
        await lbTenderLoadPickupTime.waitForDisplayed({ timeout: 5000 })
        await lbTenderLoadDeliveryAddress.waitForExist({ timeout: 5000 })
        await lbTenderLoadDeliveryAddress.waitForDisplayed({ timeout: 5000 })
        await lbTenderLoadDeliveryTime.waitForExist({ timeout: 5000 })
        await lbTenderLoadDeliveryTime.waitForDisplayed({ timeout: 5000 })

        await lbTenderAcceptButton.touchAction('tap')
        await lbTenderLoadAlertTitle.waitForExist({ timeout: 5000 })
        await lbTenderLoadAlertTitle.waitForDisplayed({ timeout: 5000 })
        await lbTenderLoadAlertAccept.waitForExist({ timeout: 5000 })
        await lbTenderLoadAlertAccept.waitForDisplayed({ timeout: 5000 })
        await lbTenderLoadAlertCancel.waitForExist({ timeout: 5000 })
        await lbTenderLoadAlertCancel.waitForDisplayed({ timeout: 5000 })
        await lbTenderLoadAlertCancel.touchAction('tap')

        await lbTenderLoadCardID.waitForDisplayed({ timeout: 5000 })
        await lbTenderLoadCardID.waitForEnabled({ timeout: 5000 })
        await lbTenderLoadCardID.touchAction('tap')
        await lbTenderLoadDetailsTitle.waitForDisplayed({ timeout: 5000 })
        await lbTenderLoadDetailsChat.waitForDisplayed({ timeout: 5000 })
        await lbTenderLoadDetailsMap.waitForDisplayed({ timeout: 10000 })

        await this.driver.touchPerform([
            {action: "longPress", options: {x: 162, y: 662}},
            { action: 'wait', options: { ms: 100 }},
            {action: "moveTo", options: {x: 162, y: 296}},
            {action: "release"},
        ])
        await lbTenderLoadDetaisPickUpCard.waitForExist({ timeout: 5000 })
        await lbTenderLoadDetaisPickUpCard.waitForDisplayed({ timeout: 5000 })

        await lbTenderLoadDetailsDeliveryCard.waitForExist({ timeout: 5000 })
        await lbTenderLoadDetailsDeliveryCard.waitForDisplayed({ timeout: 5000 })

        await this.driver.touchPerform([
            {action: "longPress", options: {x: 162, y: 662}},
            { action: 'wait', options: { ms: 100 }},
            {action: "moveTo", options: {x: 162, y: 296}},
            {action: "release"},
        ])

        await lbTenderLoadDetailstext.waitForExist({ timeout: 5000 })
        await lbTenderLoadDetailstext.waitForDisplayed({ timeout: 5000 })

        await lbTenderAcceptButton.touchAction('tap')
        await lbTenderLoadAlertTitle.waitForExist({ timeout: 5000 })
        await lbTenderLoadAlertTitle.waitForDisplayed({ timeout: 5000 })
        await lbTenderLoadAlertAccept.waitForExist({ timeout: 5000 })
        await lbTenderLoadAlertAccept.waitForDisplayed({ timeout: 5000 })
        await lbTenderLoadAlertCancel.waitForExist({ timeout: 5000 })
        await lbTenderLoadAlertCancel.waitForDisplayed({ timeout: 5000 })
        await lbTenderLoadAlertCancel.touchAction('tap')

        await lbTenderLoadDetailsChat.waitForDisplayed({ timeout: 5000 })
        await lbTenderLoadDetailsChat.waitForEnabled({ timeout: 5000 })
        await lbTenderLoadDetailsChat.touchAction('tap')

        await lbTenderLoadChatTitle.waitForExist({ timeout: 5000 })
        await lbTenderLoadChatTitle.waitForDisplayed({ timeout: 5000 })
        await lbTenderLoadChatInput.waitForExist({ timeout: 5000 })
        await lbTenderLoadChatInput.waitForDisplayed({ timeout: 5000 })
        await lbTenderLoadChatSend.waitForExist({ timeout: 5000 })
        await lbTenderLoadChatSend.waitForDisplayed({ timeout: 5000 })
        await backButton.touchAction('tap')

        await backButton.waitForDisplayed({ timeout: 5000 })
        await backButton.waitForEnabled({ timeout: 5000 })
        await backButton.touchAction('tap')
}

}
export default TenderComponent;