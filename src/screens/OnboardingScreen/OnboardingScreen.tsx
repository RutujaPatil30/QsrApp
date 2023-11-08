import React from 'react';
import { Image, SafeAreaView, Text, View } from 'react-native'
import { images } from '../../utils/images'
import styles from './styles'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import baselocalization from '../../utils/baselocalization';
import CustomButton from '../../components/CustomButton/CustomButton';
import theme from '../../utils/themes';


const OnboardingScreen = ( props:any ) =>{
    const {navigation} = props;
    return(
        <SafeAreaView style={styles.mainContainer}>
            <Image source={images?.onboarding_logo}  style = {styles.logoImage} resizeMode="contain" />
            <Image  source={ images?.onboarding_ronald} style = {styles.ronaldImage}resizeMode="contain"/>
            <Text style = {styles.title}>{baselocalization.onboardingScreen.onboardingScreenTitle}</Text>
            <Text style={styles.subtitle}>{baselocalization.onboardingScreen.onboardingScreenSubtitle}</Text>
            <View style = {styles.buttonContainer}>
                <CustomButton text={baselocalization.onboardingScreen.onboardingScreenButtonText} 
                    disabled={false}
                    buttonStylesProps={{
                        backgroundColor: theme.colors.secondary,
                        borderColor: theme.colors.secondary,
                        textColor: theme.colors.primary,
                        width: wp('80%'),
                        height: hp('5%'),
                        fontSize: undefined}}
                    onPress={()=>{navigation.navigate('LoginScreen')}}
                />
            </View>
        </SafeAreaView>
    )
}

export default OnboardingScreen

