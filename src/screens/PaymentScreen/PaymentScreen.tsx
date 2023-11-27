// PaymentScreen.tsx
import React from 'react';
import CustomDropdownComponent from '../../components/CustomDropdown/CustomDropdown';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducer'; // Adjust the path as needed

const PaymentScreen = ({ navigation }) => {
  // Use useSelector with RootState to access the payment methods from Redux state
  const paymentMethods = useSelector((state: RootState) => state.reducer.paymentMethod);

  return (
    <CustomDropdownComponent
      navigation={navigation}
      paymentMethods={paymentMethods}
    />
  );
};

export default PaymentScreen;
