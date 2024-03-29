class CompassNotTrackingAlert{
    constructor(driver){
        this.driver=driver;
    }
    async element(selector){
        return await this.driver.$(selector)
    }
    async shipperCompassViewNotTrackingAlerts(){
        return await this.element("~Not Tracking")
    }
    async shipperCompassViewNotTrackingTitle(){
        return await this.element('-ios class chain:**/XCUIElementTypeStaticText[`label == \"Not Tracking\"`]')
    }
    async compassShipmentCard(){
        return await this.element("-ios class chain:**/XCUIElementTypeOther[`name == \"SWCompassShipmentListViewController\"`]/XCUIElementTypeTable/XCUIElementTypeCell[1]")
    }
    async compassShipmentCard02(){
        return await this.element("//XCUIElementTypeOther[@name=\"SWCompassShipmentListViewController\"]/XCUIElementTypeTable/XCUIElementTypeCell[2]")
    }
    async shipperCompassViewShipmentButton(){
        return await this.element("-ios class chain:**/XCUIElementTypeStaticText[`label == \"SHIPMENT LIST\"`]")
    }
    async shipperCompassViewMapViewButton(){
        return await this.element("-ios class chain:**/XCUIElementTypeStaticText[`label == \"MAP VIEW\"`]")
    }
    async mapView(){
        return await this.element("-ios predicate string:type == \"XCUIElementTypeMap\" ")
    }
    async shipwellSpinner(){
        return await this.element('~ShipwellSpinner')
    }
    async NTDriverSection(){
        return await this.element('-ios class chain:**/XCUIElementTypeStaticText[`label == \"Drivers\"`]')
    }
    async NTdriverPhoneText(){
        return await this.element('-ios class chain:**/XCUIElementTypeStaticText[`label CONTAINS[c] \"Phone:\"`]')
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
    async NTSelectPowerUnit(){
        return await this.element('(//XCUIElementTypeTextField[@name=\"enterEmail\"])[1]')
    }
    async NTSelectPowerUnitResult(){
        return await this.element('//XCUIElementTypeTable/XCUIElementTypeCell[1]/XCUIElementTypeOther/XCUIElementTypeOther')
    }
    async NTSelectTrailer(){
        return await this.element('(//XCUIElementTypeTextField[@name=\"enterEmail\"])[2]')
    }
    async doneButton(){
        return await this.element("~Done")
    }
    async NTAssignButton(){
        return await this.element('-ios class chain:**/XCUIElementTypeButton[`label == \"Assign\"`]')
    }
    async compassActionButton(){
        return await this.element('~Actions')
    }
    async NTAddLocationEventOnTimeLineButton(){
        return await this.element('~Add Location Event')
    }
    async NTSendNotTrackingEmailButton(){
        return await this.element('~Send Not Tracking Email')
    }
    async NTSendEmailCarrierContact(){
        return await this.element('-ios class chain:**/XCUIElementTypeStaticText[`label CONTAINS[c] \"Carrier\"`]')
    }
    async NTSendEmailStop1Contact(){
        return await this.element('-ios class chain:**/XCUIElementTypeStaticText[`label CONTAINS[c] \"Stop 1\"`]')
    }
    async NTSendEmailStop2Contact(){
        return await this.element('-ios class chain:**/XCUIElementTypeStaticText[`label CONTAINS[c] \"Stop 2\"`]')
    }
    async NTSendEmailAdditionalContact(){
        return await this.element('-ios class chain:**/XCUIElementTypeTextField[`label == \"enterEmail\"`][1]')
    }
    async NTSendEmailSelectTemplate(){
        return await this.element('-ios class chain:**/XCUIElementTypeTextField[`label == \"enterEmail\"`][2]')
    }
    async NTSendEmailCustomerMessage(){
        return await this.element('//XCUIElementTypeOther[2]/XCUIElementTypeOther[2]')
    }
    async NTAdddEventlocationZipCode(){
        return await this.element('-ios class chain:**/XCUIElementTypeTextField[`label == \"enterEmail\"`][3]')
    }
    async NTAdddEventlocationZipCodeResult(){
        return await this.element('~Austin, TX 78746, US')
    }
    async NTAddEventDescription(){
        return await this.element('-ios class chain:**/XCUIElementTypeTextField[`label == \"enterEmail\"`][1]')
    }
    async saveButton(){
        return await this.element('-ios class chain:**/XCUIElementTypeStaticText[`label == \"Save\"`]')
    }
    async backButton(){
        return await this.element("~back icon")
    }
    async compassNotTrackingAlert(timeOut=60000){
        const shipperCompassViewNotTrackingAlerts= await this.shipperCompassViewNotTrackingAlerts()
        const shipperCompassViewNotTrackingTitle= await this.shipperCompassViewNotTrackingTitle()
        const compassShipmentCard= await this.compassShipmentCard()
        const compassShipmentCard02= await this.compassShipmentCard02()
        const shipperCompassViewShipmentButton= await this.shipperCompassViewShipmentButton()
        const shipperCompassViewMapViewButton= await this.shipperCompassViewMapViewButton()
        const mapView= await this.mapView()
        const shipwellSpinner= await this.shipwellSpinner()
        const NTDriverSection= await this.NTDriverSection()
        const NTdriverPhoneText= await this.NTdriverPhoneText()
        const NTDriverCallButton= await this.NTDriverCallButton()
        const NTShipwellAppTrackingSection= await this.NTShipwellAppTrackingSection()
        const NTStartAppTrackingButton= await this.NTStartAppTrackingButton()
        const NTRequestAppInstall= await this.NTRequestAppInstall()
        const NTEquipmentSection= await this.NTEquipmentSection()
        const NTDriverAndEquipmentHeader= await this.NTDriverAndEquipmentHeader()
        const NTDriverPhoneNumberInput= await this.NTDriverPhoneNumberInput()
        const NTSelectPowerUnit= await this.NTSelectPowerUnit()
        const NTSelectPowerUnitResult= await this.NTSelectPowerUnitResult()
        const NTSelectTrailer= await this.NTSelectTrailer()
        const doneButton= await this.doneButton()
        const NTAssignButton= await this.NTAssignButton()
        const compassActionButton= await this.compassActionButton()
        const NTAddLocationEventOnTimeLineButton= await this.NTAddLocationEventOnTimeLineButton()
        const NTSendNotTrackingEmailButton= await this.NTSendNotTrackingEmailButton()
        const NTSendEmailCarrierContact= await this.NTSendEmailCarrierContact()
        const NTSendEmailStop1Contact= await this.NTSendEmailStop1Contact()
        const NTSendEmailStop2Contact= await this.NTSendEmailStop2Contact()
        const NTSendEmailAdditionalContact= await this.NTSendEmailAdditionalContact()
        const NTSendEmailSelectTemplate= await this.NTSendEmailSelectTemplate()
        const NTSendEmailCustomerMessage= await this.NTSendEmailCustomerMessage()
        const NTAdddEventlocationZipCode= await this.NTAdddEventlocationZipCode()
        const NTAdddEventlocationZipCodeResult= await this.NTAdddEventlocationZipCodeResult()
        const NTAddEventDescription= await this.NTAddEventDescription()
        const saveButton= await this.saveButton()
        const backButton= await this.backButton()

        await this.driver.pause(1000)
        if (await shipwellSpinner.isDisplayed()){
            await shipwellSpinner.waitForDisplayed({timeout: 35000, reverse: true})
        }
        await this.driver.pause(3000)

        if (await shipperCompassViewNotTrackingAlerts.isDisplayed()==false){
            await this.driver.touchPerform([
                {action: "longPress", options: {x: 14, y: 215}},
                { action: 'wait', options: { ms: 100 }},
                {action: "moveTo", options: {x: 14, y: 700}},
                {action: "release"},
            ])
            if(await shipperCompassViewNotTrackingAlerts.isDisplayed()==false){
                await this.driver.touchPerform([
                    {action: "longPress", options: {x: 14, y: 700}},
                    { action: 'wait', options: { ms: 100 }},
                    {action: "moveTo", options: {x: 14, y: 215}},
                    {action: "release"},
                ])
            }
        }
        if (await doneButton.isDisplayed()){
            await doneButton.touchAction('tap')
        } 
        //Not Tracking View
        await this.driver.pause(1000)
        await shipperCompassViewNotTrackingAlerts.touchAction('tap')
        await this.driver.pause(1000)
        try{
            if (await shipwellSpinner.isDisplayed()){
                await shipwellSpinner.waitForDisplayed({timeout: timeOut, reverse: true})
            }
            await this.driver.pause(1000)
            await shipperCompassViewNotTrackingTitle.waitForDisplayed({ timeout: timeOut })
            await compassShipmentCard.waitForDisplayed({timeout: timeOut})
            await shipperCompassViewShipmentButton.waitForDisplayed({timeout: timeOut})
            await shipperCompassViewMapViewButton.waitForDisplayed({timeout: timeOut})

            await shipperCompassViewMapViewButton.touchAction('tap')
            await mapView.waitForDisplayed({timeout: timeOut})

            await shipperCompassViewShipmentButton.touchAction('tap')
            await compassShipmentCard.waitForDisplayed({timeout: timeOut})

            await compassShipmentCard.touchAction('tap')
            await this.driver.pause(3000)
            if (await compassShipmentCard.isDisplayed()){
                await compassShipmentCard02.waitForDisplayed({timeout: timeOut})
                await compassShipmentCard02.touchAction('tap')
            }
            await this.driver.pause(1000)
            if (await shipwellSpinner.isDisplayed()){
                await shipwellSpinner.waitForDisplayed({timeout: timeOut, reverse: true})
            }
            await this.driver.pause(1000)
            await NTDriverSection.waitForDisplayed({timeout: timeOut})
            if (await NTdriverPhoneText.isDisplayed()){
                    await NTDriverCallButton.waitForDisplayed({timeout: timeOut})
                }
            await NTShipwellAppTrackingSection.waitForDisplayed({timeout: timeOut})
            await NTStartAppTrackingButton.waitForDisplayed({timeout: timeOut})
            await NTRequestAppInstall.waitForDisplayed({timeout: timeOut})
            await NTEquipmentSection.waitForDisplayed({timeout: timeOut})
            await this.driver.pause(1000)
        //Driver section
            await NTDriverSection.waitForDisplayed({timeout: timeOut})
            await NTDriverSection.touchAction('tap')
            await NTDriverAndEquipmentHeader.waitForDisplayed({timeout: timeOut})
            await NTDriverPhoneNumberInput.waitForDisplayed({timeout: timeOut})
            await NTDriverPhoneNumberInput.clearValue()
            await NTDriverPhoneNumberInput.setValue('15128064080')
            await NTSelectPowerUnit.waitForDisplayed({timeout: timeOut})
            await NTSelectPowerUnit.touchAction('tap')
            await NTSelectPowerUnitResult.waitForDisplayed({timeout: timeOut})
            await NTSelectPowerUnitResult.touchAction('tap')
            await NTSelectTrailer.waitForDisplayed({timeout: timeOut})
            await NTSelectTrailer.clearValue()
            await NTSelectTrailer.setValue('Ford')
            await this.driver.pause(1000)
            if (await doneButton.isDisplayed()){
                await doneButton.touchAction('tap')
            }
            await this.driver.pause(1000)
            await NTAssignButton.waitForDisplayed({timeout: timeOut})
            await NTAssignButton.touchAction('tap')
            await this.driver.pause(1000)
            if (await shipwellSpinner.isDisplayed()){
                await shipwellSpinner.waitForDisplayed({timeout: timeOut, reverse: true})
            }
            else if (await NTAssignButton.isDisplayed()){
                await this.driver.pause(4000)
                await backButton.touchAction('tap')
                await this.driver.pause(1000)
                if (await shipwellSpinner.isDisplayed()){
                    await shipwellSpinner.waitForDisplayed({timeout: timeOut, reverse: true})
                }
            }
            await this.driver.pause(3000)

        //Send Email
            await compassActionButton.waitForDisplayed({timeout: timeOut})
            await compassActionButton.touchAction('tap')
            await this.driver.pause(1000)
            await NTAddLocationEventOnTimeLineButton.waitForDisplayed({timeout: timeOut})
            await NTSendNotTrackingEmailButton.waitForDisplayed({timeout: timeOut})
            
            await NTSendNotTrackingEmailButton.touchAction('tap')
            await this.driver.pause(1000)
            
            if (await shipwellSpinner.isDisplayed()){
                await shipwellSpinner.waitForDisplayed({timeout: timeOut, reverse: true})
            }

            await NTSendEmailCarrierContact.waitForDisplayed({timeout: timeOut})
            await NTSendEmailStop1Contact.waitForDisplayed({timeout: timeOut})
            await NTSendEmailStop2Contact.waitForDisplayed({timeout: timeOut})
            await NTSendEmailAdditionalContact.waitForDisplayed({timeout: timeOut})
            await NTSendEmailAdditionalContact.setValue('anurag371@gmail.com')
            await this.driver.pause(1000)
            if (await doneButton.isDisplayed()){
                await doneButton.touchAction('tap')
            }
            await NTSendEmailSelectTemplate.waitForDisplayed({timeout: timeOut})
            await NTSendEmailCustomerMessage.waitForDisplayed({timeout: timeOut})
            await NTSendEmailCustomerMessage.setValue('Testing, kindly ignore')
            await this.driver.pause(1000)
            if (await doneButton.isDisplayed()){
                await doneButton.touchAction('tap')
            }
            await saveButton.touchAction('tap')
            await this.driver.pause(1000)
            if (await shipwellSpinner.isDisplayed()){
                await shipwellSpinner.waitForDisplayed({timeout: timeOut, reverse: true})
            }
            await this.driver.pause(5000)
            await backButton.waitForDisplayed({timeout: timeOut})
            await backButton.touchAction('tap')
            await this.driver.pause(1000)
            if (await shipwellSpinner.isDisplayed()){
                await shipwellSpinner.waitForDisplayed({timeout: timeOut, reverse: true})
            }
        }
        catch (error){
            console.log(error)
        }
    }
}

export default CompassNotTrackingAlert