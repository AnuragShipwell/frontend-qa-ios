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
async loginViewSignInImage(){
    return await this.element("-ios class chain:**/XCUIElementTypeStaticText[`label == \"Sign In\"`][1]")
}
async loginViewEmailInput(){
    return await this.element("~enterEmail")
}
async loginViewPasswordInput(){
    return await this.element("~enterPassword")
}
async loginViewRememberMeButton(){
    return await this.element("~remember me icon")
}
async loginViewRememberMeText(){
    return await this.element("~Remember Me")
}
async loginViewSignInButton(){
    return await this.element("-ios class chain:**/XCUIElementTypeStaticText[`label == \"Sign In\"`][2]")
}
async loginViewSignUpText(){
    return await this.element("~Don't have an account? Sign Up")
}
async loginViewForgotPasswordButton(){
    return await this.element("~Forgot Password")
}
async loginViewRememberMeSelected(){
    return await this.element("~remember me icon selected")
}

async loginShipperDispatcher(email, password){
    const loginViewImDriverButton= await this.loginViewImDriverButton()
    const loginViewIHaveShipwellAccountButton= await this.loginViewIHaveShipwellAccountButton()
    const loginViewSignInImage= await this.loginViewSignInImage()
    const loginViewEmailInput= await this.loginViewEmailInput()
    const loginViewPasswordInput= await this.loginViewPasswordInput()
    const loginViewRememberMeButton= await this.loginViewRememberMeButton()
    const loginViewRememberMeText= await this.loginViewRememberMeText()
    const loginViewSignInButton= await this.loginViewSignInButton()
    const loginViewSignUpText= await this.loginViewSignUpText()
    const loginViewForgotPasswordButton= await this.loginViewForgotPasswordButton()
    const loginViewRememberMeSelected= await this.loginViewRememberMeSelected()

    await this.driver.pause(2000)
    await loginViewImDriverButton.waitForDisplayed({ timeout: 5000 })

    await loginViewIHaveShipwellAccountButton.waitForDisplayed({ timeout: 5000 })
    await loginViewIHaveShipwellAccountButton.touchAction('tap')
    
    await loginViewSignInImage.waitForDisplayed({ timeout: 5000 })
    await loginViewRememberMeText.waitForDisplayed({ timeout: 5000 })
    await loginViewSignUpText.waitForDisplayed({ timeout: 5000 })
    await loginViewForgotPasswordButton.waitForDisplayed({ timeout: 5000 })

    await loginViewEmailInput.waitForDisplayed({ timeout: 5000 })
    await loginViewEmailInput.touchAction('tap')
    await loginViewEmailInput.setValue(email)

    await loginViewPasswordInput.waitForDisplayed({ timeout: 5000 })
    await loginViewPasswordInput.touchAction('tap')
    await loginViewPasswordInput.setValue(password)

    await loginViewRememberMeButton.waitForDisplayed({ timeout: 5000 })
    await loginViewRememberMeButton.touchAction('tap')

    await loginViewRememberMeSelected.waitForDisplayed({ timeout: 5000 })
    await loginViewRememberMeSelected.touchAction('tap')
    await loginViewSignInButton.waitForDisplayed({ timeout: 5000 })
    await loginViewSignInButton.touchAction('tap')
    await this.driver.pause(2000)
}
}

export default LoginSDPage