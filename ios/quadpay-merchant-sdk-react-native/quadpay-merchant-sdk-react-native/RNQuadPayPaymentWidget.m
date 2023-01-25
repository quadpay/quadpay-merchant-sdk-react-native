//
//  RNQuadPayPaymentWidget.m
//  quadpay-merchant-sdk-react-native
//
//  Created by Petros Andreou on 25/01/2023.
//

#import "RCTBridgeModule.h"
#import "React/RCTViewManager.h"

@interface RCT_EXTERN_MODULE(RNQuadPayPaymentWidgetManager, RCTViewManager)
RCT_EXPORT_VIEW_PROPERTY(amount, NSString)
RCT_EXPORT_VIEW_PROPERTY(merchantId, NSString)
RCT_EXPORT_VIEW_PROPERTY(timelapseColor, NSString)
RCT_EXPORT_VIEW_PROPERTY(hideHeader, bool)
RCT_EXPORT_VIEW_PROPERTY(hideSubtitle, bool)
RCT_EXPORT_VIEW_PROPERTY(hideTimeline, bool)
RCT_EXPORT_VIEW_PROPERTY(isMFPPMerchant, NSString)
RCT_EXPORT_VIEW_PROPERTY(learnMoreUrl, NSString)
RCT_EXPORT_VIEW_PROPERTY(minModal, NSString)
@end
