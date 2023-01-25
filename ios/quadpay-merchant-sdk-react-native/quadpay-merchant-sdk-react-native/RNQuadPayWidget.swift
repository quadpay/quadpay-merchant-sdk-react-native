//
//  RNQuadPayWidget.swift
//  quadpay-merchant-sdk-react-native
//
//  Created by Petros Andreou on 15/11/2022.
//

import Foundation
import QuadPaySDK


@objc(RNQuadPayWidgetManager)
class RNQuadPayWidgetManager: RCTViewManager{

    @objc var quadpayWidget = QuadPayWidgetComponent()
   
    override func view() -> UIView!{

        return quadpayWidget
    }

    override static func requiresMainQueueSetup() -> Bool {
        return true
    }
}
