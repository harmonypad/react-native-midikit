#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(Midikit, NSObject)

RCT_EXTERN_METHOD(multiply:(float)a withB:(float)b
                 withResolver:(RCTPromiseResolveBlock)resolve
                 withRejecter:(RCTPromiseRejectBlock)reject)
RCT_EXTERN_METHOD(start:(RCTPromiseResolveBlock)resolve withRejecter:(RCTPromiseRejectBlock)reject)
RCT_EXTERN_METHOD(sendMidiMessage: (nonnull NSString *)n a: (nonnull NSNumber *)a b: (nonnull NSNumber *)b  c: (nonnull NSNumber *)c )
+ (BOOL)requiresMainQueueSetup
{
  return NO;
}

@end
