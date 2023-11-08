import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch } from 'react-redux';
import { add_to_cart_request, delete_cart_item_request, remove_from_cart_request } from '../../redux/action';
import theme from '../../utils/themes';
import { styles } from './styles';



type CustomCartElementProps = {
  itemImage: any;
  itemName: string;
  itemPrice: number;
  itemQty: number;
  itemId: number;
};

const CustomCartElement = ({
  itemImage,
  itemName,
  itemPrice,
  itemQty,
  itemId,
}: CustomCartElementProps) => {
  const dispatch = useDispatch();
  const increaseItem = () => {
    const item = {
      id: itemId,
    };
    dispatch(add_to_cart_request(item));
  };


  const decreaseItem = () => {
    const item = {
      id: itemId,
    };
    if (itemQty > 1) {
      dispatch(remove_from_cart_request(item));
    } else {
      dispatch(delete_cart_item_request(item));
    }
  };

   const deleteItem = () => {
    const item = {
      id: itemId,
    };
    dispatch(delete_cart_item_request( item));
  };
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={itemImage} style={styles.image} resizeMode="contain" />
      </View>
      <View style={styles.viewContainer}>
        <Text style={styles.textHeaderStyle}>{itemName}</Text>
        <View style={styles.viewSubContainer}>
          <TouchableOpacity style={styles.counterStyle} onPress={decreaseItem}>
            <Icon name="minus" size={20} color={theme.colors.primary} />
          </TouchableOpacity>
          <Text style={styles.textSubContainer}>{itemQty}</Text>
          <TouchableOpacity style={styles.counterStyle} onPress={increaseItem}>
            <Icon name="plus" size={20} color={theme.colors.primary} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.priceContainer}>
        <TouchableOpacity
          style={{alignItems: 'flex-end', marginBottom: 20}}
          onPress={deleteItem}>
          <Icon
            name="trash-can-outline"
            size={24}
            color={theme.colors.grey}
          />
        </TouchableOpacity>
        <View style={{alignSelf: 'center'}}>
          <Text style={styles.textPrice}>Rs. {itemPrice}</Text>
        </View>
      </View>
    </View>
  );
};

export default CustomCartElement;
