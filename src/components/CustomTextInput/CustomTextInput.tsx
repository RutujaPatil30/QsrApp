import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import theme from '../../utils/themes';
import { styles } from './styles';


interface CustomTextInputProps {
  value: string;
  onChangeText?: (val: string) => void;
  labelText?: string;
  lablePlaceHolder?: string;
  maxLength?: number;
  isError?: boolean;
  errorText?: string;
  keyboardType?: any;
  onBlur?: () => void;
  secureTextEntry?: boolean;
  isPassword?: boolean;
  testID : string;
}

const CustomTextInput: React.FC<CustomTextInputProps> = props => {
  const keyboardType = props?.keyboardType ? props?.keyboardType : 'default';
  const [isPasswordVisible, setIsPasswordVisible] = useState(
    !props.secureTextEntry,
  );

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <View style={styles.container}  testID={props.testID ?? 'CustomTextInput'}>
      {props.labelText ? (
        <Text style={styles.labelText}>{props.labelText}</Text>
      ) : null}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder={props.lablePlaceHolder}
          placeholderTextColor={theme.colors.grey}
          maxLength={props.maxLength}
          onBlur={props.onBlur}
          value={props.value}
          onChangeText={val => props.onChangeText?.(val)}
          keyboardType={keyboardType}
          secureTextEntry={!isPasswordVisible}
        />
        {props.isPassword ? (
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={togglePasswordVisibility}>
            <Icon
              name={isPasswordVisible ? 'eye-off' : 'eye'}
              size={24}
              color={theme.colors.grey}
            />
          </TouchableOpacity>
        ) : (
          <></>
        )}
      </View>
      {props.isError ? (
        <Text style={styles.errorText}>{props.errorText}</Text>
      ) : null}
    </View>
  );
};

export default CustomTextInput;
