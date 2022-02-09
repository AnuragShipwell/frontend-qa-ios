class ShipperCompassPage{
    constructor(driver){
        this.driver=driver;
    }
    async element(selector){
        return await this.driver.$(selector)
    }
async shipperCompassViewTitle(){
    return await this.element('-ios class chain:**/XCUIElementTypeStaticText[`label == \"Compass\"`]')
}
async shipperCompassAllOpenlerts(){
    return await this.element('~ALL OPEN')
}
async shipperCompassAllOpenTitle(){
    return await this.element('-ios class chain:**/XCUIElementTypeStaticText[`label == \"ALL OPEN\"`]')
}
async shipperCompassViewResolvedAlerts(){
    return await this.element('~Resolved Alerts')
}
async shipperCompassViewResolvedTitle(){
    return await this.element('-ios class chain:**/XCUIElementTypeStaticText[`label == \"Resolved Alerts\"`]')
}
async shipperCompassViewRunningLateAlerts(){
    return await this.element('~Running Late')
}
async shipperCompassViewRunningLateTitle(){
    return await this.element('-ios class chain:**/XCUIElementTypeStaticText[`label == \"Running Late\"`]')
}
async shipperCompassViewWatchedShipmentAlerts(){
    return await this.element('~Watched Shipment')
}
async shipperCompassViewWatchedShipmentTitle(){
    return await this.element('-ios class chain:**/XCUIElementTypeStaticText[`label == \"Watched Shipment\"`]')
}
async shipperCompassViewLatePickupAlerts(){
    return await this.element('~Late Pickup')
}
async shipperCompassViewLatePickupTitle(){
    return await this.element('-ios class chain:**/XCUIElementTypeStaticText[`label == \"Late Pickup\"`]')
}
async shipperCompassViewCarrierStatusAlerts(){
    return await this.element('~Carrier Status')
}
async shipperCompassViewCarrierStatusTitle(){
    return await this.element('-ios class chain:**/XCUIElementTypeStaticText[`label == \"Carrier Status\"`]')
}
async shipperCompassViewLateDeliveryAlerts(){
    return await this.element("~Late Delivery")
}
async shipperCompassViewLateDeliveryTitle(){
    return await this.element('-ios class chain:**/XCUIElementTypeStaticText[`label == \"Late Delivery\"`]')
}
async shipperCompassViewNotTrackingAlerts(){
    return await this.element("~Not Tracking")
}
async shipperCompassViewNotTrackingTitle(){
    return await this.element('-ios class chain:**/XCUIElementTypeStaticText[`label == \"Not Tracking\"`]')
}
async shipperCompassViewCarrierNotAssignedAlerts(){
    return await this.element("~Carrier Not Assigned")
}
async shipperCompassViewCarrierNotAssignedCard(){
    return await this.element('-ios class chain:**/XCUIElementTypeStaticText[`label == \"Carrier Not Assigned \"`][1]')
}
async loadBoardListTitle(){
    return await this.element('~LoadBoardListTitle')
}
async stopDetailsTitle(){
    return await this.element('~StopDetailsTitle')
}
async compassActionButton(){
    return await this.element('~Actions')
}
async CNAshipmentPU(){
    return await this.element('-ios class chain:**/XCUIElementTypeOther[`name == \"SWSideMenuContainerController\"`]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeTable/XCUIElementTypeCell[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther')
}
async CNAPredictedMarketPrice(){
    return await this.element('-ios class chain:**/XCUIElementTypeOther[`name == \"SWSideMenuContainerController\"`]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeTable/XCUIElementTypeCell[2]')
}
async CNABidsAndTenders(){
    return await this.element('-ios class chain:**/XCUIElementTypeStaticText[`label == \"Bids and Tenders\"`]')
}
async CNARoutingGuides(){
    return await this.element('-ios class chain:**/XCUIElementTypeOther[`name == \"SWSideMenuContainerController\"`]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeTable/XCUIElementTypeCell[4]')
}
async CNAlogANewBidButton(){
    return await this.element('~Log a New Bid')
}
async CNArequestBid(){
    return await this.element('~Request Bids')
}
async CNAtenderToCarrier(){
    return await this.element('~Tender to Carrier(s)')
}
async CNApushToRoutingGuide(){
    return await this.element('~Push to Routing Guide')
}
async dismissButton(){
    return await this.element('~Dismiss')
}
async CNAnewBidTitle(){
    return await this.element('-ios class chain:**/XCUIElementTypeStaticText[`label == \"New Bid\"`]')
}
async CNAnewBidUSDOT_CarrierTag(){
    return await this.element('-ios class chain:**/XCUIElementTypeTextField[`label == \"enterEmail\"`][1]')
}
async CNAcarrierNameInput(){
    return await this.element('-ios class chain:**/XCUIElementTypeOther[`name == \"SWSideMenuContainerController\"`]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeScrollView/XCUIElementTypeOther[1]/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeOther[2]')
}
async CNAspecialInstruction(){
    return await this.element('(//XCUIElementTypeTextField[@name=\"enterEmail\"])[3]')
}
async CNAcarrierNameInputResult(){
    return await this.element('-ios class chain:**/XCUIElementTypeStaticText[`label == \"Anurag_Carrier001\"`]')
}
async CNAnewBidUSDOTSearchResult(){
    return await this.element('~BEST FREIGHT LOGISTICS LLC')
}
async CNAnewBidAvailableLocation(){
    return await this.element('-ios class chain:**/XCUIElementTypeTextField[`label == \"enterEmail\"`][6]')
}
async CNAnewBidAvailableLocationResult(){
    return await this.element('~Austin, TX 78701, US')
}
async CNAnewBidBidAmount(){
    return await this.element('-ios class chain:**/XCUIElementTypeTextField[`label == \"enterEmail\"`][7]')
}
async CNAbidDetailsText(){
    return await this.element('~Bid Details')
}
async CNAcarrierSearchText(){
    return await this.element('~Carrier Search')
}
async CNACancelButton(){
    return await this.element('-ios class chain:**/XCUIElementTypeButton[`label == \"Cancel\"`]')
}
async CNACreateButton(){
    return await this.element('-ios class chain:**/XCUIElementTypeButton[`label == \"Create\"`]')
}
async CNARoutingGuideTitle(){
    return await this.element('-ios class chain:**/XCUIElementTypeStaticText[`label == \"Push to Routing Guide\"`]')
}
async CNARoutingGuideInput(){
    return await this.element("~enterEmail")
}
async CNARoutingGuideResult(){
    return await this.element("~Test defaults")
}
async CNARequestBidTitle(){
    return await this.element('-ios class chain:**/XCUIElementTypeStaticText[`label == \"Request Bids\"`]')
}
async CNARequestBidCarrierTagResult(){
    return await this.element('~TestTag')
}
async CNARequestBidCarrierTagEmail(){
    return await this.element('~Test Carrier - Aydin Gus aydin+carrier@shipwell.com')
}
async CNARequestBidCarrierTagCloseButton1(){
    return await this.element('-ios class chain:**/XCUIElementTypeButton[`label == \"close icon white\"`][1]')
}
async CNARequestBidCarrierTagCloseButton2(){
    return await this.element('-ios class chain:**/XCUIElementTypeButton[`label == \"close icon white\"`][2]')
}





async CNATendersearchCarrierInputField(){
    return await this.element('-ios class chain:**/XCUIElementTypeTextField[`label == \"enterEmail\"`][5]')
}
async CNATenderCarrierSearchResultText(){
    return await this.element('~Anurag_Carrier001')
}
async CNATendermodeFeild(){
    return await this.element('-ios class chain:**/XCUIElementTypeTextField[`label == \"enterEmail\"`][6]')
}
async CNATenderEquipmentFeild(){
    return await this.element('-ios class chain:**/XCUIElementTypeTextField[`label == \"enterEmail\"`][7]')
}
async CNATenderRateFeild(){
    return await this.element('-ios class chain:**/XCUIElementTypeTextField[`label == \"enterEmail\"`][1]')
}

async shipwellSpinner(){
    return await this.element('~ShipwellSpinner')
}

async NTDriverSection(){
    return await this.element('-ios class chain:**/XCUIElementTypeStaticText[`label == \"Drivers\"`]')
}
async NTDriverCallButton(){
    return await this.element('~ic stop details contact')
}
async NTShipwellAppTrackingSection(){
    return await this.element('-ios class chain:**/XCUIElementTypeStaticText[`label == \"Shipwell App Tracking\"`]')
}
async NTStartAppTrackingButton(){
    return await this.element('-ios class chain:**/XCUIElementTypeButton[`label == \"Start App Tracking\"`]')
}
async NTRequestAppInstall(){
    return await this.element('-ios class chain:**/XCUIElementTypeButton[`label == \"Request App Install\"`]')
}
async NTEquipmentSection(){
    return await this.element('-ios class chain:**/XCUIElementTypeStaticText[`label == \"Equipment\"`]')
}
async NTDriverAndEquipmentHeader(){
    return await this.element('~Driver & Equipment')
}
async NTDriverPhoneNumberInput(){
    return await this.element('~assign-driver-number-text-field')
}
async NTdriverPhoneText(){
    return await this.element('-ios class chain:**/XCUIElementTypeStaticText[`label CONTAINS[c] \"Phone:\"`]')
}
async NTSelectPowerUnit(){
    return await this.element('-ios class chain:**/XCUIElementTypeOther[`name == \"SWSideMenuContainerController\"`]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeScrollView/XCUIElementTypeOther[2]/XCUIElementTypeOther[1]')
}
async NTSelectPowerUnitResult(){
    return await this.element('-ios class chain:**/XCUIElementTypeOther[`name == \"SWSideMenuContainerController\"`]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeScrollView/XCUIElementTypeOther[2]/XCUIElementTypeOther[1]/XCUIElementTypeTable/XCUIElementTypeCell[1]')
}
async NTSelectTrailer(){
    return await this.element('-ios class chain:**/XCUIElementTypeOther[`name == \"SWSideMenuContainerController\"`]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeScrollView/XCUIElementTypeOther[2]/XCUIElementTypeOther[2]')
}
async NTAssignButton(){
    return await this.element('-ios class chain:**/XCUIElementTypeButton[`label == \"Assign\"`]')
}
async NTAddLocationEventOnTimeLineButton(){
    return await this.element('~Add Location Event on Timeline')
}
async NTSendNotTrackingEmailButton(){
    return await this.element('~Send Not Tracking Email')
}
async NTAdddEventlocationZipCode(){
    return await this.element('-ios class chain:**/XCUIElementTypeTextField[`label == \"enterEmail\"`][3]')
}
async NTAdddEventlocationZipCodeResult(){
    return await this.element('-ios class chain:**/XCUIElementTypeOther[`name == \"SWSideMenuContainerController\"`]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeScrollView/XCUIElementTypeOther[1]/XCUIElementTypeOther[2]/XCUIElementTypeTable/XCUIElementTypeCell/XCUIElementTypeOther/XCUIElementTypeOther')
}

async NTAddEventDescription(){
    return await this.element('-ios class chain:**/XCUIElementTypeTextField[`label == \"enterEmail\"`][1]')
}
async saveButton(){
    return await this.element('-ios class chain:**/XCUIElementTypeStaticText[`label == \"Save\"`]')
}
async NTSendEmailContact1(){
    return await this.element('-ios class chain:**/XCUIElementTypeOther[`name == \"SWSideMenuContainerController\"`]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeScrollView/XCUIElementTypeOther[1]/XCUIElementTypeOther[2]/XCUIElementTypeTable/XCUIElementTypeCell[1]/XCUIElementTypeOther[1]')
}
async NTSendEmailContact2(){
    return await this.element('-ios class chain:**/XCUIElementTypeOther[`name == \"SWSideMenuContainerController\"`]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeScrollView/XCUIElementTypeOther[1]/XCUIElementTypeOther[2]/XCUIElementTypeTable/XCUIElementTypeCell[2]/XCUIElementTypeOther[1]')
}
async NTSendEmailAdditionalContact(){
    return await this.element('-ios class chain:**/XCUIElementTypeTextField[`label == \"enterEmail\"`][1]')
}
async NTSendEmailSelectTemplate(){
    return await this.element('-ios class chain:**/XCUIElementTypeTextField[`label == \"enterEmail\"`][2]')
}
async NTSendEmailCustomerMessage(){
    return await this.element('-ios class chain:**/XCUIElementTypeOther[`name == \"SWSideMenuContainerController\"`]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeScrollView/XCUIElementTypeOther[2]/XCUIElementTypeOther[2]/XCUIElementTypeTextView')
}
async shipperCompassViewCarrierNotAssignedTitle(){
    return await this.element('-ios class chain:**/XCUIElementTypeStaticText[`label == \"Carrier Not Assigned\"`]')
}
async shipperCompassViewLocationCapacityExceededAlerts(){
    return await this.element("~Location Capacity Exceeded")
}
async shipperCompassViewLocationCapacityExceededTitle(){
    return await this.element("-ios class chain:**/XCUIElementTypeStaticText[`label == \"Location Capacity Exceeded\"`]")
}
async shipperCompassViewShipmentButton(){
    return await this.element("-ios class chain:**/XCUIElementTypeStaticText[`label == \"SHIPMENT LIST\"`]")
}
async shipperCompassViewMapViewButton(){
    return await this.element("-ios class chain:**/XCUIElementTypeStaticText[`label == \"MAP VIEW\"`]")
}
async compassShipmentCard(){
    return await this.element("-ios class chain:**/XCUIElementTypeOther[`name == \"SWCompassShipmentListViewController\"`]/XCUIElementTypeTable/XCUIElementTypeCell[1]")
}
async mapView(){
    return await this.element("-ios predicate string:type == \"XCUIElementTypeMap\" ")
}
async backButton(){
    return await this.element("~back icon")
}
async stopDetailsbackButton(){
    return await this.element("~StopDetailsBackBtn")
}
async doneButton(){
    return await this.element("~Done")
}
async viewShipmentDetailsButton(){
    return await this.element("-ios class chain:**/XCUIElementTypeButton[`label == \"View Shipment Detail\"`]")
}
async markStopCompleteButton(){
    return await this.element("-ios class chain:**/XCUIElementTypeButton[`label CONTAINS[c] \"Mark Stop\"`]")
}
async checkInTimeText(){
    return await this.element("-ios class chain:**/XCUIElementTypeStaticText[`label == \"Check In Time\"`]")
}
async checkOutTimeText(){
    return await this.element("-ios class chain:**/XCUIElementTypeStaticText[`label == \"Check Out Time\"`]")
}
async checkInEventTime(){
    return await this.element("-ios class chain:**/XCUIElementTypeTextField[`label == \"enterEmail\"`][1]")
}
async checkOutEventTime(){
    return await this.element("-ios class chain:**/XCUIElementTypeTextField[`label == \"enterEmail\"`][2]")
}
async editStopTimeHeader(){
    return await this.element("~StopDetailsTitle")
}
async cancelButton(){
    return await this.element("-ios class chain:**/XCUIElementTypeButton[`label == \"Cancel\"`]")
}
async editAppointmentTimeButton(){
    return await this.element("~Edit Appointment Times")
}
async editDeliveryAppointmentTime(){
    return await this.element("~Edit Delivery Appointment")
}
async carrierStatusCarrierHeader(){
    return await this.element("-ios class chain:**/XCUIElementTypeStaticText[`label == \"Carrier Details\"`]")
}
async carrierStatusCarrierNote(){
    return await this.element("-ios class chain:**/XCUIElementTypeButton[`label CONTAINS[c] \"Notes: \"`]")
}
async timePickerWheelMinutes(){
    return await this.element("//XCUIElementTypeApplication[@name=\"Shipwell\"]/XCUIElementTypeWindow[3]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeDatePicker/XCUIElementTypePicker/XCUIElementTypePickerWheel[3]")
}
async yesButton(){
    return await this.element("-ios class chain:**/XCUIElementTypeStaticText[`label == \"Yes\"`]")
}

async shipperCompass(){
    const shipperCompassViewTitle= await this.shipperCompassViewTitle()
    const shipperCompassAllOpenlerts= await this.shipperCompassAllOpenlerts()
    const shipperCompassAllOpenTitle= await this.shipperCompassAllOpenTitle()
    const shipperCompassViewResolvedAlerts= await this.shipperCompassViewResolvedAlerts()
    const shipperCompassViewResolvedTitle= await this.shipperCompassViewResolvedTitle()
    const shipperCompassViewRunningLateAlerts= await this.shipperCompassViewRunningLateAlerts()
    const shipperCompassViewRunningLateTitle= await this.shipperCompassViewRunningLateTitle()
    const shipperCompassViewWatchedShipmentAlerts= await this.shipperCompassViewWatchedShipmentAlerts()
    const shipperCompassViewWatchedShipmentTitle= await this.shipperCompassViewWatchedShipmentTitle()
    const shipperCompassViewLatePickupAlerts= await this.shipperCompassViewLatePickupAlerts()
    const shipperCompassViewLatePickupTitle= await this.shipperCompassViewLatePickupTitle()
    const shipperCompassViewCarrierStatusAlerts= await this.shipperCompassViewCarrierStatusAlerts()
    const shipperCompassViewCarrierStatusTitle= await this.shipperCompassViewCarrierStatusTitle()
    const shipperCompassViewLateDeliveryAlerts= await this.shipperCompassViewLateDeliveryAlerts()
    const shipperCompassViewLateDeliveryTitle= await this.shipperCompassViewLateDeliveryTitle()
    const shipperCompassViewNotTrackingAlerts= await this.shipperCompassViewNotTrackingAlerts()
    const shipperCompassViewNotTrackingTitle= await this.shipperCompassViewNotTrackingTitle()
    const shipperCompassViewCarrierNotAssignedAlerts= await this.shipperCompassViewCarrierNotAssignedAlerts()
    const shipperCompassViewCarrierNotAssignedTitle= await this.shipperCompassViewCarrierNotAssignedTitle()
    const shipperCompassViewCarrierNotAssignedCard= await this.shipperCompassViewCarrierNotAssignedCard()
    const compassActionButton= await this.compassActionButton()
    const CNAshipmentPU= await this.CNAshipmentPU()
    const CNAPredictedMarketPrice= await this.CNAPredictedMarketPrice()
    const CNABidsAndTenders= await this.CNABidsAndTenders()
    const CNARoutingGuides= await this.CNARoutingGuides()
    const CNAnewBidUSDOT_CarrierTag= await this.CNAnewBidUSDOT_CarrierTag()
    const CNAcarrierNameInputResult= await this.CNAcarrierNameInputResult()
    const CNAspecialInstruction= await this.CNAspecialInstruction()
    const CNAnewBidUSDOTSearchResult= await this.CNAnewBidUSDOTSearchResult()
    const CNAnewBidAvailableLocation= await this.CNAnewBidAvailableLocation()
    const CNAnewBidAvailableLocationResult=await this.CNAnewBidAvailableLocationResult()
    const CNAnewBidBidAmount=await this.CNAnewBidBidAmount()
    const CNARoutingGuideTitle= await this.CNARoutingGuideTitle()
    const CNARoutingGuideInput= await this.CNARoutingGuideInput()
    const CNARoutingGuideResult= await this.CNARoutingGuideResult()
    const CNARequestBidTitle= await this.CNARequestBidTitle()
    const CNAcarrierNameInput= await this.CNAcarrierNameInput()
    //const CNARequestBidCarrierTagResult= await this.CNARequestBidCarrierTagResult()
    //const CNARequestBidCarrierTagEmail= await this.CNARequestBidCarrierTagEmail()
    //const CNARequestBidCarrierTagCloseButton1= await this.CNARequestBidCarrierTagCloseButton1()
    //const CNARequestBidCarrierTagCloseButton2= await this.CNARequestBidCarrierTagCloseButton2()
    const CNAlogANewBidButton= await this.CNAlogANewBidButton()
    const CNArequestBid= await this.CNArequestBid()
    const CNAtenderToCarrier= await this.CNAtenderToCarrier()
    //const CNAsearchCarrierInputField= await this.CNAsearchCarrierInputField()




    const CNApushToRoutingGuide= await this.CNApushToRoutingGuide()
    const dismissButton= await this.dismissButton()
    const CNAnewBidTitle= await this.CNAnewBidTitle()
    const CNAcarrierSearchText= await this.CNAcarrierSearchText()
    const CNAbidDetailsText= await this.CNAbidDetailsText()
    const CNACancelButton= await this.CNACancelButton()
    const CNACreateButton= await this.CNACreateButton()
    const NTDriverSection= await this.NTDriverSection()
    const NTDriverCallButton= await this. NTDriverCallButton()
    const NTShipwellAppTrackingSection= await this.NTShipwellAppTrackingSection()
    const NTStartAppTrackingButton= await this.NTStartAppTrackingButton()
    const NTRequestAppInstall= await this.NTRequestAppInstall()
    const NTEquipmentSection= await this.NTEquipmentSection()
    const NTDriverAndEquipmentHeader= await this.NTDriverAndEquipmentHeader()
    const NTDriverPhoneNumberInput= await this.NTDriverPhoneNumberInput()
    const NTSelectPowerUnit= await this.NTSelectPowerUnit()
    const NTSelectTrailer= await this.NTSelectTrailer()
    const NTdriverPhoneText= await this.NTdriverPhoneText()
    const NTAssignButton= await this.NTAssignButton()
    const NTSelectPowerUnitResult= await this.NTSelectPowerUnitResult()
    const NTAddLocationEventOnTimeLineButton= await this.NTAddLocationEventOnTimeLineButton()
    const NTSendNotTrackingEmailButton= await this.NTSendNotTrackingEmailButton()
    const NTAdddEventlocationZipCode= await this.NTAdddEventlocationZipCode()
    const NTAdddEventlocationZipCodeResult=  await this.NTAdddEventlocationZipCodeResult()
    const NTAddEventDescription= await this.NTAddEventDescription()
    const saveButton= await this.saveButton()
    const NTSendEmailContact1= await this.NTSendEmailContact1()
    const NTSendEmailContact2= await this.NTSendEmailContact2()
    const NTSendEmailAdditionalContact= await this.NTSendEmailAdditionalContact()
    const NTSendEmailSelectTemplate= await this.NTSendEmailSelectTemplate()
    const NTSendEmailCustomerMessage= await this.NTSendEmailCustomerMessage()
    const shipperCompassViewLocationCapacityExceededAlerts= await this.shipperCompassViewLocationCapacityExceededAlerts()
    const shipperCompassViewLocationCapacityExceededTitle= await this.shipperCompassViewLocationCapacityExceededTitle()
    const compassShipmentCard= await this.compassShipmentCard()
    const shipperCompassViewShipmentButton= await this.shipperCompassViewShipmentButton()
    const shipperCompassViewMapViewButton= await this.shipperCompassViewMapViewButton()
    const mapView= await this.mapView()
    const backButton= await this.backButton()
    const stopDetailsbackButton= await this.stopDetailsbackButton()
    const doneButton= await this.doneButton()
    const shipwellSpinner= await this.shipwellSpinner()

    const markStopCompleteButton= await this.markStopCompleteButton()
    const checkInTimeText= await this.checkInTimeText()
    const checkOutTimeText= await this.checkOutTimeText()
    const checkInEventTime= await this.checkInEventTime()
    const checkOutEventTime= await this.checkOutEventTime()
    const editStopTimeHeader= await this.editStopTimeHeader()
    const cancelButton= await this.cancelButton()
    const editAppointmentTimeButton= await this.editAppointmentTimeButton()
    const editDeliveryAppointmentTime= await this.editDeliveryAppointmentTime()
    const carrierStatusCarrierHeader= await this.carrierStatusCarrierHeader()
    const carrierStatusCarrierNote= await this.carrierStatusCarrierNote()
    const timePickerWheelMinutes= await this.timePickerWheelMinutes()
    const yesButton= await this.yesButton()
    const loadBoardListTitle= await this.loadBoardListTitle()
    const stopDetailsTitle= await this.stopDetailsTitle()

    await this.driver.pause(3000)

    await shipperCompassViewTitle.waitForDisplayed({ timeout: 7000 })
    await shipperCompassViewTitle.waitForEnabled({ timeout: 7000 })
    //OPEN ALERTS VIEW
    await shipperCompassAllOpenlerts.waitForDisplayed({ timeout: 15000 })
    await shipperCompassAllOpenlerts.waitForEnabled({ timeout: 15000 })
    await shipperCompassAllOpenlerts.touchAction('tap')
    await shipperCompassAllOpenTitle.waitForDisplayed({ timeout: 8000 })

    await compassShipmentCard.waitForDisplayed({timeout: 15000})
    await shipperCompassViewShipmentButton.waitForDisplayed({timeout: 15000})
    await shipperCompassViewMapViewButton.waitForDisplayed({timeout: 15000})

    await shipperCompassViewMapViewButton.touchAction('tap')
    await mapView.waitForDisplayed({timeout: 15000})

    await shipperCompassViewShipmentButton.touchAction('tap')
    await backButton.touchAction('tap')

    await shipperCompassAllOpenlerts.waitForDisplayed({ timeout: 15000 })
    await shipperCompassAllOpenlerts.waitForEnabled({ timeout: 15000 })
    await this.driver.touchPerform([
        {action: "longPress", options: {x: 17, y: 775}},
        { action: 'wait', options: { ms: 100 }},
        {action: "moveTo", options: {x: 17, y: 215}},
        {action: "release"},
    ])

    /*
    //Resolved Alert View
    try{
    await shipperCompassViewResolvedAlerts.waitForDisplayed({ timeout: 15000 })
    await shipperCompassViewResolvedAlerts.waitForEnabled({ timeout: 15000 })
    await shipperCompassViewResolvedAlerts.touchAction('tap')
    await shipperCompassViewResolvedTitle.waitForDisplayed({ timeout: 15000 })

    await compassShipmentCard.waitForDisplayed({timeout: 15000})
    await shipperCompassViewShipmentButton.waitForDisplayed({timeout: 15000})
    await shipperCompassViewMapViewButton.waitForDisplayed({timeout: 15000})

    await shipperCompassViewMapViewButton.touchAction('tap')
    await mapView.waitForDisplayed({timeout: 15000})

    await shipperCompassViewShipmentButton.touchAction('tap')
    await backButton.waitForDisplayed({timeout: 15000})
    await backButton.waitForDisplayed({timeout: 15000})
    await backButton.touchAction('tap')
    await shipperCompassViewResolvedAlerts.waitForDisplayed({ timeout: 15000 })
    await shipperCompassViewResolvedAlerts.waitForEnabled({ timeout: 15000 })
    }
    catch (error){
        console.log(error)
    }
    
    await this.driver.touchPerform([
        {action: "longPress", options: {x: 17, y: 775}},
        { action: 'wait', options: { ms: 100 }},
        {action: "moveTo", options: {x: 17, y: 215}},
        {action: "release"},
    ])*/

    //Running Late View
    await shipperCompassViewRunningLateAlerts.waitForDisplayed({ timeout: 15000 })
    await shipperCompassViewRunningLateAlerts.waitForEnabled({ timeout: 15000 })
    await shipperCompassViewRunningLateAlerts.touchAction('tap')
    await shipperCompassViewRunningLateTitle.waitForDisplayed({ timeout: 15000 })
    try{
    await compassShipmentCard.waitForDisplayed({timeout: 15000})
    await shipperCompassViewShipmentButton.waitForDisplayed({timeout: 15000})
    await shipperCompassViewMapViewButton.waitForDisplayed({timeout: 15000})

    await shipperCompassViewMapViewButton.touchAction('tap')
    await mapView.waitForDisplayed({timeout: 15000})

    await shipperCompassViewShipmentButton.touchAction('tap')
    await compassShipmentCard.waitForDisplayed({timeout: 15000})
    await compassShipmentCard.touchAction('tap')
    await shipwellSpinner.waitForDisplayed({timeout: 15000, reverse: true})

    await compassActionButton.waitForDisplayed({timeout: 15000})
    await compassActionButton.waitForEnabled({timeout: 15000})
    await compassActionButton.touchAction('tap')
    if (await editDeliveryAppointmentTime.isDisplayed()==true){
        await editDeliveryAppointmentTime.waitForDisplayed({timeout: 15000})
        await editDeliveryAppointmentTime.touchAction('tap')
        await this.driver.pause(1000)
        await saveButton.touchAction('tap')
        await this.driver.pause(1000)
        if (await shipwellSpinner.isDisplayed()==true){
            await shipwellSpinner.waitForDisplayed({timeout: 15000, reverse: true})
        }
        else{
            await this.driver.pause(3000)
        }

        if (await cancelButton.isDisplayed()==true){
            await cancelButton.touchAction('tap')
            await compassActionButton.waitForEnabled({timeout: 15000})
            await compassActionButton.touchAction('tap')
        }
        else{
            await compassShipmentCard.waitForDisplayed({timeout: 10000})
            await compassShipmentCard.touchAction('tap')
            await this.driver.pause(3000)
            await compassActionButton.waitForEnabled({timeout: 15000})
            await compassActionButton.touchAction('tap')
        }
    }

    //Mark as complete
    if (await markStopCompleteButton.isDisplayed()==true ){
        await markStopCompleteButton.waitForDisplayed({timeout: 15000})
        await markStopCompleteButton.waitForEnabled({timeout: 15000})
        await markStopCompleteButton.touchAction('tap')

        await shipwellSpinner.waitForDisplayed({timeout: 15000, reverse: true})
        await checkInTimeText.waitForDisplayed({timeout: 15000})
        await checkOutTimeText.waitForDisplayed({timeout: 15000})
        await checkInEventTime.touchAction('tap')
        await this.driver.pause(2000)
        await timePickerWheelMinutes.waitForDisplayed({timeout: 15000})
        await this.driver.pause(2000)
        await timePickerWheelMinutes.addValue('00')

        await checkOutEventTime.touchAction('tap')

        if (await doneButton.isDisplayed()){
            await doneButton.touchAction('tap')
        }
        await saveButton.touchAction('tap')
        await this.pause(1000)
        if (await yesButton.isDisplayed()==true){
            await yesButton.touchAction('tap')
            await this.driver.pause(1000)
            if (await shipwellSpinner.isDisplayed()==true){
                await shipwellSpinner.waitForDisplayed({timeout: 15000, reverse: true})
            }
            else{
                await this.driver.pause(3000)
            }
            await backButton.waitForDisplayed({timeout: 15000})
            await backButton.waitForEnabled({ timeout: 15000 })
            await backButton.touchAction('tap')
        }
        else if (await cancelButton.isDisplayed()==true){
            await cancelButton.touchAction('tap')
            await this.driver.pause(1000)
            await stopDetailsbackButton.waitForDisplayed({timeout: 15000})
            await stopDetailsbackButton.waitForEnabled({ timeout: 15000 })
            await stopDetailsbackButton.touchAction('tap')
            await shipwellSpinner.waitForDisplayed({timeout: 15000, reverse: true})
            await backButton.waitForDisplayed({timeout: 15000})
            await backButton.waitForEnabled({ timeout: 15000 })
            await backButton.touchAction('tap')
            await shipwellSpinner.waitForDisplayed({timeout: 15000, reverse: true})
        }
    }
    else{
        await dismissButton.touchAction('tap')
        await stopDetailsbackButton.waitForDisplayed({timeout: 15000})
        await stopDetailsbackButton.waitForEnabled({ timeout: 15000 })
        await stopDetailsbackButton.touchAction('tap')
        await shipwellSpinner.waitForDisplayed({timeout: 15000, reverse: true})
        await backButton.waitForDisplayed({timeout: 15000})
        await backButton.waitForEnabled({ timeout: 15000 })
        await backButton.touchAction('tap')
    }
    await shipperCompassAllOpenlerts.waitForDisplayed({ timeout: 15000 })
    await shipperCompassAllOpenlerts.waitForEnabled({ timeout: 15000 })
    }
    catch (error){
        console.log(error)
    }
    
    await this.driver.touchPerform([
        {action: "longPress", options: {x: 17, y: 775}},
        { action: 'wait', options: { ms: 100 }},
        {action: "moveTo", options: {x: 17, y: 215}},
        {action: "release"},
    ])


    //Watched Shipment View
    await shipperCompassViewWatchedShipmentAlerts.waitForDisplayed({ timeout: 15000 })
    await shipperCompassViewWatchedShipmentAlerts.waitForEnabled({ timeout: 15000 })
    await shipperCompassViewWatchedShipmentAlerts.touchAction('tap')
    await shipperCompassViewWatchedShipmentTitle.waitForDisplayed({ timeout: 15000 })
    try{
    await compassShipmentCard.waitForDisplayed({timeout: 15000})
    await shipperCompassViewShipmentButton.waitForDisplayed({timeout: 15000})
    await shipperCompassViewMapViewButton.waitForDisplayed({timeout: 15000})

    await shipperCompassViewMapViewButton.touchAction('tap')
    await mapView.waitForDisplayed({timeout: 15000})

    await shipperCompassViewShipmentButton.touchAction('tap')
    await backButton.touchAction('tap')
    await shipperCompassAllOpenlerts.waitForDisplayed({ timeout: 15000 })
    await shipperCompassAllOpenlerts.waitForEnabled({ timeout: 15000 })
    }
    catch (error){
        console.log(error)
    }
    await this.driver.touchPerform([
        {action: "longPress", options: {x: 17, y: 775}},
        { action: 'wait', options: { ms: 100 }},
        {action: "moveTo", options: {x: 17, y: 215}},
        {action: "release"},
    ])

    //Late Pickup View
    await shipperCompassViewLatePickupAlerts.waitForDisplayed({ timeout: 15000 })
    await shipperCompassViewLatePickupAlerts.waitForEnabled({ timeout: 15000 })
    await shipperCompassViewLatePickupAlerts.touchAction('tap')
    await shipperCompassViewLatePickupTitle.waitForDisplayed({ timeout: 15000 })
    try{
    await compassShipmentCard.waitForDisplayed({timeout: 15000})
    await shipperCompassViewShipmentButton.waitForDisplayed({timeout: 15000})
    await shipperCompassViewMapViewButton.waitForDisplayed({timeout: 15000})

    await shipperCompassViewMapViewButton.touchAction('tap')
    await mapView.waitForDisplayed({timeout: 15000})

    await shipperCompassViewShipmentButton.touchAction('tap')
    await compassShipmentCard.waitForDisplayed({timeout: 15000})
    await compassShipmentCard.touchAction('tap')
    await shipwellSpinner.waitForDisplayed({timeout: 15000, reverse: true})
    await compassActionButton.waitForDisplayed({timeout: 15000})
    await compassActionButton.touchAction('tap')
    //Mark as stop complete
    if (await markStopCompleteButton.isDisplayed()==true){
        await markStopCompleteButton.touchAction('tap')

        if (await shipwellSpinner.isDisplayed()==true){
            await shipwellSpinner.waitForDisplayed({timeout: 15000, reverse: true})
        }
        else{
            await this.driver.pause(3000)
        }
        await checkInTimeText.waitForDisplayed({timeout: 15000})
        await checkOutTimeText.waitForDisplayed({timeout: 15000})
        await checkInEventTime.touchAction('tap')
        await this.driver.pause(2000)
        await timePickerWheelMinutes.waitForDisplayed({timeout: 15000})
        await timePickerWheelMinutes.addValue('00')
        await this.driver.pause(2000)
        await checkOutEventTime.touchAction('tap')
        if (await doneButton.isDisplayed()){
            await doneButton.touchAction('tap')
        }
        await saveButton.touchAction('tap')
        await this.driver.pause(1000)
        if (await yesButton.isDisplayed()==true){
            await yesButton.touchAction('tap')
            await this.driver.pause(1000)
            if (await shipwellSpinner.isDisplayed()==true){
                await shipwellSpinner.waitForDisplayed({timeout: 15000, reverse: true})
            }
            else{
                await this.driver.pause(3000)
            }
            await compassShipmentCard.waitForDisplayed({timeout: 15000})
            await compassShipmentCard.touchAction('tap')
            if (await shipwellSpinner.isDisplayed()==true){
                await shipwellSpinner.waitForDisplayed({timeout: 15000, reverse: true})
            }
            else{
                await this.driver.pause(3000)
            }
            await compassActionButton.waitForDisplayed({timeout: 15000})
            await compassActionButton.touchAction('tap')

        }
        else if (await cancelButton.isDisplayed()==true){
            await cancelButton.touchAction('tap')
            await compassActionButton.waitForDisplayed({timeout: 15000})
            await compassActionButton.touchAction('tap')

    }
    await this.driver.pause(1000)
    }
    
    //Edit Appointment Time
    if (await editAppointmentTimeButton.isDisplayed()==true){
        await editAppointmentTimeButton.waitForDisplayed({timeout: 15000})
        await editAppointmentTimeButton.touchAction('tap')
        await saveButton.waitForDisplayed({timeout: 15000})
        await saveButton.touchAction('tap')
        await this.driver.pause(1000)
        if (await shipwellSpinner.isDisplayed()==true){
            if (await shipwellSpinner.isDisplayed()==true){
                await shipwellSpinner.waitForDisplayed({timeout: 15000, reverse: true})
            }
            else{
                await this.driver.pause(3000)
            }
            await backButton.waitForDisplayed({timeout: 15000})
            await backButton.waitForEnabled({ timeout: 15000 })
            await backButton.touchAction('tap')

        }
        else if (await cancelButton.isDisplayed()==true){
            await cancelButton.touchAction('tap')
            await stopDetailsbackButton.waitForDisplayed({timeout: 15000})
            await stopDetailsbackButton.waitForEnabled({ timeout: 15000 })
            await stopDetailsbackButton.touchAction('tap')
            if (await shipwellSpinner.isDisplayed()==true){
                await shipwellSpinner.waitForDisplayed({timeout: 15000, reverse: true})
            }
            else{
                await this.driver.pause(3000)
            }
            await backButton.waitForDisplayed({timeout: 15000})
            await backButton.waitForEnabled({ timeout: 15000 })
            await backButton.touchAction('tap')
        }

    }
    else{
        await dismissButton.touchAction('tap')
        await stopDetailsbackButton.waitForDisplayed({timeout: 15000})
        await stopDetailsbackButton.waitForEnabled({ timeout: 15000 })
        await stopDetailsbackButton.touchAction('tap')
        await this.driver.pause(3000)
        await backButton.waitForDisplayed({timeout: 15000})
        await backButton.waitForEnabled({ timeout: 15000 })
        await backButton.touchAction('tap')
    }
    await shipperCompassAllOpenlerts.waitForDisplayed({ timeout: 15000 })
    await shipperCompassAllOpenlerts.waitForEnabled({ timeout: 15000 })
}
    catch (error){
        console.log(error)
    }
    await this.driver.touchPerform([
        {action: "longPress", options: {x: 17, y: 775}},
        { action: 'wait', options: { ms: 100 }},
        {action: "moveTo", options: {x: 17, y: 215}},
        {action: "release"},
    ])

    //Carrier Status View
    await shipperCompassViewCarrierStatusAlerts.waitForDisplayed({ timeout: 15000 })
    await shipperCompassViewCarrierStatusAlerts.waitForEnabled({ timeout: 15000 })
    await shipperCompassViewCarrierStatusAlerts.touchAction('tap')
    await shipperCompassViewCarrierStatusTitle.waitForDisplayed({ timeout: 15000 })
    try{
    await compassShipmentCard.waitForDisplayed({timeout: 5000})
    await shipperCompassViewShipmentButton.waitForDisplayed({timeout: 15000})
    await shipperCompassViewMapViewButton.waitForDisplayed({timeout: 15000})

    await shipperCompassViewMapViewButton.touchAction('tap')
    await mapView.waitForDisplayed({timeout: 5000})

    await shipperCompassViewShipmentButton.touchAction('tap')
    await compassShipmentCard.waitForDisplayed({timeout: 15000})
    await compassShipmentCard.touchAction('tap')

    await carrierStatusCarrierHeader.waitForDisplayed({timeout: 15000})

    await stopDetailsbackButton.waitForDisplayed({timeout: 15000})
    await stopDetailsbackButton.waitForEnabled({ timeout: 15000 })
    await stopDetailsbackButton.touchAction('tap')
    if (await shipwellSpinner.isDisplayed()==true){
            await shipwellSpinner.waitForDisplayed({timeout: 15000, reverse: true})
        }
        else{
            await this.driver.pause(3000)
        }
    await backButton.waitForDisplayed({timeout: 15000})
    await backButton.waitForEnabled({ timeout: 15000 })
    await backButton.touchAction('tap')
    await shipperCompassAllOpenlerts.waitForDisplayed({ timeout: 15000 })
    await shipperCompassAllOpenlerts.waitForEnabled({ timeout: 15000 })
    }
    catch (error){
        console.log(error)
    }
    await this.driver.touchPerform([
        {action: "longPress", options: {x: 17, y: 683}},
        { action: 'wait', options: { ms: 100 }},
        {action: "moveTo", options: {x: 17, y: 215}},
        {action: "release"},
    ])

    //Late Delivery View
    await shipperCompassViewLateDeliveryAlerts.waitForDisplayed({ timeout: 15000 })
    await shipperCompassViewLateDeliveryAlerts.waitForEnabled({ timeout: 15000 })
    await shipperCompassViewLateDeliveryAlerts.touchAction('tap')
    await shipperCompassViewLateDeliveryTitle.waitForDisplayed({ timeout: 15000 })
    try{
    await shipperCompassViewShipmentButton.waitForDisplayed({timeout: 15000})
    await shipperCompassViewMapViewButton.waitForDisplayed({timeout: 15000})

    await shipperCompassViewMapViewButton.touchAction('tap')
    await mapView.waitForDisplayed({timeout: 5000})

    await shipperCompassViewShipmentButton.touchAction('tap')
    await shipwellSpinner.waitForDisplayed({timeout: 15000, reverse: true})
    await compassShipmentCard.waitForDisplayed({timeout: 15000})
    await compassShipmentCard.touchAction('tap')
    await shipwellSpinner.waitForDisplayed({timeout: 15000, reverse: true})
    await compassActionButton.waitForDisplayed({timeout: 15000})
    await compassActionButton.touchAction('tap')
    //Edit Delivery Appointment time

    await editDeliveryAppointmentTime.waitForDisplayed({timeout: 15000})
    await editDeliveryAppointmentTime.touchAction('tap')

    await saveButton.waitForDisplayed({timeout: 15000})
    await saveButton.touchAction('tap')
    await this.driver.pause(1000)
    if (await shipwellSpinner.isDisplayed()==true){
        if (await shipwellSpinner.isDisplayed()==true){
            await shipwellSpinner.waitForDisplayed({timeout: 15000, reverse: true})
        }
        else{
            await this.driver.pause(3000)
        }
        await backButton.waitForDisplayed({timeout: 15000})
        await backButton.waitForEnabled({ timeout: 15000 })
        await backButton.touchAction('tap')
    }
    else if (await cancelButton.isDisplayed()==true){
        await cancelButton.touchAction('tap')
        await stopDetailsbackButton.waitForDisplayed({timeout: 15000})
        await stopDetailsbackButton.waitForEnabled({ timeout: 15000 })
        await stopDetailsbackButton.touchAction('tap')
        if (await shipwellSpinner.isDisplayed()==true){
            await shipwellSpinner.waitForDisplayed({timeout: 15000, reverse: true})
        }
        else{
            await this.driver.pause(3000)
        }
        await backButton.waitForDisplayed({timeout: 15000})
        await backButton.waitForEnabled({ timeout: 15000 })
        await backButton.touchAction('tap')
        await shipperCompassAllOpenlerts.waitForDisplayed({ timeout: 15000 })
        await shipperCompassAllOpenlerts.waitForEnabled({ timeout: 15000 })
    }
    }
    catch (error){
        console.log(error)
    }
    await this.driver.touchPerform([
        {action: "longPress", options: {x: 17, y: 775}},
        { action: 'wait', options: { ms: 100 }},
        {action: "moveTo", options: {x: 17, y: 215}},
        {action: "release"},
    ])

    //Not Tracking View
    await shipperCompassViewNotTrackingAlerts.waitForDisplayed({ timeout: 15000 })
    await shipperCompassViewNotTrackingAlerts.waitForEnabled({ timeout: 15000 })
    await shipperCompassViewNotTrackingAlerts.touchAction('tap')
    await shipperCompassViewNotTrackingTitle.waitForDisplayed({ timeout: 15000 })
    try{
    await compassShipmentCard.waitForDisplayed({timeout: 5000})
    await shipperCompassViewShipmentButton.waitForDisplayed({timeout: 15000})
    await shipperCompassViewMapViewButton.waitForDisplayed({timeout: 15000})

    await shipperCompassViewMapViewButton.touchAction('tap')
    await mapView.waitForDisplayed({timeout: 5000})

    await shipperCompassViewShipmentButton.touchAction('tap')
    await compassShipmentCard.waitForDisplayed({timeout: 15000})
    await compassShipmentCard.waitForEnabled({timeout: 15000})
    
    await compassShipmentCard.touchAction('tap')
    if (await shipwellSpinner.isDisplayed()==true){
        await shipwellSpinner.waitForDisplayed({timeout: 15000, reverse: true})
    }
    else{
        await this.driver.pause(3000)
    }
    await NTDriverSection.waitForDisplayed({timeout: 15000})
    if (await NTdriverPhoneText.isDisplayed()==true){
        await NTDriverCallButton.waitForDisplayed({timeout: 15000})
    }
    await NTShipwellAppTrackingSection.waitForDisplayed({timeout: 15000})
    await NTStartAppTrackingButton.waitForDisplayed({timeout: 15000})
    await NTRequestAppInstall.waitForDisplayed({timeout: 15000})
    await NTEquipmentSection.waitForDisplayed({timeout: 15000})
    await this.driver.pause(1000
        )
    //Driver section
    await NTDriverSection.waitForDisplayed({timeout: 15000})
    await NTDriverSection.touchAction('tap')
    await NTDriverAndEquipmentHeader.waitForDisplayed({timeout: 15000})
    await NTDriverPhoneNumberInput.waitForDisplayed({timeout: 15000})
    await NTDriverPhoneNumberInput.clearValue()
    await NTDriverPhoneNumberInput.setValue('15128064080')
    await NTSelectPowerUnit.waitForDisplayed({timeout: 15000})
    await NTSelectPowerUnit.touchAction('tap')
    await NTSelectPowerUnitResult.waitForDisplayed({timeout: 15000})
    await NTSelectPowerUnitResult.touchAction('tap')
    await NTSelectTrailer.waitForDisplayed({timeout: 15000})
    await NTSelectTrailer.clearValue()
    await NTSelectTrailer.setValue('Ford')
    if (await doneButton.isDisplayed()){
        await doneButton.touchAction('tap')
    }
    await NTAssignButton.waitForDisplayed({timeout: 15000})
    await NTAssignButton.touchAction('tap')
    await this.driver.pause(1000)
    if (await shipwellSpinner.isDisplayed()==true){
        await shipwellSpinner.waitForDisplayed({timeout: 15000, reverse: true})
    }
    else{
        await this.driver.pause(3000)
    }
    
    //Send Email
    await compassActionButton.waitForDisplayed({timeout: 15000})
    await compassActionButton.touchAction('tap')
    await NTAddLocationEventOnTimeLineButton.waitForDisplayed({timeout: 15000})
    await NTAddLocationEventOnTimeLineButton.waitForEnabled({timeout: 15000})
    await NTSendNotTrackingEmailButton.waitForDisplayed({timeout: 15000})
    await NTSendNotTrackingEmailButton.waitForEnabled({timeout: 15000})
    
    await NTSendNotTrackingEmailButton.touchAction('tap')
    await NTSendEmailContact1.waitForDisplayed({timeout: 15000})
    await NTSendEmailContact1.waitForEnabled({timeout: 15000})
    await NTSendEmailContact2.waitForDisplayed({timeout: 15000})
    await NTSendEmailContact2.waitForEnabled({timeout: 15000})
    await NTSendEmailAdditionalContact.waitForDisplayed({timeout: 15000})
    await NTSendEmailAdditionalContact.waitForEnabled({timeout: 15000})
    await NTSendEmailAdditionalContact.setValue('anurag371@gmail.com')
    if (await doneButton.isDisplayed()){
        await doneButton.touchAction('tap')
    }
    await NTSendEmailSelectTemplate.waitForDisplayed({timeout: 15000})
    await NTSendEmailSelectTemplate.waitForEnabled({timeout: 15000})
    await NTSendEmailCustomerMessage.waitForDisplayed({timeout: 15000})
    await NTSendEmailCustomerMessage.waitForEnabled({timeout: 15000})
    await NTSendEmailCustomerMessage.setValue('Testing, kindly ignore')
    if (await doneButton.isDisplayed()){
        await doneButton.touchAction('tap')
    }
    await saveButton.touchAction('tap')
    await this.driver.pause(1000)
    if (await shipwellSpinner.isDisplayed()==true){
        await shipwellSpinner.waitForDisplayed({timeout: 15000, reverse: true})
    }
    else{
        await this.driver.pause(3000)
    }
    await compassShipmentCard.waitForDisplayed({timeout: 15000})
    await compassShipmentCard.touchAction('tap')
    if (await shipwellSpinner.isDisplayed()==true){
        await shipwellSpinner.waitForDisplayed({timeout: 15000, reverse: true})
    }
    else{
        await this.driver.pause(3000)
    }
    await compassActionButton.waitForDisplayed({timeout: 15000})
    await compassActionButton.touchAction('tap')
    await NTAddLocationEventOnTimeLineButton.waitForDisplayed({timeout: 15000})
    await NTAddLocationEventOnTimeLineButton.waitForEnabled({timeout: 15000})
    await NTAddLocationEventOnTimeLineButton.touchAction('tap')
    await NTAdddEventlocationZipCode.setValue('78746')
    await NTAdddEventlocationZipCodeResult.waitForDisplayed({timeout: 15000})
    await NTAdddEventlocationZipCodeResult.waitForEnabled({timeout: 15000})
    await NTAdddEventlocationZipCodeResult.touchAction('tap')
    if (await doneButton.isDisplayed()){
        await doneButton.touchAction('tap')
    }
    await NTAddEventDescription.setValue('Testing, kindly ignore')
    if (await doneButton.isDisplayed()){
        await doneButton.touchAction('tap')
    }
    await saveButton.touchAction('tap')
    await this.driver.pause(1000)
    if (await shipwellSpinner.isDisplayed()==true){
        await shipwellSpinner.waitForDisplayed({timeout: 15000, reverse: true})
    }
    else{
        await this.driver.pause(3000)
    }
    await backButton.waitForDisplayed({timeout: 15000})
    await backButton.waitForEnabled({timeout: 15000})
    await backButton.touchAction('tap')
    await shipperCompassAllOpenlerts.waitForDisplayed({ timeout: 15000 })
    await shipperCompassAllOpenlerts.waitForEnabled({ timeout: 15000 })
    }
    catch (error){
        console.log(error)
    }
    await this.driver.touchPerform([
        {action: "longPress", options: {x: 17, y: 775}},
        { action: 'wait', options: { ms: 100 }},
        {action: "moveTo", options: {x: 17, y: 215}},
        {action: "release"},
    ])
    //Carrier Not Assigned View
    
    await shipperCompassViewCarrierNotAssignedAlerts.waitForDisplayed({ timeout: 15000 })
    await shipperCompassViewCarrierNotAssignedAlerts.waitForEnabled({ timeout: 15000 })
    await shipperCompassViewCarrierNotAssignedAlerts.touchAction('tap')
    await shipperCompassViewCarrierNotAssignedTitle.waitForDisplayed({ timeout: 15000 })
    try{
    await compassShipmentCard.waitForDisplayed({timeout: 15000})
    await shipperCompassViewShipmentButton.waitForDisplayed({timeout: 15000})
    await shipperCompassViewMapViewButton.waitForDisplayed({timeout: 15000})

    await shipperCompassViewMapViewButton.touchAction('tap')
    await mapView.waitForDisplayed({timeout: 5000})
    
    await shipperCompassViewShipmentButton.waitForDisplayed({ timeout: 15000 })
    await shipperCompassViewShipmentButton.waitForEnabled({ timeout: 15000 })
    await shipperCompassViewShipmentButton.touchAction('tap')

    await shipperCompassViewCarrierNotAssignedCard.waitForDisplayed({ timeout: 15000 })
    await shipperCompassViewCarrierNotAssignedCard.waitForEnabled({ timeout: 15000 })
    await shipperCompassViewCarrierNotAssignedCard.touchAction('tap')

    await compassActionButton.waitForDisplayed({ timeout: 15000 })
    await compassActionButton.waitForEnabled({ timeout: 15000 })
    await CNAshipmentPU.waitForDisplayed({ timeout: 15000 })
    await CNAshipmentPU.waitForEnabled({ timeout: 15000 })
    await CNAPredictedMarketPrice.waitForDisplayed({ timeout: 15000 })
    await CNAPredictedMarketPrice.waitForEnabled({ timeout: 15000 })
    await CNABidsAndTenders.waitForDisplayed({ timeout: 15000 })
    await CNABidsAndTenders.waitForEnabled({ timeout: 15000 })
    await this.driver.touchPerform([
        {action: "longPress", options: {x: 4, y: 700}},
        { action: 'wait', options: { ms: 100 }},
        {action: "moveTo", options: {x: 4, y: 100}},
        {action: "release"},
    ])
    await CNARoutingGuides.waitForDisplayed({ timeout: 5000 })
    await CNARoutingGuides.waitForEnabled({ timeout: 15000 })
    await this.driver.pause(3000)

    await compassActionButton.touchAction('tap')
    await CNAlogANewBidButton.waitForDisplayed({ timeout: 15000 })
    await CNAlogANewBidButton.waitForEnabled({ timeout: 15000 })
    await CNArequestBid.waitForDisplayed({ timeout: 15000 })
    await CNArequestBid.waitForEnabled({ timeout: 15000 })
    await CNAtenderToCarrier.waitForDisplayed({ timeout: 15000 })
    await CNAtenderToCarrier.waitForEnabled({ timeout: 15000 })
    await CNApushToRoutingGuide.waitForDisplayed({ timeout: 15000 })
    await CNApushToRoutingGuide.waitForEnabled({ timeout: 15000 })
    await dismissButton.waitForDisplayed({ timeout: 15000 })
    await dismissButton.waitForEnabled({ timeout: 15000 })
    //CNA: Log new Bid
    await CNAlogANewBidButton.touchAction('tap')
    await CNAnewBidTitle.waitForDisplayed({ timeout: 15000 })
    await CNAnewBidTitle.waitForEnabled({ timeout: 15000 })
    await CNAcarrierSearchText.waitForDisplayed({ timeout: 15000 })
    await CNAcarrierSearchText.waitForEnabled({ timeout: 15000 })
    await CNAbidDetailsText.waitForDisplayed({ timeout: 15000 })
    await CNAbidDetailsText.waitForEnabled({ timeout: 15000 })
    await CNAnewBidUSDOT_CarrierTag.waitForDisplayed({ timeout: 15000 })
    await CNAnewBidUSDOT_CarrierTag.waitForEnabled({ timeout: 15000 })
    await CNAnewBidUSDOT_CarrierTag.setValue('12')
    await CNAnewBidUSDOTSearchResult.waitForDisplayed({ timeout: 40000 })
    await CNAnewBidUSDOTSearchResult.waitForEnabled({ timeout: 40000 })
    await CNAnewBidUSDOTSearchResult.touchAction('tap')
    await this.driver.pause(3000)
    if (await doneButton.isDisplayed()){
        await doneButton.touchAction('tap')
    }
    await CNAnewBidAvailableLocation.touchAction('tap')
    await CNAnewBidAvailableLocation.setValue('Austin, TX 78701, US')
    await this.driver.touchPerform([
        {action: "longPress", options: {x: 4, y: 350}},
        { action: 'wait', options: { ms: 100 }},
        {action: "moveTo", options: {x: 4, y: 125}},
        {action: "release"},
    ])
    await CNAnewBidAvailableLocationResult.waitForDisplayed({ timeout: 15000 })
    await CNAnewBidAvailableLocationResult.waitForEnabled({ timeout: 15000 })
    await CNAnewBidAvailableLocationResult.touchAction('tap')
    await CNAnewBidBidAmount.setValue('1000')
    if (await doneButton.isDisplayed()){
        await doneButton.touchAction('tap')
    }

    await this.driver.touchPerform([
        {action: "longPress", options: {x: 4, y: 600}},
        { action: 'wait', options: { ms: 100 }},
        {action: "moveTo", options: {x: 4, y: 158}},
        {action: "release"},
    ])

    await CNACancelButton.waitForDisplayed({ timeout: 15000 })
    await CNACancelButton.waitForEnabled({ timeout: 15000 })

    await CNACreateButton.waitForDisplayed({ timeout: 15000 })
    await CNACreateButton.waitForEnabled({ timeout: 15000 })
    await CNACreateButton.touchAction('tap')
    await CNAnewBidUSDOTSearchResult.waitForDisplayed({ timeout: 15000 })
    await CNAnewBidUSDOTSearchResult.waitForEnabled({ timeout: 15000 })
    await this.driver.pause(1000)
    if (await shipwellSpinner.isDisplayed()==true){
        await shipwellSpinner.waitForDisplayed({timeout: 15000, reverse: true})
    }
    else{
        await this.driver.pause(3000)
    }
    
    /*
    //Tender to Carrier
    await compassActionButton.waitForDisplayed({ timeout: 15000 })
    await compassActionButton.waitForEnabled({ timeout: 15000 })
    await compassActionButton.touchAction('tap')
    await CNAtenderToCarrier.waitForDisplayed({ timeout: 15000 })
    await CNAtenderToCarrier.waitForEnabled({ timeout: 15000 })
    await CNAtenderToCarrier.touchAction('tap')*/

    //CNA: Routing Guide
    await compassActionButton.waitForDisplayed({ timeout: 15000 })
    await compassActionButton.waitForEnabled({ timeout: 15000 })
    await compassActionButton.touchAction('tap')
    await CNApushToRoutingGuide.waitForDisplayed({ timeout: 15000 })
    await CNApushToRoutingGuide.waitForEnabled({ timeout: 15000 })
    await CNApushToRoutingGuide.touchAction('tap')
    await CNARoutingGuideTitle.waitForDisplayed({ timeout: 15000 })
    await CNARoutingGuideTitle.waitForEnabled({ timeout: 15000 })
    await CNARoutingGuideInput.waitForDisplayed({ timeout: 15000 })
    await CNARoutingGuideInput.waitForEnabled({ timeout: 15000 })
    await CNARoutingGuideInput.setValue('Test')
    await CNARoutingGuideResult.waitForDisplayed({ timeout: 15000 })
    await CNARoutingGuideResult.waitForEnabled({ timeout: 15000 })
    await CNARoutingGuideResult.touchAction('tap')
    await CNACreateButton.waitForDisplayed({ timeout: 15000 })
    await CNACreateButton.waitForEnabled({ timeout: 15000 })
    await CNACreateButton.touchAction('tap')
    await this.driver.pause(1000)
    if (await shipwellSpinner.isDisplayed()==true){
        await shipwellSpinner.waitForDisplayed({timeout: 15000, reverse: true})
    }
    else{
        await this.driver.pause(3000)
    }

    //CNA: Request bid
    await compassActionButton.waitForDisplayed({ timeout: 15000 })
    await compassActionButton.waitForEnabled({ timeout: 15000 })
    await compassActionButton.touchAction('tap')
    await CNArequestBid.waitForDisplayed({ timeout: 15000 })
    await CNArequestBid.waitForEnabled({ timeout: 15000 })
    await CNArequestBid.touchAction('tap')
    if (await shipwellSpinner.isDisplayed()==true){
        await shipwellSpinner.waitForDisplayed({timeout: 15000, reverse: true})
    }
    else{
        await this.driver.pause(10000)
    }
    await CNARequestBidTitle.waitForDisplayed({ timeout: 10000 })
    await CNARequestBidTitle.waitForEnabled({ timeout: 10000 })
    await CNAcarrierNameInput.waitForDisplayed({ timeout: 15000 })
    await CNAcarrierNameInput.waitForEnabled({ timeout: 15000 })
    await CNAcarrierNameInput.setValue('Anurag')
    await CNAcarrierNameInputResult.waitForDisplayed({ timeout: 8000 })
    await CNAcarrierNameInputResult.waitForEnabled({ timeout: 8000 })
    await CNAcarrierNameInputResult.touchAction('tap')
    await CNAspecialInstruction.setValue("Test")
    await doneButton.touchAction('tap')
    await CNACreateButton.waitForDisplayed({ timeout: 15000 })
    await CNACreateButton.touchAction('tap')
    await this.driver.pause(1000)
    if (await shipwellSpinner.isDisplayed()==true){
        await shipwellSpinner.waitForDisplayed({timeout: 15000, reverse: true})
    }
    else{
        await this.driver.pause(10000)
    }
    await stopDetailsbackButton.waitForDisplayed({ timeout: 8000 })
    await stopDetailsbackButton.waitForEnabled({ timeout: 8000 })
    await stopDetailsbackButton.touchAction('tap')
    if (await shipwellSpinner.isDisplayed()==true){
        await shipwellSpinner.waitForDisplayed({timeout: 15000, reverse: true})
    }
    else{
        await this.driver.pause(3000)
    }
    await backButton.waitForDisplayed({ timeout: 15000 })
    await backButton.waitForEnabled({ timeout: 15000 })
    await backButton.touchAction('tap')
    await shipperCompassAllOpenlerts.waitForDisplayed({ timeout: 15000 })
    await shipperCompassAllOpenlerts.waitForEnabled({ timeout: 15000 })
    }
    catch (error){
        console.log(error)
    }
    await this.driver.touchPerform([
        {action: "longPress", options: {x: 17, y: 683}},
        { action: 'wait', options: { ms: 100 }},
        {action: "moveTo", options: {x: 17, y: 215}},
        {action: "release"},
    ])
    //Location Capacity Exceeded View
    
    await shipperCompassViewLocationCapacityExceededAlerts.waitForDisplayed({ timeout: 15000 })
    await shipperCompassViewLocationCapacityExceededAlerts.waitForEnabled({ timeout: 15000 })
    await shipperCompassViewLocationCapacityExceededAlerts.touchAction('tap')

    await shipperCompassViewLocationCapacityExceededTitle.waitForDisplayed({ timeout: 15000 })
    try{
    //===//
    await compassShipmentCard.waitForDisplayed({timeout: 15000})
    await shipperCompassViewShipmentButton.waitForDisplayed({timeout: 15000})
    await shipperCompassViewMapViewButton.waitForDisplayed({timeout: 15000})

    await shipperCompassViewMapViewButton.touchAction('tap')
    await mapView.waitForDisplayed({timeout: 15000})

    await shipperCompassViewShipmentButton.touchAction('tap')
    await backButton.touchAction('tap')
    await shipperCompassViewLocationCapacityExceededAlerts.waitForDisplayed({ timeout: 15000 })
    await shipperCompassViewLocationCapacityExceededAlerts.waitForEnabled({ timeout: 15000 })
    }
    catch (error){
        console.log(error)
    }
}
}

export default ShipperCompassPage