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
import { Dropdown, Checkout, VirtualCheckout, Widget } from './components';
import { QuadPayWidget } from 'quadpay-merchant-sdk-react-native';

/**
 * Use any valid `name` property from eva icons (e.g `github`, or `heart-outline`)
 * https://akveo.github.io/eva-icons
 */


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
        <Dropdown data= {environments} onSelect={setSelectedEnvironment}/>
        <Dropdown data= {locales} onSelect={setSelectedLocale}/>
        <Checkout locale={locale} environment={environment} merchantId ="5898b9a9-46bb-4647-92ed-52643d019d8c"/>
        <VirtualCheckout locale={locale} environment={environment} merchantId ="5898b9a9-46bb-4647-92ed-52643d019d8c"/>
        <QuadPayWidget />
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
  likeButton: {
    marginVertical: 16,
  },
});



