import { StyleSheet } from "react-native";
import theme from "../../utils/themes";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


export const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: hp('4%'),
        borderWidth: 1,
    },
    text:{
        fontWeight: 'bold',
        color: theme.colors.black,
        fontSize: theme.fonts.buttonText,
    }
})