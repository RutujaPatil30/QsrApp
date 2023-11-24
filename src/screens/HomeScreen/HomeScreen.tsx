import React, { useState } from "react";
import { ScrollView, Text, View, Image, FlatList, TouchableOpacity } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { Searchbar } from "react-native-paper";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Carousel from 'react-native-reanimated-carousel';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import baselocalization from "../../utils/baselocalization";
import { category, carouselImages, data, images, SpecialOfferData } from "../../utils/images";
import theme from "../../utils/themes";
import styles from "./styles";
import CustomCategory from "../../components/CustomCategory/CustomCategory";
import CustomProductOffers from "../../components/CustomProductOffers/CustomProductsOffers";
import { useDispatch } from "react-redux";
import {add_to_cart_request, logout_request} from '../../redux/action';


const HomeScreen = (props: any) => {
    const dispatch = useDispatch();
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
    const [search, setSearch] = useState('');
    const [onDropDownOpen, setDropDownOpen] = useState(false);
    const [filteredCategories, setFilteredCategories] = useState(category);
    const { navigation } = props;

    
    const handleLogout = () => {
        navigation.navigate('OnboardingScreen'),
        dispatch(logout_request());
    };

    const filterCategories = (query: any) => {
        const filtered = category.filter(Kategori =>
            Kategori.title.toLowerCase().includes(query.toLowerCase()),
        );
        setFilteredCategories(filtered);
    };

    const addItems = (item: any) => {
        dispatch(add_to_cart_request(item));
    };

    const onPressDropDownFocus = () => {
        setDropDownOpen(true)
        setIsFocus(true)
    }
    const onPressDropDownBlur = () => {
        setDropDownOpen(false)
        setIsFocus(false)
    }

    const onPressAdd = (item :any) => {
        navigation.navigate('CartScreen'),
        addItems(item)
    }

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1, opacity: onDropDownOpen ? 0.2 : 1 }}>
            <View style={styles.topView}>
                <View style={styles.container}>
                    <TouchableOpacity onPress={() => { navigation.navigate('MapViewScreen') }}>
                        <Image source={images.homescreen_mcdIcon} style={styles.logo} resizeMode={'contain'} />
                    </TouchableOpacity>
                    <Dropdown testID="HomeScreen_LocationDropdown" data={data}
                        style={styles.dropdown}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.placeholderStyle}
                        itemTextStyle={styles.listItemTextStyle}
                        labelField="label"
                        valueField="value"
                        placeholder={baselocalization.homeScreen.homeScreenDropdownPlaceholder}
                        value={value}
                        onFocus={() => onPressDropDownFocus()}
                        onBlur={() => onPressDropDownBlur()}
                        onChange={item => {
                            //@ts-ignore
                            setValue(item.value);
                            setIsFocus(false);
                        }}
                        renderRightIcon={() => (
                            <Icon
                                color={theme.colors.white}
                                name='chevron-down'
                                size={20}
                            />
                        )}
                    />
                    <TouchableOpacity style={styles.iconContainer}>
                        <Icon
                            color={theme.colors.white}
                            name='logout'
                            size={26}
                            onPress={handleLogout}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.searchbarContainer}>
                    <Searchbar
                        testID="HomeScreen_ProductSearchbar"
                        placeholder={baselocalization.homeScreen.homeScreenSearch}
                        placeholderTextColor={theme.colors.grey}
                        onChangeText={text => {
                            setSearch(text);
                            filterCategories(text);
                        }}
                        value={search}
                        style={styles.searchbar}
                    />
                </View>
                <View style={styles.carouselContainer}>
                    <Carousel
                        testID="HomeScreen_Carousel"
                        loop
                        width={wp('90%')}
                        height={wp('60%')}
                        autoPlay={true}
                        mode={'parallax'}
                        data={[...new Array(3).keys()]}
                        scrollAnimationDuration={2500}
                        onSnapToItem={index => { }}
                        renderItem={({ index }) => (
                            <View style={{ flex: 1, }}>
                                <Image
                                    style={styles?.carouselImage}
                                    resizeMethod='auto'
                                    source={carouselImages[index]}
                                />
                            </View>
                        )}
                    />
                </View>

            </View>
            <View style={styles.categoryContainer}>
                <Text style={styles.categoryLabel} >
                    {baselocalization.homeScreen.homeScreenCategory}
                </Text>
                <FlatList
                    data={filteredCategories}
                    renderItem={({ item }) => (
                        <CustomCategory
                            testID="HomeScreen_ProductCategory"
                            itemImage={item.image}
                            itemTitle={item.title}
                            onPress={() => {
                                navigation.navigate('CategoryScreen', {title: item.title});
                            }}></CustomCategory>
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </View>

            <View style={styles.specialOffersContainer}>
                <Text style={styles.specialOffersLabel}>{baselocalization.homeScreen.homescreenSpecialOffers}</Text>
                <Text style={styles.viewAllLabel} onPress={() => {navigation.navigate('SpecialOffersScreen')}}>{baselocalization.homeScreen.homescreenOffersViewAll} </Text>
            </View>
            <View style={{ padding: 16, top: 30 }}>
                <FlatList
                    data={SpecialOfferData}
                    renderItem={({ item }) => (
                        <View style ={{padding:10}} >
                            <CustomProductOffers 
                                testID="HomeScreen_ProductOffers"
                                itemImage={item.image}
                                itemName={item.title}
                                itemPrice={item.price}
                                onPress= {() => {onPressAdd(item)}}
                                />
                        </View>
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </View>

        </ScrollView>
    )
}

export default HomeScreen;




// AIzaSyCMbrgU0BlBTch5-XGjsoXAnCaiGQvJ824