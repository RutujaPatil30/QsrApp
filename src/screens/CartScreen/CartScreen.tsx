import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, Image } from "react-native";
import CustomButton from "../../components/CustomButton/CustomButton";
import CustomCartElement from "../../components/CustomCartElement/CustomCartElement";
import baselocalization from "../../utils/baselocalization";
import theme from "../../utils/themes";
import styles from "./styles";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useDispatch, useSelector } from "react-redux";
import { images } from "../../utils/images";


const CartScreen = (props: any) => {
    const dispatch = useDispatch();
    const userId = useSelector((state: any) => state.reducer.currentUser.id);
    const cartItems = useSelector((state: any) => state.reducer.cartItems);
    const [totalItems, setTotalItems] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [isEmpty, setIsEmpty] = useState(true);

    useEffect(() => {
        let count = 0;
        cartItems.forEach(item => {
          if (item.userId === userId) {
            count = 1;
            setIsEmpty(false);
          }
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

    return !isEmpty ? (
        <View>
            <View style={styles.topView}>
                <Text style={styles.pageTitle}>{baselocalization.cartScreen.cartScreenTitle}</Text>
            </View>
            <ScrollView style={styles.scrollViewStyle} >
                {cartItems.map(item =>
                    <View style={{ margin: 20 }}>
                        <CustomCartElement
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
                        <Text style={styles.totalPriceText}>Rs {totalPrice}</Text>
                    </View>
                </View>
            </ScrollView>
            <View style={styles.buttonContainer}>
                <CustomButton text={baselocalization.cartScreen.cartScreenButtonText}
                    disabled={false}
                    buttonStylesProps={{
                        backgroundColor: theme.colors.primary,
                        borderColor: theme.colors.primary,
                        textColor: theme.colors.white,
                        width: wp('85%'),
                        height: hp('6%'),
                        fontSize: theme.fonts.labels
                    }}
                    onPress={() => { }}
                />
            </View>
        </View>
    ) : (
            <View style={styles.container}>
                <View style={styles.topView}>
                    <Text style={styles.bottomContainer1}>
                        {baselocalization.cartScreen.cartScreentitle}
                    </Text>
                    <Text style={styles.bottomContainer2}>
                        {baselocalization.cartScreen.cartScreennoItem}
                    </Text>
                </View>
                <View style={styles.noRideContainer}>
                  <>
                    <Image source={images.cartScreen_emptyCart} style = {styles.noRideImage}/>
                  </>
                </View>
    </View>
    )
}

export default CartScreen;