import Foundation
import ConsentViewController

@objc(SourcepointCmp)
class SourcepointCmp: NSObject {

    lazy var consentManager: SPConsentManager = { SPConsentManager(
        accountId: 1,
        propertyName: try! SPPropertyName("1"),
        campaignsEnv: .Public,
        campaigns: SPCampaigns(
            gdpr: SPCampaign()
        ),
        delegate: self
    )}()

    @objc(init)
    override init() {
        super.init()
    }

  @objc(multiply:withB:withResolver:withRejecter:)
  func multiply(a: Float, b: Float, resolve:RCTPromiseResolveBlock,reject:RCTPromiseRejectBlock) -> Void {
    resolve(a*b)
  }
}
