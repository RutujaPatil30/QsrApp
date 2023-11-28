import { StyleSheet } from "react-native";
import theme from "../../utils/themes";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:hp('2%'),
        backgroundColor:theme.colors.white
    },
    titleStyles:{
        fontSize:theme.fonts.detailsLabel,
        color:theme.colors.primary,
        fontWeight:'bold',

    }
})

export default styles;