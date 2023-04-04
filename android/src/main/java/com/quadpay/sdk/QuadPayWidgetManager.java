package com.quadpay.sdk;

import androidx.annotation.Nullable;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.quadpay.quadpay.RNComponents.RNQuadPayWidget;

public class QuadPayWidgetManager extends SimpleViewManager<RNQuadPayWidget> {
   @Override
   public String getName() {
       return "RNQuadPayWidget";
   }
   ReactApplicationContext mCallerContext;

    public QuadPayWidgetManager(ReactApplicationContext reactContext) {
        mCallerContext = reactContext;
    }


   @Override
   protected RNQuadPayWidget createViewInstance(ThemedReactContext reactContext) {
       return new RNQuadPayWidget(reactContext);
   }

    @ReactProp(name = "merchantId")
    public void setMerchantId(RNQuadPayWidget view, @Nullable String text) {
        view.setMerchantId(text);
    }

    @ReactProp(name = "amount")
    public void setAmount(RNQuadPayWidget view, @Nullable String text){
        view.setAmount(text);
    }

    @ReactProp(name = "size")
    public void setSize(RNQuadPayWidget view, @Nullable String text){
        view.setSize(text);
    }

    @ReactProp(name = "alignment")
    public void setAlignment(RNQuadPayWidget view, @Nullable String text){
        view.setAlignment(text);
    }

    @ReactProp(name = "min")
    public void setMin(RNQuadPayWidget view, @Nullable String text){
        view.setMin(text);
    }

    @ReactProp(name = "max")
    public void setMax(RNQuadPayWidget view, @Nullable String text){
        view.setMax(text);
    }

    @ReactProp(name = "colorPrice")
    public void setColorPrice(RNQuadPayWidget view, @Nullable String text){
        view.setColorPrice(text);
    }

    @ReactProp(name = "logoOption")
    public void setLogoOption(RNQuadPayWidget view, @Nullable String text){
        view.setLogoOption(text);
    }

    @ReactProp(name = "displayMode")
    public void setDisplayMode(RNQuadPayWidget view, @Nullable String text){
        view.setDisplayMode(text);
    }

    @ReactProp(name = "logoSize")
    public void setLogoSize(RNQuadPayWidget view, @Nullable String text){
        view.setLogoSize(text);
    }

    @ReactProp(name = "isMFPPMerchant")
    public void setIsMFPPMerchant(RNQuadPayWidget view, @Nullable String text){
        view.setIsMFPPMerchant(text);
    }

    @ReactProp(name = "minModal")
    public void setMinModal(RNQuadPayWidget view, @Nullable String text){
        view.setMinModal(text);
    }

    @ReactProp(name = "learnMoreUrl")
    public void setLearnMoreUrl(RNQuadPayWidget view, @Nullable String text){
        view.setLearnMoreUrl(text);
    }

    
}