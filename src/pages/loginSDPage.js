class LoginSDPage{
    constructor(driver){
        this.driver=driver;
    }
    async element(selector){
        return await this.driver.$(selector)
    }
async loginViewImDriverButton(){
    return await this.element("~I'm a Driver")
}
async loginViewIHaveShipwellAccountButton(){
    return await this.element("~I have a Shipwell Account")
}

//async loginViewSignInImage(){
  //  return await this.element("-ios class chain:**/XCUIElementTypeStaticText[`label == \"Sign In\"`][1]")
//}

async loginViewEmailInput(){
    return await this.element("-ios class chain:**/XCUIElementTypeTextField[`value == \"Email *\"`]")
}
async loginViewPasswordInput(){
    return await this.element("-ios class chain:**/XCUIElementTypeSecureTextField[`value == \"Password *\"`]")
}
/*
async loginViewRememberMeButton(){
    return await this.element("~remember me icon")
}
async loginViewRememberMeText(){
    return await this.element("~Remember Me")
}
*/
async loginViewSignInButton(){
    return await this.element("~Sign In")
}
async createAnAccountButton(){
    return await this.element("-ios class chain:**/XCUIElementTypeLink[`label == \"Create an Account\"`][2]")
}
async loginViewForgotPasswordButton(){
    return await this.element("-ios class chain:**/XCUIElementTypeStaticText[`label == \"Forgot Password\"`]")
}
/*async loginViewRememberMeSelected(){
    return await this.element("~remember me icon selected")
}*/
async shipwellSpinner(){
    return await this.element('~ShipwellSpinner')
}

async loginShipperDispatcher(email, password, timeOut=15000){
    const loginViewImDriverButton= await this.loginViewImDriverButton()
    const loginViewIHaveShipwellAccountButton= await this.loginViewIHaveShipwellAccountButton()
    //const loginViewSignInImage= await this.loginViewSignInImage()
    const loginViewEmailInput= await this.loginViewEmailInput()
    const loginViewPasswordInput= await this.loginViewPasswordInput()
    //const loginViewRememberMeButton= await this.loginViewRememberMeButton()
    //const loginViewRememberMeText= await this.loginViewRememberMeText()
    const loginViewSignInButton= await this.loginViewSignInButton()
    const createAnAccountButton= await this.createAnAccountButton()
    const loginViewForgotPasswordButton= await this.loginViewForgotPasswordButton()
    //const loginViewRememberMeSelected= await this.loginViewRememberMeSelected()
    const shipwellSpinner= await this.shipwellSpinner()

    await this.driver.pause(2000)
    await loginViewImDriverButton.waitForDisplayed({ timeout: timeOut })

    await loginViewIHaveShipwellAccountButton.waitForDisplayed({ timeout: timeOut })
    await loginViewIHaveShipwellAccountButton.touchAction('tap')
    await this.driver.pause(2000)
    
    //await loginViewSignInImage.waitForDisplayed({ timeout: 5000 })
    //await loginViewRememberMeText.waitForDisplayed({ timeout: 5000 })
    await createAnAccountButton.waitForDisplayed({ timeout: timeOut })
    await loginViewForgotPasswordButton.waitForDisplayed({ timeout: timeOut })

    await loginViewEmailInput.waitForDisplayed({ timeout: timeOut })
    await loginViewEmailInput.touchAction('tap')
    await loginViewEmailInput.setValue(email)

    await loginViewPasswordInput.waitForDisplayed({ timeout: timeOut })
    await loginViewPasswordInput.touchAction('tap')
    await loginViewPasswordInput.setValue(password)

    //await loginViewRememberMeButton.waitForDisplayed({ timeout: 5000 })
    //await loginViewRememberMeButton.touchAction('tap')

    //await loginViewRememberMeSelected.waitForDisplayed({ timeout: 5000 })
    //await loginViewRememberMeSelected.touchAction('tap')
    await loginViewSignInButton.waitForDisplayed({ timeout: 5000 })
    await loginViewSignInButton.touchAction('tap')
    await this.driver.pause(1000)
    if (await shipwellSpinner.isDisplayed()){
         await shipwellSpinner.waitForDisplayed({timeout: 15000, reverse: true})
         await this.driver.pause(1000)
        }
   
    await this.driver.pause(3000)
    
}
}

export default LoginSDPage