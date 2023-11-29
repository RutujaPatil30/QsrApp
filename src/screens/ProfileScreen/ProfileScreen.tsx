import React, { useState } from "react";
import { Text, View, Image, Modal, FlatList,TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { avatars, images } from "../../utils/images";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import styles from "./styles";
import baselocalization from "../../utils/baselocalization";

const ProfileScreen = (props: any) => {
    const { navigation } = props;
    const userDetails = useSelector((state: any) => state.reducer.currentUser);
    const [selectedAvatar, setSelectedAvatar] = useState(null);
    const [initials, setInitials] = useState(userDetails.name.charAt(0).toUpperCase());
    const [isAvatarModalVisible, setAvatarModalVisible] = useState(false);
    const toggleAvatarModal = () => {
        setAvatarModalVisible(!isAvatarModalVisible);
    };
   const onPressDefault = ()=>{
        setSelectedAvatar(null); 
        toggleAvatarModal();
   }
    const renderAvatar = ({item}) => {
        return <TouchableOpacity
            style={styles.avatarItem}
            onPress={() => {
                setSelectedAvatar(item);
                toggleAvatarModal();
            }}
        >
            <Image source={item} style={styles.avatarImage} />
        </TouchableOpacity>
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titleStyles}>{baselocalization.profileScreen.profileScreenTitle}</Text>
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
                    <View style={{flexDirection:'row',justifyContent:'space-evenly' }}>
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
        </View>
    )
}

export default ProfileScreen;