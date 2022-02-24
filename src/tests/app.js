import * as webdriverio from "webdriverio";
import myCaps from "./myCaps";
import LanguagePage from "../pages/languagePage";
import LoginSDPage from "../pages/loginSDPage";
import ShipperCompassPage from "../pages/compassPage";
import QuickActionPage from "../pages/quickActionPage";
import ChatPage from "../pages/components/chat";
import DocUploadPage from "../pages/components/docUpload";
import InternalNotesPage from "../pages/components/internalNote";
import SideMenuPage from "../pages/sideMenuPage";
import ShipmentPage from "../pages/shipmentPage";
import InboxPage from "../pages/inboxPage";
import DispatcherOnboardingPage from "../pages/dispatcherOnboardingPage";
import LoadPage from "../pages/dispatcherLoadPage";
import PlaceBidPage from "../pages/components/placeBid";
import BookNow from "../pages/components/bookNow";
import TenderComponent from "../pages/components/tender";
import AssignDriverComponent from "../pages/components/assignDriver";
import CompassOpenAlert from "../pages/compassAllOpenAlert"
import CompassRunningLateAlert from "../pages/compassRunningLateAlert"
import CompassLatePickupAlert from "../pages/compassLatePickupAlert"
import CompassLateDeliveryAlert from "../pages/compassLateDeliveryAlert"
import CompassNotTrackingAlert from "../pages/compassNotTrackingAlert"
import CompassCarrierNotAssignedAlert from "../pages/compassCarrierNotAssignedAlert"
import CompassCarrierStatusAlert from "../pages/compassCarrierStatusAlert"

class App {
  constructor() {
    this.options = myCaps;
    this.driver = null;
  }

  async start() {
    this.driver = await webdriverio.remote(this.options);
    this.languagePage = new LanguagePage(this.driver);
    this.loginSDPage=  new LoginSDPage(this.driver);
    this.shipperCompassPage= new ShipperCompassPage(this.driver)
    this.quickActionPage= new QuickActionPage(this.driver)
    this.chatPage= new ChatPage(this.driver)
    this.docUploadPage= new DocUploadPage(this.driver)
    this.internalNotePage= new InternalNotesPage(this.driver)
    this.sideMenuPage= new SideMenuPage(this.driver)
    this.shipmentPage= new ShipmentPage(this.driver)
    this.inboxPage=  new InboxPage(this.driver)
    this.dispatcherOnboardingPage= new DispatcherOnboardingPage(this.driver)
    this.placeBidPage= new PlaceBidPage(this.driver)
    this.loadPage= new LoadPage(this.driver)
    this.bookNowComponent= new BookNow(this.driver)
    this.tenderComponent= new TenderComponent(this.driver)
    this.assignDriverComponent= new AssignDriverComponent(this.driver)
    this.compassOpenAlert= new CompassOpenAlert(this.driver)
    this.compassRunningLateAlert= new CompassRunningLateAlert(this.driver)
    this.compassLatePickupAlert= new CompassLatePickupAlert(this.driver)
    this.compassLateDeliveryAlert= new CompassLateDeliveryAlert(this.driver)
    this.compassNotTrackingAlert= new CompassNotTrackingAlert(this.driver)
    this.compassCarrierNotAssginedAlert=  new CompassCarrierNotAssignedAlert(this.driver)
    this.compassCarrierStatusAlert= new CompassCarrierStatusAlert(this.driver)
  }

  async stop() {
    await this.driver.deleteSession();
    this.driver = null;
  }
  async close() {
    await this.driver.closeApp();
  }
}

export default App;