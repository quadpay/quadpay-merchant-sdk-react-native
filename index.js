import { NativeModules, NativeEventEmitter, Platform } from "react-native";

let QuadPayNativeSDK = NativeModules.QuadPayBridge;
const quadpayNativeEmitter = new NativeEventEmitter(
  NativeModules.QuadPayBridge,
);

class QuadPayClass {
  initialize = (merchantId, environment, locale) => {
    let env = Platform.select({
      ios: environment.toLowerCase(),
      android: environment.toUpperCase()
    });
    QuadPayNativeSDK.initialize(merchantId, env, locale);
  };
  startVirtualCheckout = checkoutDetails => {
    NativeModules.QuadPayBridge.startVirtualCheckout(
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
  startCheckout = checkoutDetails => {
    NativeModules.QuadPayBridge.startCheckout(
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
    quadpayNativeEmitter.removeAllListeners("checkoutCancelled");
    quadpayNativeEmitter.addListener("checkoutCancelled", handler);
  }
  onCheckoutSuccessful(handler) {
    quadpayNativeEmitter.removeAllListeners("checkoutSuccessful");
    quadpayNativeEmitter.addListener("checkoutSuccessful", handler);
  }
  onCheckoutError(handler) {
    quadpayNativeEmitter.removeAllListeners("checkoutError");
    quadpayNativeEmitter.addListener("checkoutError", handler);
  }
}

let QuadPay = new QuadPayClass();

export { QuadPay };
