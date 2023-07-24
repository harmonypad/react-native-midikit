import Foundation

@objc(Midikit)
class Midikit: NSObject {

  @objc(multiply:withB:withResolver:withRejecter:)
  func multiply(a: Float, b: Float, resolve:RCTPromiseResolveBlock,reject:RCTPromiseRejectBlock) -> Void {
    print("multiply")
    resolve(a*b)
  }
    
  @objc
  func sendMidiMessage(_ n: NSString, a: NSNumber, b: NSNumber, c: NSNumber) {
      let formattedString = "send midi: \(a), \(b), \(c)"
      NSLog("%@", formattedString)
      print("hello world")
    }
}
