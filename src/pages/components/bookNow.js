import touchAction from "webdriverio/build/commands/browser/touchAction";

class BookNow{
    constructor(driver){
        this.driver=driver;
    }
    async element(selector){
        return await this.driver.$(selector)
    }
    async clearTextButton(){
        return await this.element('-ios class chain:**/XCUIElementTypeButton[`label == \"Clear text\"`]')
    }
    async loadBoardSearchField(){
        return await this.element('~Search Loads')
    }
    async lbBookNowLoadCard(){
        return await this.element('~LoadCardParent')
    }
    async lbBookNowLoadCard(){
        return await this.element('~LoadCardParent')
    }
    async lbBookNowLoadCardLoadText(){
        return await this.element('~Load:')
    }
    async lbBookNowLoadCardLoadID(){
        return await this.element('~LoadCardId')
    }
    async lbBookNowLoadCardpickupCount(){
        return await this.element('~LoadCardPickUpCount')
    }
    async lbBookNowLoadCardDeliveryCount(){
        return await this.element('~LoadCardDeliveryCount')
    }
    async lbBookNowLoadCardEquipment(){
        return await this.element('~LoadCardEquipment')
    }
    async lbBookNowLoadCardMiles(){
        return await this.element('~LoadCardMiles')
    }
    async lbBookNowLoadCardWeight(){
        return await this.element('~LoadCardWeight')
    }
    async lbBookNowLoadCardLowestBid(){
        return await this.element('~LoadCardLowestBid')
    }
    async lbBookNowLoadCardBookNowAmount(){
        return await this.element('~LoadCardBookNowAmount')
    }
    async lbBookNowLoadCardPickUpAddress(){
        return await this.element('~LoadCardAddressOne')
    }
    async lbBookNowLoadCardDropOffAddress(){
        return await this.element('~LoadCardAddressTwo')
    }
    async lbBookNowLoadCardPlaceBidButton(){
        return await this.element('~LoadCardPlaceBidBtn')
    }
    async lbBookNowLoadCardBookNowButton(){
        return await this.element('~LoadCardBookNowBtn')
    }
    async lbBookNowLoadDetailsTitle(){
        return await this.element('~LoadDetailsTitle')
    }
    async lbBookNowLoadDetailsChatButton(){
        return await this.element('~LoadDetailsChatBtn')
    }
    async lbBookNowLoadDetailsChatInput(){
        return await this.element('~MessagesTextField')
    }
    async lbBookNowLoadDetailsChatSend(){
        return await this.element('~Send')
    }
    async messageBackButton(){
        return await this.element('~MessagesBackBtn')
    }
    async messageBackButton(){
        return await this.element('~MessagesBackBtn')
    }
    async lbBookNowLoadDetailsPlaceBidButton(){
        return await this.element('~LoadDetailsPlaceBid')
    }
    async lbBookNowLoadDetailsLowestBid(){
        return await this.element('~LoadDetailsLowestBid')
    }
    async lbBookNowLoadDetailsBookNowButton(){
        return await this.element('-ios class chain:**/XCUIElementTypeButton[`label == \"Book Now\"`]')
    }
    async lbBookNowLoadDetailsMap(){
        return await this.element("-ios predicate string:type == \"XCUIElementTypeMap\"")
    }
    async lbBookNowLoadDetailsPickUpCard(){
        return await this.element("-ios class chain:**/XCUIElementTypeCell[`name == \"LoadDetailsStopCell\"`][1]")
    }
    async lbBookNowLoadDetailsDeliveryCard(){
        return await this.element("-ios class chain:**/XCUIElementTypeCell[`name == \"LoadDetailsStopCell\"`][2]")
    }
    async lbBookNowLoadDetailsText(){
        return await this.element("~LoadDetailsCardTitle")
    }
    async lbBookNowLoadDetailsStatus(){
        return await this.element("~LoadDetailsCardStatus")
    }
    async backButton(){
        return await this.element("~LoadDetailsBackBtn")
    }
    async bookNowTitle(){
        return await this.element("~BookNowTitle")
    }
    async bookNowSubTitle(){
        return await this.element("~BookNowSubTitle")
    }
    async bookNowAreYouSure(){
        return await this.element("~BookNowAreYouSure")
    }
    async bookNowPickUpAddress(){
        return await this.element("~BookNowAddressOne")
    }
    async bookNowDeliveryAddress(){
        return await this.element("~BookNowAddressTwo")
    }
    async bookNowMode(){
        return await this.element("~BookNowMode")
    }
    async bookNowEquipment(){
        return await this.element("~BookNowEquipment")
    }
    async bookNowTotalStops(){
        return await this.element("~BookNowTotalStops")
    }
    async bookNowTotalMiles(){
        return await this.element("~BookNowMiles")
    }
    async bookNowTotalWeight(){
        return await this.element("~BookNowTotalWeight")
    }
    async bookNowCancelButton(){
        return await this.element("~BookNowCancelBtn")
    }
    async bookNowBookBtn(){
        return await this.element("~BookNowBookBtn")
    }

