import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import theme from '../../utils/themes';
import { styles } from './styles';


type CustomButtonProps = {
  text: string;
  disabled?: boolean;
  onPress?: () => void;
  buttonStylesProps: {
    backgroundColor?: string;
    borderColor?: string;
    textColor?: string;
    width?: any;
    height?: any;
    fontSize?: number;
  };
}

const CustomButton = ({
  text,
  disabled,
  onPress,
  buttonStylesProps
}: CustomButtonProps)=>{
    return(
        <TouchableOpacity
            onPress={onPress}
            disabled={disabled}
            style={[styles.container, 
                {backgroundColor: buttonStylesProps.backgroundColor, 
                borderColor:buttonStylesProps.borderColor, 
                width:buttonStylesProps.width, height:buttonStylesProps.height }]}>
            
            <Text
                style={[styles.text,
                    {color: buttonStylesProps.textColor ? buttonStylesProps.textColor : theme.colors.white,}]}>
                {text}
            </Text>

        </TouchableOpacity>
    )
}

export default CustomButton;