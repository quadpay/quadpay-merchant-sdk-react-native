//
//  RNQuadPayWidget.m
//  quadpay-merchant-sdk-react-native
//
//  Created by Petros Andreou on 15/11/2022.
//
#import "RCTBridgeModule.h"
#import "React/RCTViewManager.h"

@interface RCT_EXTERN_MODULE(RNQuadPayWidgetManager, RCTViewManager)
RCT_EXPORT_VIEW_PROPERTY(amount, NSString)
RCT_EXPORT_VIEW_PROPERTY(merchantId, NSString)
RCT_EXPORT_VIEW_PROPERTY(size, NSString)
RCT_EXPORT_VIEW_PROPERTY(logoSize, NSString)
RCT_EXPORT_VIEW_PROPERTY(logoOption, NSString)
RCT_EXPORT_VIEW_PROPERTY(colorPrice, NSString)
RCT_EXPORT_VIEW_PROPERTY(minModal, NSString)
RCT_EXPORT_VIEW_PROPERTY(isMFPPMerchant, NSString)
RCT_EXPORT_VIEW_PROPERTY(learnMoreUrl, NSString)
RCT_EXPORT_VIEW_PROPERTY(min, NSString)
RCT_EXPORT_VIEW_PROPERTY(max, NSString)
RCT_EXPORT_VIEW_PROPERTY(alignment, NSString)
RCT_EXPORT_VIEW_PROPERTY(displayMode, NSString)
@end

