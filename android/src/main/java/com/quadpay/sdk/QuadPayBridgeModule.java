package com.quadpay.sdk;

import javax.annotation.Nullable;
import java.lang.Runnable;

import android.app.Activity;
import android.os.Handler;
import android.os.Looper;
import android.content.Intent;

import com.facebook.react.bridge.ActivityEventListener;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.modules.core.DeviceEventManagerModule;

import com.quadpay.quadpay.QuadPay;
import com.quadpay.quadpay.QuadPayCard;
import com.quadpay.quadpay.QuadPayCardholder;
import com.quadpay.quadpay.QuadPayCheckoutDetails;
import com.quadpay.quadpay.QuadPayVirtualCheckoutDelegate;
import com.quadpay.quadpay.QuadPayCheckoutDelegate;

class QuadPayBridgeSerializer {

    public static WritableMap toWritableMap(QuadPayCard c) {
        WritableMap params = Arguments.createMap();
        params.putString("brand", c.brand);
        params.putString("cvc", c.cvc);
        params.putString("expirationMonth", c.expirationMonth);
        params.putString("expirationYear", c.expirationYear);
        params.putString("number", c.number);
        return params;
    }

    public static WritableMap toWritableMap(QuadPayCardholder c) {
        WritableMap params = Arguments.createMap();
        params.putString("addressLine1", c.addressLine1);
        params.putString("addressLine2", c.addressLine2);
        params.putString("city", c.city);
        params.putString("name", c.name);
        params.putString("postalCode", c.postalCode);
        params.putString("state", c.state);
        return params;
    }

}

public class QuadPayBridgeModule extends ReactContextBaseJavaModule implements ActivityEventListener, QuadPayVirtualCheckoutDelegate, QuadPayCheckoutDelegate {

    boolean isVirtual;
    ReactApplicationContext mReactContext;

    public QuadPayBridgeModule(ReactApplicationContext reactContext) {
        super(reactContext);
        reactContext.addActivityEventListener(this);
        this.mReactContext = reactContext;
        this.isVirtual = false;
    }

    private void sendEvent(String eventName, @Nullable WritableMap params) {
        mReactContext
                .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                .emit(eventName, params);
    }

    @Override
    public String getName() {
        return "QuadPayBridge";
    }

    public void onNewIntent(Intent intent) {
    }

    public void onActivityResult(Activity activity, int requestCode, int resultCode, Intent data) {
        if (this.isVirtual) {
            if (QuadPay.handleQuadPayActivityResults(
                    (QuadPayVirtualCheckoutDelegate)this,
                    requestCode,
                    resultCode,
                    data
            )) {
                return;
            }
        } else {
            if (QuadPay.handleQuadPayActivityResults(
                    (QuadPayCheckoutDelegate)this,
                    requestCode,
                    resultCode,
                    data
            )) {
                return;
            }
        }

    }

    @ReactMethod
    public void initialize(String merchantId, String env, String locale) {
        QuadPay.initialize(new QuadPay.Configuration.Builder(merchantId)
                .setEnvironment(QuadPay.Environment.valueOf(env))
                .setLocale(QuadPay.Locale.valueOf(locale))
                .build()
        );
    }

    @ReactMethod
    public void startCheckout(
            String amount,
            String merchantReference,
            String customerFirstName,
            String customerEmail,
            String customerLastName,
            String customerPhoneNumber,
            String customerAddressLine1,
            String customerAddressLine2,
            String customerPostalCode,
            String customerCity,
            String customerState,
            String customerCountry
    ) {
        this.isVirtual = false;
        final QuadPayCheckoutDetails details = new QuadPayCheckoutDetails();
        details.amount = amount;
        details.merchantReference = merchantReference;
        details.customerFirstName = customerFirstName;
        details.customerEmail = customerEmail;
        details.customerLastName = customerLastName;
        details.customerPhoneNumber = customerPhoneNumber;
        details.customerAddressLine1 = customerAddressLine1;
        details.customerAddressLine2 = customerAddressLine2;
        details.customerPostalCode = customerPostalCode;
        details.customerCity = customerCity;
        details.customerState = customerState;
        details.customerCountry = customerCountry;

        new Handler(Looper.getMainLooper()).post(new Runnable() {
            @Override
            public void run() {
                QuadPay.startCheckout(getCurrentActivity(), details);
            }
        });
    }

    @ReactMethod
    public void startVirtualCheckout(
            String amount,
            String merchantReference,
            String customerFirstName,
            String customerEmail,
            String customerLastName,
            String customerPhoneNumber,
            String customerAddressLine1,
            String customerAddressLine2,
            String customerPostalCode,
            String customerCity,
            String customerState,
            String customerCountry
    ) {
        this.isVirtual = true;
        final QuadPayCheckoutDetails details = new QuadPayCheckoutDetails();
        details.amount = amount;
        details.merchantReference = merchantReference;
        details.customerFirstName = customerFirstName;
        details.customerEmail = customerEmail;
        details.customerLastName = customerLastName;
        details.customerPhoneNumber = customerPhoneNumber;
        details.customerAddressLine1 = customerAddressLine1;
        details.customerAddressLine2 = customerAddressLine2;
        details.customerPostalCode = customerPostalCode;
        details.customerCity = customerCity;
        details.customerState = customerState;
        details.customerCountry = customerCountry;

        new Handler(Looper.getMainLooper()).post(new Runnable() {
            @Override
            public void run() {
                QuadPay.startVirtualCheckout(getCurrentActivity(), details);
            }
        });
    }

    @Override
    public void checkoutCancelled(String reason) {
        if (reason == null) {
            reason = "(no reason given)";
        }
        WritableMap params = Arguments.createMap();
        params.putString("reason", reason);
        sendEvent("checkoutCancelled", params);
    }

    @Override
    public void checkoutSuccessful(QuadPayCard card, QuadPayCardholder cardholder) {
        WritableMap params = Arguments.createMap();
        params.putMap("card", QuadPayBridgeSerializer.toWritableMap(card));
        params.putMap("cardholder", QuadPayBridgeSerializer.toWritableMap(cardholder));
        sendEvent("checkoutSuccessful", params);
    }

    @Override
    public void checkoutSuccessful(String orderId) {
        WritableMap params = Arguments.createMap();
        params.putString("orderId", orderId);
        sendEvent("checkoutSuccessful", params);
    }

    @Override
    public void checkoutError(String error) {
        WritableMap params = Arguments.createMap();
        params.putString("eventProperty", "someValue");
        sendEvent("checkoutError", params);
    }
}