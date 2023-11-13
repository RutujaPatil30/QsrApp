import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import theme from '../../utils/themes';
import {styles} from './styles';

type CustomCategoryElementsProps = {
  itemImage: any;
  itemName: string;
  itemPrice: number;
  itemDescription: string;
  onPressAdd:any;
  onPress?: any;
  testID:string;
};

const CustomCategoryElements = ({
  itemImage,
  itemName,
  itemPrice,
  itemDescription,
  onPress,
  onPressAdd,
  testID
}: CustomCategoryElementsProps) => {
  return (
    <TouchableOpacity  onPress={onPress} style={styles.container} testID = {testID ?? 'CustomCategoryElements'}>
      <View style={styles.imageContainer}>
        <Image source={itemImage} style={styles.image} resizeMode="contain" />
      </View>
      <View style={styles.viewContainer1}>
        <Text style={styles.textHeaderStyle}>{itemName}</Text>
        <Text style={styles.textSubContainer1}>Rs {itemPrice}</Text>
        <View style={styles.viewSubContainer1}>
          <Text
            style={styles.textSubContainer1}
            numberOfLines={2}
            ellipsizeMode="tail">
            {itemDescription}
          </Text>
        </View>
      </View>
      <View>
        <TouchableOpacity
          onPress={onPressAdd}
          style={{alignItems: 'flex-end', marginBottom: 20}}>
          <Text
            style={{
              color: theme.colors.primary,
              fontSize: 22,
            }}>
           (+)
          </Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default CustomCategoryElements;
