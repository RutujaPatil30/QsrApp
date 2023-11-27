// // AddPaymentScreen.tsx
import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { addPaymentMethod } from '../../redux/action';

const AddPaymentScreen = ({ navigation }) => {
  const [cardLabel, setCardLabel] = useState('');
  const dispatch = useDispatch();

  const handleAddCard = () => {
    const newMethod = { label: cardLabel, value: cardLabel };
    dispatch(addPaymentMethod(newMethod));
    navigation.goBack();
  };

  return (
    <View>
      <TextInput
        placeholder="Card Label"
        value={cardLabel}
        onChangeText={setCardLabel}
      />
      <Button title="Add Card" onPress={handleAddCard} />
    </View>
  );
};

export default AddPaymentScreen;
