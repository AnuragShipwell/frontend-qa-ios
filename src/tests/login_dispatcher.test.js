import App from "./app"
describe("iOS mobileApp test", () => {
  let app;

  beforeAll(async () => {
    app = new App();
    await app.start();
  });

  afterAll(async () => {
    await app.stop();
  });

test("==001==> CHECK IOS APP INSTALLATION and VERIFY TEST bundleID", async () => {
    expect(await app.driver.isAppInstalled("com.shipwell.testflight")).toBe(true);
    app.driver.pause(2000)
});
test("==002==> TESTING DISPATCHER LAUNGUAGE VIEW LOGIN", async () => {
  await app.languagePage.languageSelectionFlow()
});

test("==003==> TESTING DISPATCHER LOGIN FLOW", async () => {
  await app.loginSDPage.loginShipperDispatcher("anurag+d001@shipwell.com", "Shiptest%")
});

test("==004==> TESTING DISPATCHER ONBOARDING SCREENS", async () => {
  await app.dispatcherOnboardingPage.dispatcherOnboarding()
});

test("==005==> TESTING DISPATCHER LOAD BOARD VIEW", async () => {
  await app.loadPage.dispatcherLoad()
  await app.chatPage.chat()
});
test("==006==> TESTING DISPATCHER LOAD BOARD BOOK NOW", async () => {
  await app.bookNowComponent.bookNow()
});

test("==007==> TESTING DISPATCHER PLACE BID VIEW", async () => {
  await app.placeBidPage.placeBid('LIDT2CGWP', '100')
});
test("==008==> TESTING DISPATCHER TENDER VIEW", async () => {
  await app.tenderComponent.tender()
});

test("==009==> TESTING DISPATCHER SHIPMENT BOARD VIEW", async () => {
  await app.shipmentPage.shipment("5RUCFH")
});
test("==010==> TESTING DISPATCHER SHIPMENT BOARD ASSIGN DRIVER", async () => {
  await app.assignDriverComponent.assignDriver()
});

test("==011==> TESTING INBOX VIEW", async () => {
  await app.inboxPage.inbox()

});

});