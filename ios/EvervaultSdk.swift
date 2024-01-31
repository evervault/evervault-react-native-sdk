import Evervault

@objc(EvervaultSdk)
class EvervaultSdk: NSObject {
    let ev = Evervault(teamId: "team_197bf4c38e3c", appId: "app_43740bff0824")

    @objc(encrypt:withResolver:withRejecter:)
    func encrypt(value: Any, resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
        Task {
            do {
                let enc = try await ev.encrypt(value)
                resolve(enc)
            } catch {
                reject("Error", "Failed to encrypt: \(error.localizedDescription)", error)
            }
        }
    }
}
