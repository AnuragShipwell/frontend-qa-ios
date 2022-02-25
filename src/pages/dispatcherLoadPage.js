class LoadPage{
    constructor(driver){
        this.driver=driver;
    }
    async element(selector){
        return await this.driver.$(selector)
    }
    

    async loadBoardTitle(){
        return await this.element('-ios class chain:**/XCUIElementTypeStaticText[`label == \"Load Board\"`]')
    }   
    async loadBoardSearchField(){
        return await this.element('~Search Loads')
    }
    async loadBoardOpenButton(){
        return await this.element('-ios class chain:**/XCUIElementTypeButton[`label == \"Open\"`]')
    }
    async loadBoardBiddingButton(){
        return await this.element('-ios class chain:**/XCUIElementTypeButton[`label == \"Bidding\"`]')
    }
    async loadBoardTenderButton(){
        return await this.element('-ios class chain:**/XCUIElementTypeButton[`label == \"Tendered\"`]')
    }
    async loadBoardOpenShipment(){
        return await this.element('-ios class chain:**/XCUIElementTypeStaticText[`label == \"LIDW8U4ZM\"`]')
    }
    async loadBoardOpenShipmentPlaceBid(){
        return await this.element('-ios class chain:**/XCUIElementTypeButton[`label == \"Place Bid\"`]')
    }
    async mapPin1(){
        return await this.element('-ios class chain:**/XCUIElementTypeOther[`label == \"Map pin\"`][1]')
    }
    async mapPin2(){
        return await this.element('-ios class chain:**/XCUIElementTypeOther[`label == \"Map pin\"`][2]')
    }
    async swipeUpButton(){
        return await this.element('-ios class chain:**/XCUIElementTypeOther[`name == \"LoadDetailsViewController-swipeup\"`]')
    }
    async pickUpText(){
        return await this.element('-ios class chain:**/XCUIElementTypeStaticText[`label == \"Pickup\"`]')
    }
    async deliveryText(){
        return await this.element('-ios class chain:**/XCUIElementTypeStaticText[`label == \"Delivery\"`]')
    }
    async loadDetailsText(){
        return await this.element('-ios class chain:**/XCUIElementTypeStaticText[`label == \"Load Details\"`]')
    }
    async loadDetailsStatus(){
        return await this.element('-ios class chain:**/XCUIElementTypeStaticText[`label == \"Open\"`]')
    }
    async loadDetailsCustomerText(){
        return await this.element('-ios class chain:**/XCUIElementTypeStaticText[`label == \"Customer:\"`]')
    }
    async loadDetailsDistance(){
        return await this.element('-ios class chain:**/XCUIElementTypeStaticText[`label == \"Distance:\"`]')
    }
    async loadDetailsEquipment(){
        return await this.element('-ios class chain:**/XCUIElementTypeStaticText[`label == \"Equipment:\"`]')
    }
    async loadDetailsMode(){
        return await this.element('-ios class chain:**/XCUIElementTypeStaticText[`label == \"Mode:\"`]')
    }
    async loadDetailsTotalWeight(){
        return await this.element('-ios class chain:**/XCUIElementTypeStaticText[`label == \"Total Weight:\"`]')
    }
    async loadDetailsItem(){
        return await this.element('-ios class chain:**/XCUIElementTypeStaticText[`label == \"Items:\"`]')
    }
    async loadDetailsDeclaredValue(){
        return await this.element('-ios class chain:**/XCUIElementTypeStaticText[`label == \"Declared Value:\"`]')
    }
    async loadDetailsAccessorials(){
        return await this.element('-ios class chain:**/XCUIElementTypeStaticText[`label == \"Accessorials:\"`]')
    }
    async bidHistoryText(){
        return await this.element('-ios class chain:**/XCUIElementTypeStaticText[`label == \"Bid History\"`]')
    }

  async dispatcherLoad(){
  const loadBoardTitle= await this.loadBoardTitle()
  const loadBoardSearchField= await this.loadBoardSearchField()
  const loadBoardOpenButton= await this.loadBoardOpenButton()
  const loadBoardBiddingButton= await this.loadBoardBiddingButton()
  const loadBoardTenderButton= await this.loadBoardTenderButton()
  const loadBoardOpenShipment= await this.loadBoardOpenShipment()
  const loadBoardOpenShipmentPlaceBid= await this.loadBoardOpenShipmentPlaceBid()
  const mapPin1= await this.mapPin1()
  const mapPin2= await this.mapPin2()
  const swipeUpButton= await this.swipeUpButton()
  const pickUpText= await this.pickUpText()
  const deliveryText= await this.deliveryText()
  const loadDetailsText= await this.loadDetailsText()
  const loadDetailsStatus= await this.loadDetailsStatus()
  const loadDetailsCustomerText= await this.loadDetailsCustomerText()
  const loadDetailsDistance= await this.loadDetailsDistance()
  const loadDetailsEquipment= await this.loadDetailsEquipment()
  const loadDetailsMode= await this.loadDetailsMode()
  const loadDetailsTotalWeight= await this.loadDetailsTotalWeight()
  const loadDetailsItem= await this.loadDetailsItem()
  const loadDetailsDeclaredValue= await this.loadDetailsDeclaredValue()
  const loadDetailsAccessorials= await this.loadDetailsAccessorials()
  const bidHistoryText= await this.bidHistoryText()
  

  await this.driver.pause(2000)
  await loadBoardTitle.waitForDisplayed({ timeout: 5000 })
  await loadBoardBiddingButton.waitForDisplayed({ timeout: 5000 })
  await loadBoardBiddingButton.waitForEnabled({ timeout: 5000 })
  await loadBoardBiddingButton.touchAction('tap')
  await loadBoardTenderButton.waitForDisplayed({ timeout: 5000 })
  await loadBoardTenderButton.waitForEnabled({ timeout: 5000 })
  await loadBoardTenderButton.touchAction('tap')
  await loadBoardOpenButton.waitForDisplayed({ timeout: 5000 })
  await loadBoardOpenButton.waitForEnabled({ timeout: 5000 })
  await loadBoardOpenButton.touchAction('tap')
  await this.driver.pause(4000)
  
  
  
  //Searching for an open shipment
  await loadBoardSearchField.waitForDisplayed({ timeout: 5000 })
  await loadBoardSearchField.touchAction('tap')
  await loadBoardSearchField.setValue('LIDW8U4ZM')
  await loadBoardOpenShipment.waitForDisplayed({ timeout: 10000 })

  //Opening the shipment details page
  await loadBoardOpenShipment.touchAction('tap')
  await loadBoardOpenShipment.waitForDisplayed({ timeout: 5000 })
  await loadBoardOpenShipmentPlaceBid.waitForDisplayed({ timeout: 5000 })
  await mapPin1.waitForDisplayed({ timeout: 5000 })
  await mapPin2.waitForDisplayed({ timeout: 5000 })

  await swipeUpButton.waitForDisplayed({ timeout: 5000 })

  await this.driver.touchPerform([
    {action: "longPress", options: {x: 162, y: 662}},
    { action: 'wait', options: { ms: 100 }},
    {action: "moveTo", options: {x: 162, y: 122}},
    {action: "release"},
])
  await pickUpText.waitForDisplayed({ timeout: 5000 })
  await deliveryText.waitForDisplayed({ timeout: 5000 })
  await loadDetailsText.waitForDisplayed({ timeout: 5000 })
  await loadDetailsStatus.waitForDisplayed({ timeout: 5000 })
  await loadDetailsCustomerText.waitForDisplayed({ timeout: 5000 })
  await loadDetailsDistance.waitForDisplayed({ timeout: 5000 })
  await loadDetailsEquipment.waitForDisplayed({ timeout: 5000 })
  await loadDetailsMode.waitForDisplayed({ timeout: 5000 })
  await loadDetailsTotalWeight.waitForDisplayed({ timeout: 5000 })
  await loadDetailsItem.waitForDisplayed({ timeout: 5000 })

  await this.driver.touchPerform([
    {action: "longPress", options: {x: 31, y: 700}},
    { action: 'wait', options: { ms: 100 }},
    {action: "moveTo", options: {x: 31, y: 122}},
    {action: "release"},
])
await loadDetailsDeclaredValue.waitForDisplayed({ timeout: 5000 })
await loadDetailsAccessorials.waitForDisplayed({ timeout: 5000 })
await bidHistoryText.waitForDisplayed({ timeout: 5000 })

  }
}

export default LoadPage;