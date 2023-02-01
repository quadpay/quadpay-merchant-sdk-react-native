package com.quadpay.sdk;

import androidx.annotation.Nullable;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.quadpay.quadpay.RNComponents.RNQuadPayPaymentWidget;

public class QuadPayWidgetManager extends SimpleViewManager<RNQuadPayPaymentWidget> {
   @Override
   public String getName() {
       return "RNQuadPayPaymentWidget";
   }
   ReactApplicationContext mCallerContext;

    public QuadPayWidgetManager(ReactApplicationContext reactContext) {
        mCallerContext = reactContext;
    }


   @Override
   protected RNQuadPayPaymentWidget createViewInstance(ThemedReactContext reactContext) {
       return new RNQuadPayPaymentWidget(reactContext);
   }

    @ReactProp(name = "merchantId")
    public void setMerchantId(RNQuadPayWidget view, @Nullable String text) {
        view.setMerchantId(text);
    }

    @ReactProp(name = "amount")
    public void setAmount(RNQuadPayWidget view, @Nullable String text){
        view.setAmount(text);
    }

    @ReactProp(name = "timelineColor")
    public void setColorPrice(RNQuadPayWidget view, @Nullable String text){
        view.setColorPrice(text);
    }

    @ReactProp(name = "hideHeader")
    public void setColorPrice(RNQuadPayWidget view, @Nullable String text){
        view.setColorPrice(text);
    }

    @ReactProp(name = "hideSubtitle")
    public void setColorPrice(RNQuadPayWidget view, @Nullable String text){
        view.setColorPrice(text);
    }

    @ReactProp(name = "hideTimeline")
    public void setColorPrice(RNQuadPayWidget view, @Nullable String text){
        view.setColorPrice(text);
    }

    @ReactProp(name = "isMFPPMerchant")
    public void setIsMFPPMerchant(RNQuadPayWidget view, @Nullable String text){
        view.setIsMFPPMerchant(text);
    }

    @ReactProp(name = "minModal")
    public void setminModal(RNQuadPayWidget view, @Nullable String text){
        view.setMinModal(text);
    }

    @ReactProp(name = "learnMoreUrl")
    public void setLearnMoreUrl(RNQuadPayWidget view, @Nullable String text){
        view.setLearnMoreUrl(text);
    }
}