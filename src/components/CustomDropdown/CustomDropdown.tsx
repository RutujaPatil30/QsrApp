import React from 'react';
import { View } from 'react-native';
import { Dropdown } from "react-native-element-dropdown";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import theme from '../../utils/themes';
import styles from './styles';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
interface CustomDropdownComponentProps {
  options: Array<{ label: string; value: string }>;
  onSelect: (selectedItem: any) => void;
  selectedValue?: string;
}

const CustomDropdownComponent: React.FC<CustomDropdownComponentProps> = ({
  options,
  onSelect,
  selectedValue,
}) => {
  const renderLeftIcon = () => (
    <Icon name="credit-card-outline" size={20} color={theme.colors.navyBlue} style={{ marginRight: hp('1%') }} />
  );
  const renderRightIcon = () => (
    <Icon name="chevron-down" size={20} color={theme.colors.navyBlue} />
  );
  return (
    <View style={styles.container}>
      <Dropdown
        data={options}
        style={styles.dropdown}
        labelField="label"
        valueField="value"
        value={selectedValue}
        onChange={item => onSelect(item.value)}
        placeholder={!selectedValue ? 'Select Payment Method' : undefined}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.containerListStyle}
        itemTextStyle={styles.containerListStyle}
        containerStyle={styles.containerStyles}
        renderLeftIcon={renderLeftIcon}
        renderRightIcon={renderRightIcon}
      />
    </View>
  );
};

export default CustomDropdownComponent;
