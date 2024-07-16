import { NativeModules, NativeEventEmitter, Platform } from "react-native";

let QuadPayNativeSDK = NativeModules.QuadPayBridge;
console.log('NativeModules.QuadPayBridge:', QuadPayNativeSDK);

const quadpayNativeEmitter = QuadPayNativeSDK ? new NativeEventEmitter(QuadPayNativeSDK) : null;

class QuadPayClass {
  initialize = (merchantId, environment, locale) => {
    let env = Platform.select({
      ios: environment.toLowerCase(),
      android: environment.toUpperCase()
    });
    QuadPayNativeSDK.initialize(merchantId, env, locale);
  };

  startVirtualCheckout = (checkoutDetails) => {
    QuadPayNativeSDK.startVirtualCheckout(
      checkoutDetails.amount,
      checkoutDetails.merchantReference,
      checkoutDetails.customerFirstName,
      checkoutDetails.customerEmail,
      checkoutDetails.customerLastName,
      checkoutDetails.customerPhoneNumber,
      checkoutDetails.customerAddressLine1,
      checkoutDetails.customerAddressLine2,
      checkoutDetails.customerPostalCode,
      checkoutDetails.customerCity,
      checkoutDetails.customerState,
      checkoutDetails.customerCountry,
      checkoutDetails.merchantFeeForPaymentPlan,
      checkoutDetails.checkoutFlow,
    );
  };

  startCheckout = (checkoutDetails) => {
    QuadPayNativeSDK.startCheckout(
      checkoutDetails.amount,
      checkoutDetails.merchantReference,
      checkoutDetails.customerFirstName,
      checkoutDetails.customerEmail,
      checkoutDetails.customerLastName,
      checkoutDetails.customerPhoneNumber,
      checkoutDetails.customerAddressLine1,
      checkoutDetails.customerAddressLine2,
      checkoutDetails.customerPostalCode,
      checkoutDetails.customerCity,
      checkoutDetails.customerState,
      checkoutDetails.customerCountry,
      checkoutDetails.merchantFeeForPaymentPlan,
      checkoutDetails.checkoutFlow,
    );
  };

  onCheckoutCancelled(handler) {
    if (quadpayNativeEmitter) {
      quadpayNativeEmitter.removeAllListeners("checkoutCancelled");
      this.checkoutCancelledListener = quadpayNativeEmitter.addListener("checkoutCancelled", handler);
    }
  }

  onCheckoutSuccessful(handler) {
    if (quadpayNativeEmitter) {
      quadpayNativeEmitter.removeAllListeners("checkoutSuccessful");
      this.checkoutSuccessfulListener = quadpayNativeEmitter.addListener("checkoutSuccessful", handler);
    }
  }

  onCheckoutError(handler) {
    if (quadpayNativeEmitter) {
      quadpayNativeEmitter.removeAllListeners("checkoutError");
      this.checkoutErrorListener = quadpayNativeEmitter.addListener("checkoutError", handler);
    }
  }

  removeListeners() {
    if (quadpayNativeEmitter) {
      if (this.checkoutCancelledListener) {
        this.checkoutCancelledListener.remove();
        this.checkoutCancelledListener = null;
      }
      if (this.checkoutSuccessfulListener) {
        this.checkoutSuccessfulListener.remove();
        this.checkoutSuccessfulListener = null;
      }
      if (this.checkoutErrorListener) {
        this.checkoutErrorListener.remove();
        this.checkoutErrorListener = null;
      }
    }
  }
}

let QuadPay = null;

if (QuadPayNativeSDK) {
  QuadPay = new QuadPayClass();
} else {
  console.error('QuadPayBridge module is not defined');
}

export { QuadPay };
