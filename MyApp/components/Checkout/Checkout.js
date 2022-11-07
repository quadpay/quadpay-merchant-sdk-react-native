import React,{useEffect} from 'react';
import { StyleSheet } from 'react-native';
import { Button } from '@ui-kitten/components';
import {QuadPay} from "quadpay-merchant-sdk-react-native";

const Checkout =(props)=>{
    const {
        environment,
        locale,
        merchantId
    } = props;

    const makeAnOrder = async() =>{

        let order = {
          amount: "44.44",
          merchantReference: "any random order",
          customerFirstName: "Quincy",
          customerEmail: "testing_12339283@test.com",
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
        //console.log(QuadPay)
        QuadPay.startCheckout(order);
      
      }

    return(
        <Button style={styles.likeButton} onPress={makeAnOrder}>
            Standard order
        </Button>
    );
}

const styles = StyleSheet.create({
    likeButton: {
      marginVertical: 16,
    },
  });

export default Checkout