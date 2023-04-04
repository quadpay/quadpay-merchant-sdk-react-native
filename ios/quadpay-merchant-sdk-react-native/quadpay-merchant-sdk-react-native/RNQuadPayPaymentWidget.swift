//
//  RNQuadPayPaymentWidget.swift
//  quadpay-merchant-sdk-react-native
//
//  Created by Petros Andreou on 25/01/2023.
//

import Foundation
import QuadPaySDK

@objc(RNQuadPayPaymentWidgetManager)
class RNQuadPayPaymentWidgetManager: RCTViewManager{

    @objc var quadpayPaymentWidget = RNPaymentWidget()
   
    override func view() -> UIView!{
        return quadpayPaymentWidget
    }

    override static func requiresMainQueueSetup() -> Bool {
        return true
    }
}
