import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import CustomIconButton from '../CustomIconButton/CustomIconButton';
import { styles } from './styles';

type CustomProductOffersProps = {
    itemImage: any;
    itemName: string;
    itemPrice: number;
    onPress?: any;
};

const CustomProductOffers = ({
    itemImage,
    itemName,
    itemPrice,
    onPress,
}: CustomProductOffersProps) => {
    return (
            <View style={styles.container}>
                <View style={styles.fixedHeightContainer}>
                    <Image source={itemImage} style={styles.image} />
                    <View style={styles.textContainer}>
                        <Text style={styles.textStyle}>{itemName}</Text>
                        <Text style={styles.textStyle1}>Rs {itemPrice}</Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        <View style={{ top: 12 }}>
                            <CustomIconButton
                                iconName="plus"
                                text="Tambah"
                                disabled={false}
                                onPress={onPress}
                            />
                        </View>
                    </View>
                </View>
            </View>
    );
};

export default CustomProductOffers;
