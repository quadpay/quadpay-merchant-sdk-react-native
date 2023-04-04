import React from 'react'
import { requireNativeComponent, StyleSheet } from 'react-native'

function ZipWidget({merchantId,size,alignment,amount,min,max,colorPrice,logoOption,logoSize,displayMode,minModal,isMFPPMerchant,learnMoreUrl}) {
  return <RNZipWidget style={styles.ZipWidget} 
    merchantId = {merchantId}
    size = {size}
    alignment={alignment}
    amount={amount}
    min={min}
    max={max}
    colorPrice={colorPrice}
    logoOption={logoOption}
    logoSize = {logoSize}
    displayMode = {displayMode}
    minModal = {minModal}
    isMFPPMerchant = {isMFPPMerchant}
    learnMoreUrl = {learnMoreUrl}
  />
}

const styles = StyleSheet.create({
  ZipWidget:{
    height: 100,
    width: '90%',
  }
})

var RNZipWidget = requireNativeComponent('RNQuadPayWidget',ZipWidget);

export default ZipWidget;