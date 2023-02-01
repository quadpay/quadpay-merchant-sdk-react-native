import React from 'react'
import PropTypes from 'prop-types'
import { requireNativeComponent, StyleSheet } from 'react-native'

class ZipPaymentWidget extends React.Component {
  render() {
    //Just a subtitle
    if(this.props.hideTimeline && this.props.hideHeader && !this.props.hideSubtitle){
      return <RNZipPaymentWidget style={styles.WithJustHeader} {...this.props}/>
    }
    //Just a header
    else if(this.props.hideTimeline && !this.props.hideHeader && this.props.hideSubtitle){
      return <RNZipPaymentWidget style={styles.WithJustHeader} {...this.props}/>
    }
    // Header and subtitle
    else if(this.props.hideTimeline && !this.props.hideHeader && !this.props.hideSubtitle){
      return <RNZipPaymentWidget style={styles.WithoutBothHeaders} {...this.props}/>
    }
    //Header and timeline
    else if(!this.props.hideTimeline && !this.props.hideHeader && this.props.hideSubtitle){
      return <RNZipPaymentWidget style={styles.WithoutHeaderAndTimeline} {...this.props}/>
    }
    // Subtitle and timeline
    else if(!this.props.hideTimeline && this.props.hideHeader && !this.props.hideSubtitle){
      return <RNZipPaymentWidget style={styles.WithoutHeaderAndTimeline} {...this.props}/>
    }
    //Timeline on its own
    else if(!this.props.hideTimeline && this.props.hideHeader && this.props.hideSubtitle){
      return <RNZipPaymentWidget style={styles.WithoutTimeline} {...this.props}/>
    }
    //All
    else{
      return <RNZipPaymentWidget style={ styles.PaymentWidget} {...this.props}/>
    }
   
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
    height: 160,
    width: '90%',
  },
  WithoutTimeline:{
    height: 100,
    width: '90%',
  },
  WithJustHeader:{
    height: 50,
    width: '90%',
  },
  WithoutBothHeaders:{
    height: 100,
    width: '90%',
  },
  WithoutHeaderAndTimeline:{
    height: 120,
    width: '90%',
  }
})


var RNZipPaymentWidget = requireNativeComponent('RNQuadPayPaymentWidget',ZipPaymentWidget);

export default ZipPaymentWidget;