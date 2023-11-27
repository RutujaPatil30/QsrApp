// DropdownComponent.tsx
import React from 'react';
import { View, Button } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { PaymentMethod } from '../../screens/PaymentScreen/payment';

interface CustomDropdownComponentProps {
  navigation: any; 
  paymentMethods: PaymentMethod[];
}

const CustomDropdownComponent: React.FC<CustomDropdownComponentProps> = ({ navigation, paymentMethods }) => {
  return (
    <View>
      <RNPickerSelect
        onValueChange={(value) => console.log(value)}
        items={paymentMethods}
        placeholder={{ label: "Select payment method", value: null }}
      />
      <Button
        title=" + Add New Payment"
        onPress={() => navigation.navigate('AddPayment')}
      />
    </View>
  );
};

export default CustomDropdownComponent;
