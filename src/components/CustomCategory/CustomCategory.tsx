import React from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';

type CustomCategoryProps = {
  itemImage: any;
  itemTitle: string;
  onPress?: () => void;
  testID:string
};

const CustomCategory = ({
  itemImage,
  itemTitle,
  onPress,
  testID
}: CustomCategoryProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress} testID={testID ?? 'CustomCategory'}>
      <Image source={itemImage} style={styles.image}></Image>
      <Text style={styles.textStyle}>{itemTitle}</Text>
    </TouchableOpacity>
  );
};

export default CustomCategory;
