import { StyleSheet } from "react-native";
import theme from "../../utils/themes";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:hp('2%'),
    },
    dropdown:{
        width: wp('80%'),
        borderWidth:0.5,
        paddingHorizontal:hp('1%'),
        paddingVertical:hp('1%'),
    },
    placeholderStyle:{
        padding:hp('1%'),
        fontSize:theme.fonts.authLabel,
        color:theme.colors.navyBlue,
    },
    containerListStyle:{
        fontSize:theme.fonts.authLabel,
        color:theme.colors.navyBlue
    },
    containerStyles:{
        borderWidth:0.5,
        borderColor:theme.colors.navyBlue,
    }
})

export default styles;