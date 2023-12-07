import React, { useState } from "react";
import { Text, View, Image, Modal, FlatList, TouchableOpacity, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { avatars } from "../../utils/images";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import styles from "./styles";
import baselocalization from "../../utils/baselocalization";
import { clearSelectedAvatar, logout_request, setSelectedAvatar } from "../../redux/action";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import theme from "../../utils/themes";


const ProfileScreen = (props: any) => {
    const { navigation } = props;
    const userDetails = useSelector((state: any) => state.reducer.currentUser);
    const selectedAvatar = useSelector((state: any) => state.reducer.selectedAvatar); // Access selected avatar from Redux state
    const dispatch = useDispatch();
    const [initials, setInitials] = useState(userDetails.name.charAt(0).toUpperCase());
    const [isAvatarModalVisible, setAvatarModalVisible] = useState(false);
    const recentOrders = useSelector((state: any) => state.reducer.recentOrders);

    const renderOrder = ({ item }) => (
        <View style={styles.ordersContainer}>
          {item.items.map((product, index) => (
            <View style={styles.orderItemContainer} key={index}>
                <Text style={styles.orderItem}>
                  {product.name} - {product.qty}
                </Text>
                <Text style={styles.orderPrice}>{product.price}</Text>
            </View>
          ))}
          <Text style={styles.orderTotalLabel}>Order Total: {item.totalPrice}</Text>
        </View>
      );
      
    const toggleAvatarModal = () => {
        setAvatarModalVisible(!isAvatarModalVisible);
    };
    const onPressDefault = () => {
        dispatch(clearSelectedAvatar());
        toggleAvatarModal();
    }
    const renderAvatar = ({ item }) => {
        return <TouchableOpacity
            style={styles.avatarItem}
            onPress={() => {
                toggleAvatarModal();
                dispatch(setSelectedAvatar(item));
            }}
        >
            <Image source={item} style={styles.avatarImage} />
        </TouchableOpacity>
    }
    const handleLogout = () => {
        navigation.navigate('OnboardingScreen'),
            dispatch(logout_request());
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.topContainer}>
                <Text style={styles.titleStyles}>{baselocalization.profileScreen.profileScreenTitle}</Text>
                <TouchableOpacity style={styles.iconContainer}>
                    <Icon
                        color={theme.colors.white}
                        name='logout'
                        size={26}
                        onPress={handleLogout}
                    />
                </TouchableOpacity>
            </View>

            <View style={styles.viewStyles}></View>
            <TouchableOpacity style={selectedAvatar ? styles.imageContainer : styles.initialContainer} onPress={toggleAvatarModal}>
                {selectedAvatar ? (
                    <Image source={selectedAvatar} style={styles.imageStyles} />
                ) : (
                    <Text style={styles.avatarText}>{initials}</Text>
                )}
            </TouchableOpacity>

            <Modal
                visible={isAvatarModalVisible}
                animationType="slide"
                transparent={true}
            >
                <View style={styles.modalContainer}>
                    <FlatList
                        contentContainerStyle={{ top: hp('20%') }}
                        data={Object.values(avatars)}
                        numColumns={4}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={(item) => renderAvatar(item)}
                    />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                        <Text onPress={toggleAvatarModal} style={styles.closeText}>{baselocalization.profileScreen.profileScreenClose}</Text>
                        <Text onPress={onPressDefault} style={styles.defaultText}>{baselocalization.profileScreen.profileScreenDefault}</Text>
                    </View>

                </View>
            </Modal>
            <View style={styles.innerContainer}>
                <Text style={styles.labelStyles}>{baselocalization.profileScreen.profileScreenNameLabel} </Text>
                <View style={styles.cardContainer}>
                    <Text style={styles.detailsLabel}>{userDetails.name}</Text>
                </View>
                <Text style={styles.labelStyles}>{baselocalization.profileScreen.profileScreenEmailLabel}</Text>
                <View style={styles.cardContainer}>
                    <Text style={styles.detailsLabel}>{userDetails.email}</Text>
                </View>
                <Text style={styles.labelStyles}>{baselocalization.profileScreen.profileScreenPhoneLabel}</Text>
                <View style={styles.cardContainer}>
                    <Text style={styles.detailsLabel}>{userDetails.phoneNumber}</Text>
                </View>
            </View>
            <Text style={styles.recentTextStyles}>Recent Orders</Text>
                <FlatList
                    data={recentOrders}
                    renderItem={renderOrder}
                    keyExtractor={(item, index) => index.toString()} 
                />
        </ScrollView>
    )
}

export default ProfileScreen;