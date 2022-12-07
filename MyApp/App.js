/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the UI Kitten template
 * https://github.com/akveo/react-native-ui-kitten
 *
 * Documentation: https://akveo.github.io/react-native-ui-kitten/docs
 *
 * @format
 */

import React, {useState, useEffect} from 'react';
import { StyleSheet } from 'react-native';
import {
  ApplicationProvider,
  IconRegistry,
  Layout,
} from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';
import Dropdown from './components/Dropdown/Dropdown';
import Checkout from './components/Checkout/Checkout';
import VirtualCheckout from './components/VirtualCheckout/VirtualCheckout';
import QuadpayWidget from 'quadpay-merchant-sdk-react-native/RNQuadpayWidget';


export default function App(){

 let environments = [
   'CI - use sandbox since no merchant configured for ci yet',
    'Sandbox'
  ];

  let locales= [
    'US',
    'MX'
  ]

const [environment, setSelectedEnvironment] = useState(undefined);
const [locale,setSelectedLocale] = useState(undefined)

return(
  <>
    <IconRegistry icons={EvaIconsPack}/>
    <ApplicationProvider {...eva} theme={eva.light}>
     
      <Layout style={styles.container}>
      <QuadpayWidget style = {styles.widget}
      amount = "50"
      merchantId = "9f7c8dcc-a546-45e4-a789-b65055abe0db"
      />


      {/* <Dropdown data= {environments} onSelect={setSelectedEnvironment}/>
      <Dropdown data= {locales} onSelect={setSelectedLocale}/> */}
      <Checkout locale={"US"} environment={"Sandbox"} merchantId ="5898b9a9-46bb-4647-92ed-52643d019d8c"/>
      <VirtualCheckout locale={"US"} environment={"Sandbox"} merchantId ="5898b9a9-46bb-4647-92ed-52643d019d8c"/>
      </Layout>
    </ApplicationProvider>
  </>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonsContainer:{
    flexDirection: 'row',
    alignContent: 'space-around',
    flexWrap: 'wrap'
  },
  button: {
    backgroundColor: "blue",
    padding:10,
    borderRadius: 40,
    marginBottom:5,
    alignItems:'center'
  },
  widget: {
    marginTop: 50,
    height: 100,
    width: 300,
  },
  likeButton: {
    marginVertical: 16,
  },
});



