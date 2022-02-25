class RunningLateAlert{
    constructor(driver){
        this.driver=driver;
    }
    async element(selector){
        return await this.driver.$(selector)
    }
    async shipperCompassViewRunningLateAlerts(){
        return await this.element('~Running Late')
    }
    async shipperCompassViewRunningLateTitle(){
        return await this.element('-ios class chain:**/XCUIElementTypeStaticText[`label == \"Running Late\"`]')
    }
    async compassShipmentCard(){
        return await this.element("-ios class chain:**/XCUIElementTypeOther[`name == \"SWCompassShipmentListViewController\"`]/XCUIElementTypeTable/XCUIElementTypeCell[1]")
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
    async compassActionButton(){
        return await this.element('-ios class chain:**/XCUIElementTypeButton[`label == \"sendVerification\"`]') 
    }
    async editDeliveryAppointmentTime(){
        return await this.element("~Edit Delivery Appointment")
    }
    async saveButton(){
        return await this.element('-ios class chain:**/XCUIElementTypeStaticText[`label == \"Save\"`]')
    }
    async cancelButton(){
        return await this.element("-ios class chain:**/XCUIElementTypeButton[`label == \"Cancel\"`]")
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
    async timePickerWheelMinutes(){
        return await this.element("//XCUIElementTypeApplication[@name=\"Test Freight\"]/XCUIElementTypeWindow[3]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeDatePicker/XCUIElementTypePicker/XCUIElementTypePickerWheel[3]")
    }
    async checkOutEventTime(){
        return await this.element("-ios class chain:**/XCUIElementTypeTextField[`label == \"enterEmail\"`][2]")
    }
    async doneButton(){
        return await this.element("~Done")
    }
    async yesButton(){
        return await this.element("-ios class chain:**/XCUIElementTypeStaticText[`label == \"Yes\"`]")
    }
    async backButton(){
        return await this.element("~back icon")
    }
    async stopDetailsbackButton(){
        return await this.element("~StopDetailsBackBtn")
    }
    async dismissButton(){
        return await this.element('~Dismiss')
    }
    async buttonActionSheet(){
        return await this.element("-ios class chain:**/XCUIElementTypeWindow[1]/XCUIElementTypeOther[2]/XCUIElementTypeSheet")
    }

    async compassRunningLateAlert(){
    const shipperCompassViewRunningLateAlerts= await this.shipperCompassViewRunningLateAlerts()
    const shipperCompassViewRunningLateTitle= await this.shipperCompassViewRunningLateTitle()
    const compassShipmentCard= await this.compassShipmentCard()
    const shipperCompassViewShipmentButton= await this.shipperCompassViewShipmentButton()
    const shipperCompassViewMapViewButton= await this.shipperCompassViewMapViewButton()
    const mapView= await this.mapView()
    const shipwellSpinner= await this.shipwellSpinner()
    const compassActionButton= await this.compassActionButton()
    const editDeliveryAppointmentTime= await this.editDeliveryAppointmentTime()
    const saveButton= await this.saveButton()
    const cancelButton= await this.cancelButton()
    const markStopCompleteButton= await this.markStopCompleteButton()
    const checkInTimeText= await this.checkInTimeText()
    const checkOutTimeText= await this.checkOutTimeText()
    const checkInEventTime= await this.checkInEventTime()
    const timePickerWheelMinutes= await this.timePickerWheelMinutes()
    const checkOutEventTime= await this.checkOutEventTime()
    const doneButton= await this.doneButton()
    const yesButton= await this.yesButton()
    const backButton= await this.backButton()
    const stopDetailsbackButton= await this.stopDetailsbackButton()
    const dismissButton= await this.dismissButton()
    const buttonActionSheet= await this.buttonActionSheet()

    if (await shipperCompassViewRunningLateAlerts.isDisplayed()==false){
        await this.driver.touchPerform([
            {action: "longPress", options: {x: 14, y: 215}},
            { action: 'wait', options: { ms: 100 }},
            {action: "moveTo", options: {x: 14, y: 680}},
            {action: "release"},
        ])
        if(await shipperCompassViewRunningLateAlerts.isDisplayed()==false){
            await this.driver.touchPerform([
                {action: "longPress", options: {x: 14, y: 680}},
                { action: 'wait', options: { ms: 100 }},
                {action: "moveTo", options: {x: 14, y: 215}},
                {action: "release"},
            ])
        }
    }
    await shipperCompassViewRunningLateAlerts.waitForDisplayed({ timeout: 15000 })
    await shipperCompassViewRunningLateAlerts.waitForEnabled({ timeout: 15000 })
    await shipperCompassViewRunningLateAlerts.touchAction('tap')
    try{
        await shipperCompassViewRunningLateTitle.waitForDisplayed({ timeout: 15000 })
        await compassShipmentCard.waitForDisplayed({timeout: 15000})
        await shipperCompassViewShipmentButton.waitForDisplayed({timeout: 15000})
        await shipperCompassViewMapViewButton.waitForDisplayed({timeout: 15000})

        await shipperCompassViewMapViewButton.touchAction('tap')
        await mapView.waitForDisplayed({timeout: 15000})
        await shipperCompassViewShipmentButton.touchAction('tap')
        await compassShipmentCard.waitForDisplayed({timeout: 15000})
        await compassShipmentCard.touchAction('tap')
        await this.driver.pause(2000)

        await compassActionButton.waitForDisplayed({timeout: 15000})
        await compassActionButton.touchAction('tap')
        //Edit Appointment Time
        if (await editDeliveryAppointmentTime.isDisplayed()==true){
            await editDeliveryAppointmentTime.touchAction('tap')
            await this.driver.pause(1000)
            if (await shipwellSpinner.isDisplayed()){
                await shipwellSpinner.waitForDisplayed({timeout: 15000, reverse: true})
            }
            await saveButton.touchAction('tap')
            await this.driver.pause(1000)
            if (await shipwellSpinner.isDisplayed()){
                await shipwellSpinner.waitForDisplayed({timeout: 15000, reverse: true})
                await this.driver.pause(2000)
                await compassShipmentCard.waitForDisplayed({timeout: 10000})
                await compassShipmentCard.touchAction('tap')
                if (await shipwellSpinner.isDisplayed()){
                    await shipwellSpinner.waitForDisplayed({timeout: 15000, reverse: true})
                }
                await this.driver.pause(1000)
                await compassActionButton.waitForDisplayed({timeout: 15000})
                await compassActionButton.touchAction('tap')
            }
            else{
                await this.driver.pause(3000)
            }

            if (await cancelButton.isDisplayed()){
                await cancelButton.touchAction('tap')
                await compassActionButton.waitForDisplayed({timeout: 15000})
                await compassActionButton.touchAction('tap')
            }
       }

    //Mark as complete
        if (await markStopCompleteButton.isDisplayed() ){
        await markStopCompleteButton.touchAction('tap')
        await this.driver.pause(1000)
        if (await shipwellSpinner.isDisplayed()){
            await shipwellSpinner.waitForDisplayed({timeout: 15000, reverse: true})
        }
        await checkInTimeText.waitForDisplayed({timeout: 15000})
        await checkOutTimeText.waitForDisplayed({timeout: 15000})
        await checkInEventTime.touchAction('tap')
        await this.driver.pause(2000)
        await timePickerWheelMinutes.waitForDisplayed({timeout: 5000})
        await this.driver.pause(2000)
        await timePickerWheelMinutes.addValue('00')
        await this.driver.pause(2000)
        await checkOutEventTime.touchAction('tap')

        if (await doneButton.isDisplayed()){
            await doneButton.touchAction('tap')
        }
        await saveButton.touchAction('tap')
        await this.driver.pause(1000)
        if (await yesButton.isDisplayed()){
            await yesButton.touchAction('tap')
            await this.driver.pause(1000)
            if (await shipwellSpinner.isDisplayed()==true){
                await shipwellSpinner.waitForDisplayed({timeout: 15000, reverse: true})
            }
            else{
                await this.driver.pause(3000)
            }
            await this.driver.pause(2000)
            await backButton.waitForDisplayed({timeout: 15000})
            await backButton.touchAction('tap')
        }
        else if (await cancelButton.isDisplayed()){
            await cancelButton.touchAction('tap')
            await this.driver.pause(1000)
            await stopDetailsbackButton.waitForDisplayed({timeout: 15000})
            await stopDetailsbackButton.touchAction('tap')
            await this.driver.pause(1000)
            if (await shipwellSpinner.isDisplayed()==true){
                await shipwellSpinner.waitForDisplayed({timeout: 15000, reverse: true})
            }
            await this.driver.pause(1000)
            await backButton.waitForDisplayed({timeout: 15000})
            await backButton.touchAction('tap')
            await this.driver.pause(1000)
            if (await shipwellSpinner.isDisplayed()==true){
                await shipwellSpinner.waitForDisplayed({timeout: 15000, reverse: true})
            }
        }
        }
        else{
            if (await dismissButton.isDisplayed()){
            await dismissButton.touchAction('tap')
            await stopDetailsbackButton.waitForDisplayed({timeout: 15000})
            await stopDetailsbackButton.touchAction('tap')
            await this.driver.pause(1000)
            if (await shipwellSpinner.isDisplayed()==true){
                await shipwellSpinner.waitForDisplayed({timeout: 15000, reverse: true})
            }
            await this.driver.pause(2000)
            await backButton.waitForDisplayed({timeout: 15000})
            await backButton.touchAction('tap')
        }
    }
    await this.driver.pause(2000)
    }
    catch (error){
        console.log(error)
    }

}

}

export default RunningLateAlert