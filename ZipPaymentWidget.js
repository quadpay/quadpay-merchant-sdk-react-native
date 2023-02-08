import React from 'react'
import PropTypes from 'prop-types'
import { requireNativeComponent, StyleSheet } from 'react-native'

class ZipPaymentWidget extends React.Component {
  render() {
    return <RNZipPaymentWidget style={ styles.PaymentWidget} {...this.props}/>
  }
}

ZipPaymentWidget.propTypes ={
    merchantId: PropTypes.string,
    amount: PropTypes.string,
    timelineColor: PropTypes.string,
    hideHeader: PropTypes.string,
    hideSubtitle: PropTypes.string,
    hideTimeline: PropTypes.string,
    minModal: PropTypes.string,
    isMFPPMerchant: PropTypes.string,
    learnMoreUrl: PropTypes.string,
}

const styles = StyleSheet.create({
  PaymentWidget:{
    height: 170,
    width: '90%',
  }
})


var RNZipPaymentWidget = requireNativeComponent('RNQuadPayPaymentWidget',ZipPaymentWidget);

export default ZipPaymentWidget;