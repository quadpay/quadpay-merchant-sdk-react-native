import React from 'react'
import PropTypes from 'prop-types'
import { requireNativeComponent, StyleSheet } from 'react-native'

class ZipPaymentWidget extends React.Component {
  render() {
    if(this.props.hideTimeline == 'true'){
      return <RNZipPaymentWidget style={styles.WithoutTimeline} {...this.props}/>
    }else{
      return <RNZipPaymentWidget style={ styles.WithTimeline} {...this.props}/>
    }
   
  }
}

ZipPaymentWidget.propTypes ={
    merchantId: PropTypes.string,
    amount: PropTypes.string,
    timelapseColor: PropTypes.string,
    hideHeader: PropTypes.string,
    hideSubtitle: PropTypes.string,
    hideTimeline: PropTypes.string,
    minModal: PropTypes.string,
    isMFPPMerchant: PropTypes.string,
    learnMoreUrl: PropTypes.string,
}

const styles = StyleSheet.create({
  WithTimeline:{
    height: 180,
    width: '90%',
  },
  WithoutTimeline:{
    height: 100,
    width: '90%',
  }
})


var RNZipPaymentWidget = requireNativeComponent('RNQuadPayPaymentWidget',ZipPaymentWidget);

export default ZipPaymentWidget;