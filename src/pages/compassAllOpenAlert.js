class OpenAlert{
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
    async compassShipmentCard(){
        return await this.element("-ios class chain:**/XCUIElementTypeOther[`name == \"SWCompassShipmentListViewController\"`]/XCUIElementTypeTable/XCUIElementTypeCell[1]")
    }
    async shipperCompassViewShipmentButton(){
        return await this.element("-ios class chain:**/XCUIElementTypeStaticText[`label == \"SHIPMENT LIST\"`]")
    }
    async shipperCompassViewMapViewButton(){
        return await this.element("-ios class chain:**/XCUIElementTypeButton[`label == \"MAP VIEW\"`]")
    }
    async mapView(){
        return await this.element("-ios predicate string:type == \"XCUIElementTypeMap\" ")
    }
    async backButton(){
        return await this.element("~back icon")
    }
    async shipwellSpinner(){
        return await this.element('~ShipwellSpinner')
    }

async compassAllOpenAlert(timeOut=60000){

    const shipperCompassViewTitle= await this.shipperCompassViewTitle()
    const shipperCompassAllOpenlerts= await this.shipperCompassAllOpenlerts()
    const shipperCompassAllOpenTitle= await this.shipperCompassAllOpenTitle()
    const compassShipmentCard= await this.compassShipmentCard()
    const shipperCompassViewShipmentButton= await this.shipperCompassViewShipmentButton()
    const shipperCompassViewMapViewButton= await this.shipperCompassViewMapViewButton()
    const mapView= await this.mapView()
    const backButton= await this.backButton()
    const shipwellSpinner= await this.shipwellSpinner()
    
    await this.driver.pause(3000)
    if (await shipwellSpinner.isDisplayed()){
        await shipwellSpinner.waitForDisplayed({timeout: 50000, reverse: true})
    }
    await this.driver.pause(2000)
    console.log("TESTO Compass View")
    await this.driver.getPageSource()
    await shipperCompassViewTitle.waitForDisplayed({ timeout: timeOut })
    await shipperCompassViewTitle.waitForEnabled({ timeout: timeOut })
    await shipperCompassAllOpenlerts.waitForDisplayed({ timeout: timeOut })
    await shipperCompassAllOpenlerts.waitForEnabled({ timeout: timeOut })
    await shipperCompassAllOpenlerts.touchAction('tap')
    await this.driver.pause(1000)
    if (await shipwellSpinner.isDisplayed()){
        await shipwellSpinner.waitForDisplayed({timeout: 50000, reverse: true})
    }
    await this.driver.pause(1000)
    await shipperCompassAllOpenTitle.waitForDisplayed({ timeout: timeOut })

    await compassShipmentCard.waitForDisplayed({timeout: timeOut})
    await shipperCompassViewShipmentButton.waitForDisplayed({timeout: timeOut})
    await shipperCompassViewMapViewButton.waitForDisplayed({timeout: timeOut})

    /* Commenting until https://shipwell.atlassian.net/browse/FI-464 is fixed
    await shipperCompassViewMapViewButton.touchAction('tap')
    await mapView.waitForDisplayed({timeout: timeOut})
    await this.driver.pause(1000)
    await shipperCompassViewShipmentButton.touchAction('tap')*/

    await backButton.touchAction('tap')
    await this.driver.pause(1000)
    if (await shipwellSpinner.isDisplayed()){
        await shipwellSpinner.waitForDisplayed({timeout: 50000, reverse: true})
    }
}

}

export default OpenAlert