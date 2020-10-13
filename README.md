QuadPay SDK
==============

The QuadPay SDK enables you to offer buy-now-pay-later functionality in your iOS app!

See:
https://docs.quadpay.com/docs/mobile-sdk-ios
https://docs.quadpay.com/docs/mobile-sdk-android

for details about what the native implementation looks like

Installation
============

The QuadPay SDK requires react-native >0.59 and uses autolinking -- no extra steps required.


Virtual Check Example
=======

```
import { QuadPay } from "quadpay-merchant-sdk-react-native";

...

// Be sure to init the QuadPay library before making any calls!
merchantId = "44444444-4444-4444-4444-444444444444";
environment = "development";
locale = "US";
QuadPay.initialize(merchantId, environment, locale);

// Add details about what the customer and their order
order = {
  amount: "44.44",
  merchantReference: "custom-order-id",
  customerFirstName: "Quincy",
  customerEmail: "<use a unique email>@<test>.com",
  customerLastName: "Payman",
  customerPhoneNumber: "+14076901147",
  customerAddressLine1: "240 Meeker Ave",
  customerAddressLine2: "Apt 35",
  customerPostalCode: "11211",
  customerCity: "Brooklyn",
  customerState: "NY",
  customerCountry: "US",
};

// Register callbacks with the QuadPay library -- these will fire when the customer
//  completes or cancels checkout
//  There is no need to "unregister" any of the callbacks
QuadPay.onCheckoutSuccessful((successfulCheckout) => console.log(successfulCheckout));
// Submit the card and cardholder details through your standard payment processor!

// Handle edge cases
QuadPay.onCheckoutCancelled(reason => console.log(reason));
QuadPay.onCheckoutError(errorMessage => console.log(errorMessage));

// Open the QuadPay checkout view
QuadPay.startVirtualCheckout(order);

```