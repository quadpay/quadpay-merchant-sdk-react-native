import React from 'react'
import { requireNativeComponent, StyleSheet } from 'react-native'

function ZipPaymentWidget({ merchantId,amount,timelineColor,hideSubtitle,hideTimeline,minModal,isMFPPMerchant,learnMoreUrl }){
  return <RNZipPaymentWidget style={ styles.PaymentWidget}
   merchantId = {merchantId}
   amount = {amount}
   timelineColor = {timelineColor}
   hideSubtitle = {hideSubtitle}
   hideTimeline = {hideTimeline}
   minModal = {minModal}
   isMFPPMerchant = {isMFPPMerchant}
   learnMoreUrl = {learnMoreUrl}
   />
}

const styles = StyleSheet.create({
  PaymentWidget:{
    height: 210,
    width: '90%',
  }
})


var RNZipPaymentWidget = requireNativeComponent('RNQuadPayPaymentWidget',ZipPaymentWidget);

export default ZipPaymentWidget;