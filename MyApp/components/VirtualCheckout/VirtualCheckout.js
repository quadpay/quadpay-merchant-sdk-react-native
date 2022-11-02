import React,{useState} from 'react';
import { StyleSheet } from 'react-native';
import { Button } from '@ui-kitten/components';
import {QuadPay} from "quadpay-merchant-sdk-react-native";
import CardInformation from '../CardInformation/CardInformation';

const VirtualCheckout =(props)=>{
    const {
        environment,
        locale,
        merchantId
    } = props;

    const [customerFirstName, setCustomerFirstName] = useState();
    const [customerLastName, setCustomerLastName] = useState();
    const [cardNumber, setCardNumber] = useState();
    const [cvcCode, setCvcCode] = useState();
    const [cardMonthExpiry, setCardMonthExpiry] = useState();
    const [cardYearExpiry, setYearExpiry] = useState();

    const makeVirtualOrder = async() => {
        let order = {
          amount: "44.44",
          merchantReference: "custom-order-id",
          customerFirstName: "Petros",
          customerEmail: "petros.andreou190-score700@quadpay.com",
          customerLastName: "Payman",
          customerPhoneNumber: "+18146225937",
          customerAddressLine1: "240 Meeker Ave",
          customerAddressLine2: "Apt 35",
          customerPostalCode: "11211",
          customerCity: "Brooklyn",
          customerState: "NY",
          customerCountry: "US",
          merchantFeeForPaymentPlan: "0",
        };
        QuadPay.initialize(merchantId,environment,locale)
        QuadPay.startVirtualCheckout(order);
        QuadPay.onCheckoutError(errorMessage => console.log(errorMessage));
        QuadPay.onCheckoutSuccessful(successfulCheckout => {
            console.log(successfulCheckout)
            console.log(successfulCheckout.card.brand)
            setCardMonthExpiry(successfulCheckout.card.expirationMonth)
            setYearExpiry(successfulCheckout.card.expirationYear)
            setCvcCode(successfulCheckout.card.cvc)
            setCardNumber(successfulCheckout.card.number)
            setCustomerFirstName(successfulCheckout.customer.firstName)
            setCustomerLastName(successfulCheckout.customer.lastName)
        }
        );
      }

    return(
        <>
        <Button style={styles.likeButton} onPress={makeVirtualOrder}>
            Virtual order
        </Button>
        <CardInformation 
            cardNumber={cardNumber} 
            cvcCode={cvcCode} 
            cardMonthExpiry={cardMonthExpiry} 
            cardYearExpiry= {cardYearExpiry} 
            customerFirstName={customerFirstName} 
            customerLastName ={customerLastName}
            />
        </>
    );
}

const styles = StyleSheet.create({
    likeButton: {
      marginVertical: 16,
    },
  });

export default VirtualCheckout