import { NativeModules, NativeEventEmitter } from "react-native";

let QuadPayNativeSDK = NativeModules.QuadPayBridge;
const quadpayNativeEmitter = new NativeEventEmitter(
  NativeModules.QuadPayBridge,
);

class QuadPayClass {
  initialize = (merchantId, environment, locale) => {
    QuadPayNativeSDK.initialize(merchantId, environment, locale);
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
    );
  };
  startCheckout = checkoutDetails => {
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
