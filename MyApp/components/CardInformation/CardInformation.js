import React,{useState} from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Button, Input, Card } from '@ui-kitten/components';

const CardInformation = (props) => {
  const {
    cardNumber,
    cvcCode,
    cardMonthExpiry,
    cardYearExpiry,
    customerFirstName,
    customerLastName
  } = props;

  const [setChangeNumber] = useState(null);
  const [setChangeCvcCode] = useState(null);
  const [setChangeMonth] = useState(null);
  const [setChangeYear] = useState(null);
  const [setCustomerFirstName] = useState(null);
  const [setCustomerLastName] = useState(null);

  console.log("card month expiry",cardMonthExpiry)
  console.log("card year expiry", cardYearExpiry)

  return (
    <SafeAreaView>
      <Card>
        <View style={styles.container}>
          <View style={styles.secondaryContainer}>
            <Input
              style={styles.input}
              onChangeText={setChangeNumber}
              value={cardNumber}
              placeholder="Credit card number"
              keyboardType="numeric"
            />
            <Input
              style={styles.input}
              onChangeText={setChangeCvcCode}
              value={cvcCode}
              placeholder="CVC code"
              keyboardType="numeric"
            />
          </View>
          <View style={styles.secondaryContainer}>
            <Input
            style={styles.input}
            onChangeText={setChangeMonth}
            value={cardMonthExpiry}
            placeholder="Expiration month"
            keyboardType="numeric"
            />
            <Input
            style={styles.input}
            onChangeText={setChangeYear}
            value={cardYearExpiry}
            placeholder="Expiration Year"
            keyboardType="numeric"
            />
          </View>
          <View style={styles.secondaryContainer}>
            <Input
            style={styles.input}
            onChangeText={setCustomerFirstName}
            value={customerFirstName}
            placeholder="First Name"
            keyboardType="default"
            />
            <Input
              style={styles.input}
              onChangeText={setCustomerLastName}
              value={customerLastName}
              placeholder="Last Name"
              keyboardType="default"
            />
          </View>
        </View>
        <Button style={styles.likeButton} onPress={null}>
              Complete order
        </Button>
      </Card>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: "column"
    },
    secondaryContainer:{
        flexDirection: "row",
        margin:10
    },
    input: {
        height: 40,
        padding: 10,
        
    },
    likeButton: {
      marginVertical: 16,
    }
});

export default CardInformation