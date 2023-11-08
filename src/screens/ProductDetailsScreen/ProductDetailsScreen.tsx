import React, { useRef } from "react"
import { Text, TextInput, TouchableOpacity } from "react-native";
import { Image, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import * as Animatable from 'react-native-animatable';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import CustomButton from "../../components/CustomButton/CustomButton";
import baselocalization from "../../utils/baselocalization";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import theme from "../../utils/themes";
import Toast from 'react-native-simple-toast';
import styles from "./styles";
import { useDispatch } from "react-redux";
import { add_to_cart_request } from "../../redux/action";

const ProductDetailsScreen = (props: any) => {
    const { navigation, route } = props;
    const dispatch = useDispatch();
    const [text, setText] = React.useState('');

    const addItems = () => {
        dispatch(add_to_cart_request(route.params.itemDetails));
        Toast.show(baselocalization.productDetailsScreen.productsDetailsToast, Toast.SHORT);
    };
    
    return (
        <View style={styles.container}>
            <Animatable.View animation="fadeIn" style={{ flex: 1 }}>
                <View style={styles.detailsContainer}>
                    <ScrollView style = {styles.bottomContainer}>
                    <Text style={styles.productTitle}>{route.params.name}</Text>
                    <Text style={styles.priceLabel}>Rs. {route.params.price}</Text>
                    <Text style={styles.productdescription}>{route.params.description}</Text>
                    <View style={styles.optionalContainer}>
                        <Text style={styles.optionalText}>{baselocalization.productDetailsScreen.productDetailsOptionalText}</Text>
                        <Text style={styles.optionalLabel}>{baselocalization.productDetailsScreen.productDetailsOptionalLabel}</Text>
                    </View>
                    <TextInput
                        placeholder={baselocalization.productDetailsScreen.productsDetailsTextInput}
                        placeholderTextColor={theme.colors.grey}
                        value={text}
                        onChangeText={text => setText(text)}
                        style={styles.textInputStyle}
                    />
                    </ScrollView>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.iconContainer}
                        onPress={addItems}>
                        <Icon
                            name="plus"
                            size={25}
                            color={theme.colors.white}
                        />
                    </TouchableOpacity>
                    <CustomButton text={baselocalization.onboardingScreen.onboardingScreenButtonText}
                        disabled={false}
                        buttonStylesProps={{
                            backgroundColor: theme.colors.primary,
                            borderColor: theme.colors.primary,
                            textColor: theme.colors.white,
                            width: wp('75%'),
                            height: hp('6%'),
                            fontSize: theme.fonts.labels
                        }}
                        onPress={()=>{navigation.navigate('CartScreen')}}
                    />
                </View>
                <Animatable.View animation="slideInUp" style={styles.animationView}>
                    <Image source={route.params.image} style={styles.imageStyles} />
                </Animatable.View>
            </Animatable.View>
        </View>
    )
}

export default ProductDetailsScreen;