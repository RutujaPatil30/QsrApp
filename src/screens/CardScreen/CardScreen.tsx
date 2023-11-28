import React from 'react';
import CustomDropdownComponent from '../../components/CustomDropdown/CustomDropdown';
import { useSelector } from 'react-redux';
import { View, Text } from 'react-native';
import styles from './styles';

const CardScreen = ({ navigation }) => {
  const paymentMethods = useSelector((state: any) => state.reducer.paymentMethods);
  const selectedPaymentMethod = useSelector((state: any) => state.reducer.paymentMethod);

  const dropdownOptions = paymentMethods.concat({ label: ' + Add New Payment', value: 'new' });

  const onDropdownSelect = (selectedItem: any) => {
    if (selectedItem === 'new') {
      navigation.navigate('AddPaymentScreen');
    } 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleStyles}>Payment Method</Text>
      <CustomDropdownComponent
        options={dropdownOptions}
        onSelect={onDropdownSelect}
        selectedValue={selectedPaymentMethod ? selectedPaymentMethod.label : null} 
      />
    </View>
  );
};

export default CardScreen;
