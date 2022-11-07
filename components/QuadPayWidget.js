import { requireNativeComponent } from "react-native";
import React, { Component } from 'react'

class QuadPayWidget extends Component {
  render() {
    return <RNQuadpayWidget {...this.props}/>;

    /*
    return QuadPayNativeSDK.createWidget(
      widgetProps.merchantId,
      widgetProps.totalAmount,
      widgetProps.alignment,
      widgetProps.displayMode,
      widgetProps.grayLabel,
      widgetProps.isMFPPMerchant,
      widgetProps.minModal,
      widgetProps.learnMoreUrl,
      widgetProps.logoOption,
      widgetProps.logoSize,
      widgetProps.size,
      widgetProps.min,
      widgetProps.max,
      widgetProps.priceColor,
      widgetProps.textColor,
      widgetProps.linkColor
    );*/
  }
}

QuadPayWidget.propTypes ={
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

QuadPayWidget.defaultProps = {
  size: "100%",
  alignment:"left",
  amount: "",
  min: "35",
  max: "1500",
  colorPrice: "#000000",
}

var RNQuadpayWidget = requireNativeComponent('createWidget', QuadPayWidget);

export default QuadPayWidget;
