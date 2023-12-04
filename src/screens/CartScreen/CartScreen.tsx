import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import CustomButton from "../../components/CustomButton/CustomButton";
import CustomCartElement from "../../components/CustomCartElement/CustomCartElement";
import baselocalization from "../../utils/baselocalization";
import theme from "../../utils/themes";
import styles from "./styles";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useDispatch, useSelector } from "react-redux";
import { images } from "../../utils/images";
import RazorpayCheckout from 'react-native-razorpay';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { addRecentOrder, clearCart } from "../../redux/action";

const CartScreen = (props: any) => {
    const { navigation } = props;
    const dispatch = useDispatch();
    const cartItems = useSelector((state: any) => state.reducer.cartItems);
    const userDetails = useSelector((state: any) => state.reducer.currentUser);
    const userId = useSelector((state: any) => state.reducer.currentUser.id);
    const [totalItems, setTotalItems] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [isEmpty, setIsEmpty] = useState(true);

    useEffect(() => {
        let count = 0;
        cartItems.forEach(item => {
            count = 1;
            setIsEmpty(false);
        });
        if (count == 0) {
            setIsEmpty(true);
        }
    }, [cartItems]);

    useEffect(() => {
        let newTotalItems = 0;
        let newTotalPrice = 0;

        cartItems.forEach(item => {
            newTotalItems += item.qty;
            newTotalPrice += item.qty * item.price;
        });
        setTotalItems(newTotalItems);
        setTotalPrice(newTotalPrice);
    }, [cartItems]);

    const PayNow = () => {
        var options = {
            description: "Cart Items",
            image: 'https://andhra.mallsmarket.com/sites/default/files/styles/large/public/images/brands/McDonalds-Logo.jpg',
            currency: 'INR',
            key: 'rzp_test_6BL5V2w5EMP1xC',
            amount: totalPrice * 100,
            name: `McDonald's`,
            order_id: '',
            prefill: {
                email: userDetails.email,
                contact: userDetails.phoneNumber,
                name: userDetails.name,
            },
            theme: { color: theme.colors.primary },
        };
        RazorpayCheckout.open(options)
            .then(data => {
                alert(`Success: Payment Successful`);
                const orderDetails = {
                    items: cartItems.map(item => ({
                        name: item.title, // Ensure 'title' is the correct field for the product name
                        price: item.price,
                        qty: item.qty
                    })),
                    totalPrice: totalPrice
                };
                dispatch(addRecentOrder(orderDetails));
                
                dispatch(clearCart()); 
            })
            .catch(error => {
                alert(`Error: ${error.code} | ${error.description}`);
            });
    }

    return !isEmpty ? (
        <View>
            <View style={styles.topView}>
                <Text style={styles.pageTitle}>{baselocalization.cartScreen.cartScreenTitle}</Text>
                <TouchableOpacity onPress={()=>{navigation.navigate('ProfileScreen')}}>
                    <Icon name="account-circle" size={35} color={theme.colors.primary} style={{ marginLeft: wp('55%') }} />
                </TouchableOpacity>
            </View>
            <ScrollView style={styles.scrollViewStyle} >
                {cartItems.map(item =>
                    <View style={{ margin: 20 }}>
                        <CustomCartElement
                            testID={"CartScreen_CartProduct"}
                            itemImage={item.image}
                            itemName={item.title}
                            itemPrice={item.price * item.qty}
                            itemQty={item.qty}
                            itemId={item.id} />
                    </View>
                )}

                <View style={styles.totalItemViewStyle}>
                    <View>
                        <Text style={styles.totalItemTextStyle}>
                            {baselocalization.cartScreen.cartScreenTotalItem}
                        </Text>
                        <Text style={styles.gratisStyle}>
                            {baselocalization.cartScreen.cartScreenBiayaPengiriman}
                        </Text>
                        <Text style={styles.totalPriceText}>
                            {baselocalization.cartScreen.cartScreenTotalBiaya}
                        </Text>
                    </View>
                    <View style={{ alignItems: 'flex-end' }}>
                        <Text style={styles.totalItemTextStyle}>{totalItems}</Text>
                        <Text style={styles.gratisStyle}>
                            {baselocalization.cartScreen.cartScreenGratis}
                        </Text>
                        <Text testID='CartScreen_TotalPrice' style={styles.totalPriceText}>Rs {totalPrice}</Text>
                    </View>
                </View>
            </ScrollView>
            <View style={styles.buttonContainer}>
                <CustomButton testID='CartScreen_NextButton' text={baselocalization.cartScreen.cartScreenPayButton}
                    disabled={false}
                    buttonStylesProps={{
                        backgroundColor: theme.colors.primary,
                        borderColor: theme.colors.primary,
                        textColor: theme.colors.white,
                        width: wp('45%'),
                        height: hp('6%'),
                        fontSize: theme.fonts.labels
                    }}
                    onPress={() => { PayNow() }}
                />
                <View style={{ marginBottom: 10 }}></View>
                <CustomButton testID='CartScreen_PayButton' text={baselocalization.cartScreen.cartScreenButtonText}
                    disabled={false}
                    buttonStylesProps={{
                        backgroundColor: theme.colors.primary,
                        borderColor: theme.colors.primary,
                        textColor: theme.colors.white,
                        width: wp('45%'),
                        height: hp('6%'),
                        fontSize: theme.fonts.labels
                    }}
                    onPress={() => { navigation.navigate("CardScreen") }}
                />
            </View>
        </View>
    ) : (
        <View style={styles.container}>
            <View style={styles.topView}>
                <Text style={styles.TextContainer}>
                    {baselocalization.cartScreen.cartScreennoItem}
                </Text>
            </View>
            <View style={styles.noRideContainer}>
                <>
                    <Image source={images.cartScreen_emptyCart} style={styles.noRideImage} />
                </>
            </View>
        </View>
    )
}

export default CartScreen;