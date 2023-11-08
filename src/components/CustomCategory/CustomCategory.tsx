import React from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';

type CustomCategoryProps = {
  itemImage: any;
  itemTitle: string;
  onPress?: () => void;
};

const CustomCategory = ({
  itemImage,
  itemTitle,
  onPress,
}: CustomCategoryProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={itemImage} style={styles.image}></Image>
      <Text style={styles.textStyle}>{itemTitle}</Text>
    </TouchableOpacity>
  );
};

export default CustomCategory;
