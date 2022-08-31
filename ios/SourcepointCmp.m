#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(SourcepointCmp, NSObject)

RCT_EXTERN_METHOD(multiply:(float)a withB:(float)b
                 withResolver:(RCTPromiseResolveBlock)resolve
                 withRejecter:(RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(init)

+ (BOOL)requiresMainQueueSetup
{
  return NO;
}

@end
