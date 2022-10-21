import React from 'react'
import PropTypes from 'prop-types'
import { requireNativeComponent } from 'react-native'

class QuadpayWidget extends React.Component {
  render() {
    return <RNQuadpayWidget {...this.props}/>
  }
}

QuadpayWidget.propTypes ={
    merchantId: PropTypes.string,
    size: PropTypes.string,
    alignment: PropTypes.string,
    amount: PropTypes.string,
    min: PropTypes.string,
    max: PropTypes.string,
    colorPrice: PropTypes.string,
    logoOption: PropTypes.string,
    logoSize: PropTypes.string,
    displayMode: PropTypes.string,
    minModal: PropTypes.string,
    isMFPPMerchant: PropTypes.string,
    learnMoreUrl: PropTypes.string,
    
}

QuadpayWidget.defaultProps = {
    size: "100%",
    alignment:"left",
    amount: "",
    min: "35",
    max: "1500",
    colorPrice: "#000000",
}

var RNQuadpayWidget = requireNativeComponent('RNQuadPayWidget',QuadpayWidget);

export default QuadpayWidget;