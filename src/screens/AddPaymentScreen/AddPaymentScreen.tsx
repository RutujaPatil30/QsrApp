import React, { useState } from 'react';
import { View, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import CustomTextInput from '../../components/CustomTextInput/CustomTextInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import { addPaymentMethod, setPaymentMethod } from '../../redux/action';
import styles from './styles';
import theme from '../../utils/themes';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const AddPaymentScreen = ({ navigation }) => {
  const [cardLabel, setCardLabel] = useState('');
  const dispatch = useDispatch();

  const handleAddCard = () => {
    const newMethod = { label: cardLabel, value: cardLabel };
    dispatch(addPaymentMethod(newMethod));
    dispatch(setPaymentMethod(newMethod));
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <CustomTextInput
        labelText="Card Details"
        lablePlaceHolder="Enter card number"
        value={cardLabel}
        onChangeText={setCardLabel}
        testID="cardLabelInput"
        keyboardType={'Numeric'}
      />
      {/* <Button title="Add Card" onPress={handleAddCard} /> */}
      <View style={{alignItems:'center'}}>
      <CustomButton
        text="Add Card"
        onPress={handleAddCard}
        buttonStylesProps={{
          backgroundColor: theme.colors.primary,
          borderColor: theme.colors.primary,
          textColor: theme.colors.white,
          width: wp('80%'),
          height: hp('5%'),
        }}
        testID="addCardButton"
      />
      </View>
      
    </View>
  );
};

export default AddPaymentScreen;
