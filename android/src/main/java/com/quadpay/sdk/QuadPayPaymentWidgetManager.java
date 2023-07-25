package com.quadpay.sdk;

import androidx.annotation.Nullable;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.quadpay.quadpay.RNComponents.RNQuadPayPaymentWidget;

public class QuadPayPaymentWidgetManager extends SimpleViewManager<RNQuadPayPaymentWidget> {
   @Override
   public String getName() {
       return "RNQuadPayPaymentWidget";
   }
   ReactApplicationContext mCallerContext;

    public QuadPayPaymentWidgetManager(ReactApplicationContext reactContext) {
        mCallerContext = reactContext;
    }

   @Override
   protected RNQuadPayPaymentWidget createViewInstance(ThemedReactContext reactContext) {
       return new RNQuadPayPaymentWidget(reactContext);
   }

    @ReactProp(name = "merchantId")
    public void setMerchantId(RNQuadPayPaymentWidget view, @Nullable String text) {
        view.setMerchantId(text);
    }

    @ReactProp(name = "amount")
    public void setAmount(RNQuadPayPaymentWidget view, @Nullable String text){
        view.setAmount(text);
    }

    @ReactProp(name = "timelineColor")
    public void setTimelineColor(RNQuadPayPaymentWidget view, @Nullable String text){
        view.setTimelineColor(text);
    }

    @ReactProp(name = "hideSubtitle")
    public void setHideSubtitle(RNQuadPayPaymentWidget view, @Nullable String text){
        view.setHideSubtitle(text);
    }

    @ReactProp(name = "hideTimeline")
    public void setHideTimeline(RNQuadPayPaymentWidget view, @Nullable String text){
        view.setHideTimeline(text);
    }

    @ReactProp(name = "isMFPPMerchant")
    public void setIsMFPPMerchant(RNQuadPayPaymentWidget view, @Nullable String text){
        view.setIsMFPPMerchant(text);
    }

    @ReactProp(name = "minModal")
    public void setMinModal(RNQuadPayPaymentWidget view, @Nullable String text){
        view.setMinModal(text);
    }

    @ReactProp(name = "learnMoreUrl")
    public void setLearnMoreUrl(RNQuadPayPaymentWidget view, @Nullable String text){
        view.setLearnMoreUrl(text);
    }
}