    async bookNow(){
        const clearTextButton= await this.clearTextButton()
        const loadBoardSearchField= await this.loadBoardSearchField()
        const lbBookNowLoadCard= await this.lbBookNowLoadCard()
        const lbBookNowLoadCardLoadText= await this.lbBookNowLoadCardLoadText()
        const lbBookNowLoadCardLoadID= await this.lbBookNowLoadCardLoadID()
        const lbBookNowLoadCardpickupCount= await this.lbBookNowLoadCardpickupCount()
        const lbBookNowLoadCardDeliveryCount= await this.lbBookNowLoadCardDeliveryCount()
        const lbBookNowLoadCardEquipment= await this.lbBookNowLoadCardEquipment()
        const lbBookNowLoadCardMiles= await this.lbBookNowLoadCardMiles()
        const lbBookNowLoadCardWeight= await this.lbBookNowLoadCardWeight()
        const lbBookNowLoadCardLowestBid= await this.lbBookNowLoadCardLowestBid()
        const lbBookNowLoadCardBookNowAmount= await this.lbBookNowLoadCardBookNowAmount()
        const lbBookNowLoadCardPickUpAddress= await this.lbBookNowLoadCardPickUpAddress()
        const lbBookNowLoadCardDropOffAddress= await this.lbBookNowLoadCardDropOffAddress()
        const lbBookNowLoadCardPlaceBidButton= await this.lbBookNowLoadCardPlaceBidButton()
        const lbBookNowLoadCardBookNowButton= await this.lbBookNowLoadCardBookNowButton()
        const lbBookNowLoadDetailsTitle= await this.lbBookNowLoadDetailsTitle()
        const lbBookNowLoadDetailsChatButton= await this.lbBookNowLoadDetailsChatButton()
        const lbBookNowLoadDetailsChatInput= await this.lbBookNowLoadDetailsChatInput()
        const lbBookNowLoadDetailsChatSend= await this.lbBookNowLoadDetailsChatSend()
        const messageBackButton= await this.messageBackButton()
        const lbBookNowLoadDetailsPlaceBidButton= await this.lbBookNowLoadDetailsPlaceBidButton()
        const lbBookNowLoadDetailsLowestBid= await this.lbBookNowLoadDetailsLowestBid()
        const lbBookNowLoadDetailsBookNowButton= await this.lbBookNowLoadDetailsBookNowButton()
        const lbBookNowLoadDetailsMap= await this.lbBookNowLoadDetailsMap()
        const lbBookNowLoadDetailsPickUpCard= await this.lbBookNowLoadDetailsPickUpCard()
        const lbBookNowLoadDetailsDeliveryCard= await this.lbBookNowLoadDetailsDeliveryCard()
        const lbBookNowLoadDetailsText= await this.lbBookNowLoadDetailsText()
        const lbBookNowLoadDetailsStatus= await this.lbBookNowLoadDetailsStatus()
        const backButton= await this.backButton()
        
        const bookNowTitle= await this.bookNowTitle()
        const bookNowSubTitle= await this.bookNowSubTitle()
        const bookNowAreYouSure= await this.bookNowAreYouSure()
        const bookNowPickUpAddress= await this.bookNowPickUpAddress()
        const bookNowDeliveryAddress= await this.bookNowDeliveryAddress()
        const bookNowMode= await this.bookNowMode()
        const bookNowEquipment= await this.bookNowEquipment()
        const bookNowTotalStops= await this.bookNowTotalStops()
        const bookNowTotalMiles= await this.bookNowTotalMiles()
        const bookNowTotalWeight= await this.bookNowTotalWeight()
        const bookNowCancelButton= await this.bookNowCancelButton()
        const bookNowBookBtn= await this.bookNowBookBtn()
        
        await this.driver.pause(4000)
        if (await clearTextButton.waitForDisplayed()==true ){
            await clearTextButton.touchAction('tap')
            await this.driver.pause(4000)
        }
        await loadBoardSearchField.touchAction('tap')
        await loadBoardSearchField.setValue('LIDPPFACX')

        await lbBookNowLoadCardLoadID.waitForDisplayed({ timeout: 5000 })
        await lbBookNowLoadCard.waitForDisplayed({ timeout: 5000 })
        await lbBookNowLoadCardLoadText.waitForDisplayed({ timeout: 5000 })
        await lbBookNowLoadCardpickupCount.waitForDisplayed({ timeout: 5000 })
        await lbBookNowLoadCardDeliveryCount.waitForDisplayed({ timeout: 5000 })
        await lbBookNowLoadCardEquipment.waitForDisplayed({ timeout: 5000 })
        await lbBookNowLoadCardMiles.waitForDisplayed({ timeout: 5000 })
        await lbBookNowLoadCardWeight.waitForDisplayed({ timeout: 5000 })
        await lbBookNowLoadCardLowestBid.waitForDisplayed({ timeout: 5000 })
        await lbBookNowLoadCardBookNowAmount.waitForDisplayed({ timeout: 5000 })
        await lbBookNowLoadCardPickUpAddress.waitForDisplayed({ timeout: 5000 })
        await lbBookNowLoadCardDropOffAddress.waitForDisplayed({ timeout: 5000 })
        await lbBookNowLoadCardPlaceBidButton.waitForDisplayed({ timeout: 5000 })
        await lbBookNowLoadCardBookNowButton.waitForDisplayed({ timeout: 5000 })

        await lbBookNowLoadCardLoadID.touchAction('tap')
        await lbBookNowLoadDetailsTitle.waitForDisplayed({ timeout: 5000 })
        await lbBookNowLoadDetailsChatButton.waitForDisplayed({ timeout: 5000 })
        
        await lbBookNowLoadDetailsChatButton.touchAction('tap')
        await lbBookNowLoadDetailsChatInput.waitForDisplayed({ timeout: 5000 })
        await lbBookNowLoadDetailsChatSend.waitForDisplayed({ timeout: 5000 })
        await messageBackButton.waitForDisplayed({ timeout: 5000 })
        await messageBackButton.touchAction('tap')
        
        await lbBookNowLoadDetailsPlaceBidButton.waitForDisplayed({ timeout: 5000 })
        await lbBookNowLoadDetailsLowestBid.waitForDisplayed({ timeout: 5000 })
        await lbBookNowLoadDetailsBookNowButton.waitForDisplayed({ timeout: 5000 })
        await lbBookNowLoadDetailsMap.waitForDisplayed({ timeout: 5000 })

        await this.driver.touchPerform([
            {action: "longPress", options: {x: 162, y: 662}},
            { action: 'wait', options: { ms: 100 }},
            {action: "moveTo", options: {x: 162, y: 296}},
            {action: "release"},
        ])
        await lbBookNowLoadDetailsPickUpCard.waitForDisplayed({ timeout: 5000 })
        await lbBookNowLoadDetailsDeliveryCard.waitForDisplayed({ timeout: 5000 })
        await lbBookNowLoadDetailsText.waitForDisplayed({ timeout: 5000 })
        await lbBookNowLoadDetailsStatus.waitForDisplayed({ timeout: 5000 })

        await this.driver.touchPerform([
            {action: "longPress", options: {x: 162, y: 662}},
            { action: 'wait', options: { ms: 100 }},
            {action: "moveTo", options: {x: 162, y: 296}},
            {action: "release"},
        ])
        await lbBookNowLoadDetailsBookNowButton.touchAction('tap')
        await bookNowTitle.waitForDisplayed({ timeout: 5000 })
        await bookNowSubTitle.waitForDisplayed({ timeout: 5000 })
        await bookNowAreYouSure.waitForDisplayed({ timeout: 5000 })
        await bookNowPickUpAddress.waitForDisplayed({ timeout: 5000 })
        await bookNowDeliveryAddress.waitForDisplayed({ timeout: 5000 })
        await bookNowMode.waitForDisplayed({ timeout: 5000 })
        await bookNowEquipment.waitForDisplayed({ timeout: 5000 })
        await bookNowTotalStops.waitForDisplayed({ timeout: 5000 })
        await bookNowTotalMiles.waitForDisplayed({ timeout: 5000 })
        await bookNowTotalWeight.waitForDisplayed({ timeout: 5000 })
        await bookNowBookBtn.waitForDisplayed({ timeout: 5000 })
        await bookNowCancelButton.waitForDisplayed({ timeout: 5000 })
        await bookNowCancelButton.touchAction('tap')
        
        await backButton.touchAction('tap')
}


}
export default BookNow;