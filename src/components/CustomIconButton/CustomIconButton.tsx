import React from 'react';
import {DimensionValue, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import theme from '../../utils/themes';
import { styles } from './styles';

type CustomIconButtonProps = {
  iconName: string;
  text: string;
  disabled: boolean;
  onPress?: () => void;
  backgroundColor?: string;
  borderColor?: string;
  textColor?: string;
  width?: DimensionValue;
  testID: string;
};

const CustomIconButton = ({
  iconName,
  text,
  disabled,
  onPress,
  backgroundColor,
  borderColor,
  textColor,
  width,
  testID
}: CustomIconButtonProps) => {
  return (
    <TouchableOpacity
      testID={testID ?? 'CustomIconButton'}
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.container,
        {
          backgroundColor: backgroundColor
            ? backgroundColor
            : theme.colors.primary,
          borderColor: borderColor ? borderColor : theme.colors.primary,
          width: width ? width : '100%',
        },
      ]}>
      <View style={styles.subContainer}>
        <View style={styles.iconContainer}>
          <Icon
            //@ts-ignore
            name={iconName}
            size={18}
            color={theme.colors.primary}
          />
        </View>
        <Text
          style={[
            styles.text,
            {
              color: textColor ? textColor : theme.colors.white,
            },
          ]}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomIconButton;
