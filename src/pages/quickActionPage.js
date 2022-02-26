class QuickActionPage{
    constructor(driver){
        this.driver=driver;
    }
    async element(selector){
        return await this.driver.$(selector)
    }
async shipperCompassOpenAllAlerts(){
    return await this.element('~ALL OPEN')
}
async shipperCompassOpenAllTitle(){
    return await this.element('-ios class chain:**/XCUIElementTypeStaticText[`label == \"ALL OPEN\"`]')
}
async shipmentListButton(){
    return await this.element('-ios class chain:**/XCUIElementTypeStaticText[`label == \"SHIPMENT LIST\"`]')
}
async mapViewButton(){
    return await this.element('-ios class chain:**/XCUIElementTypeStaticText[`label == \"MAP VIEW\"`]')
}
async mapPin1(){
    return await this.element('-ios class chain:**/XCUIElementTypeOther[`label == \"Map pin\"`][1]')
}
async shipwellSpinner(){
    return await this.element('~ShipwellSpinner')
}
async quickAction(){
    const shipperCompassOpenAllAlerts= await this.shipperCompassOpenAllAlerts()
    const shipperCompassOpenAllTitle= await this.shipperCompassOpenAllTitle()
    const shipmentListButton= await this.shipmentListButton()
    const mapViewButton= await this.mapViewButton()
    const mapPin1= await this.mapPin1()
    const shipwellSpinner= await this.shipwellSpinner()

    await shipperCompassOpenAllAlerts.waitForDisplayed({ timeout: 5000 })
    await shipperCompassOpenAllAlerts.touchAction('tap')
    await this.driver.pause(1000)
    if (await shipwellSpinner.isDisplayed()==true){
        await shipwellSpinner.waitForDisplayed({timeout: 15000, reverse: true})
    }
    else{
        await this.driver.pause(3000)
    }
    await shipperCompassOpenAllTitle.waitForDisplayed({ timeout: 5000 })

    await mapViewButton.waitForDisplayed({ timeout: 5000 })
    await mapViewButton.touchAction('tap')

    await shipperCompassOpenAllTitle.waitForDisplayed({ timeout: 5000 })
    await mapPin1.waitForDisplayed({ timeout: 5000 })
    
    await shipmentListButton.waitForDisplayed({ timeout: 5000 })
    await shipmentListButton.touchAction('tap')
    await this.driver.pause(2000)

}

}

export default QuickActionPage