import React from 'react'
import PropTypes from 'prop-types'
import { requireNativeComponent, StyleSheet } from 'react-native'

class ZipWidget extends React.Component {
  render() {
    return <RNZipWidget style={ZipWidget.styles} {...this.props}/>
  }
}

ZipWidget.propTypes ={
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

ZipWidget.defaultProps = {
    size: "100%",
    alignment:"left",
    amount: "",
    min: "35",
    max: "1500",
    colorPrice: "#000000",
}

ZipWidget.styles = StyleSheet.create({
  height: 100,
  width: 360,
})

var RNZipWidget = requireNativeComponent('RNQuadPayWidget',ZipWidget);

export default ZipWidget;