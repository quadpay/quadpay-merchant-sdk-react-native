import React from 'react'
import PropTypes from 'prop-types'
import { requireNativeComponent } from 'react-native'

class ZipPaymentWidget extends React.Component {
  render() {
    return <RNZipPaymentWidget {...this.props}/>
  }
}

ZipPaymentWidget.propTypes ={
    merchantId: PropTypes.string,
    amount: PropTypes.string,
    timelapseColor: PropTypes.string,
    hideHeader: PropTypes.bool,
    hideSubtitle: PropTypes.bool,
    hideTimeline: PropTypes.bool,
    minModal: PropTypes.string,
    isMFPPMerchant: PropTypes.string,
    learnMoreUrl: PropTypes.string,
    
}


var RNZipPaymentWidget = requireNativeComponent('RNQuadPayPaymentWidget',ZipPaymentWidget);

export default ZipPaymentWidget;