import pause from "webdriverio/build/commands/browser/pause";
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
    //async lbBookNowLoadCardLoadID(){
      //  return await this.element('~LoadCardId')
    //}
    async lbBookNowLoadCardLoadID(){
        return await this.element('(//XCUIElementTypeStaticText[@name="LoadCardId"])[2]')
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
    async shipwellSpinner(){
        return await this.element('~ShipwellSpinner')
    }
    async findMoreLoadButton(){
        return await this.element('~Find More Loads')
    }

    async bookNow(timeOut=60000){
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
        const shipwellSpinner= await this.shipwellSpinner()
        const findMoreLoadButton= await this.findMoreLoadButton()
       
        for (let i=0; i<40; i++){
            if (await lbBookNowLoadCardBookNowButton.isDisplayed()==false){
            
                await this.driver.touchPerform([
                {action: "longPress", options: {x: 33, y: 550}},
                {action: "moveTo", options: {x: 33, y: 300}},
                {action: "release"},
            ])
            await this.driver.pause(3000)
        }
            else{
                break;
            }
            
        }
        await lbBookNowLoadCardBookNowButton.waitForDisplayed({ timeout: timeOut })
        await lbBookNowLoadCardBookNowButton.touchAction('tap')
        await this.driver.pause(2000)

        await bookNowTitle.waitForDisplayed({ timeout: timeOut })
        await bookNowSubTitle.waitForDisplayed({ timeout: timeOut })
        await bookNowAreYouSure.waitForDisplayed({ timeout: timeOut })
        await bookNowPickUpAddress.waitForDisplayed({ timeout: timeOut })
        await bookNowDeliveryAddress.waitForDisplayed({ timeout: timeOut })
        await bookNowMode.waitForDisplayed({ timeout: timeOut })
        await bookNowEquipment.waitForDisplayed({ timeout: timeOut })
        await bookNowTotalStops.waitForDisplayed({ timeout: timeOut })
        await bookNowTotalMiles.waitForDisplayed({ timeout: timeOut })
        await bookNowTotalWeight.waitForDisplayed({ timeout: timeOut })
        await bookNowBookBtn.waitForDisplayed({ timeout: timeOut })
        await bookNowCancelButton.waitForDisplayed({ timeout: timeOut })
        await bookNowBookBtn.touchAction('tap')
        await this.driver.pause(1000)
        if (await shipwellSpinner.isDisplayed()){
            await shipwellSpinner.waitForDisplayed({timeout: timeOut, reverse: true})
        }
        await this.driver.pause(2000)
        await findMoreLoadButton.waitForDisplayed({ timeout: timeOut })
        await findMoreLoadButton.touchAction('tap')
        await this.driver.pause(1000)
        if (await shipwellSpinner.isDisplayed()){
            await shipwellSpinner.waitForDisplayed({timeout: timeOut, reverse: true})
        }
        await this.driver.pause(5000)
}


}
export default BookNow;