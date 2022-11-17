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

    @objc var priceBreakdown2 = PriceBreakdownView()
   
    override func view() -> UIView!{

        return priceBreakdown2
    }

    override static func requiresMainQueueSetup() -> Bool {
        return true
    }
}
