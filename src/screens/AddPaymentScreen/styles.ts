import { StyleSheet } from "react-native";
import theme from "../../utils/themes";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:hp('2%'),
        backgroundColor:theme.colors.white,
    },
    textInputStyles:{
        borderWidth:1,
    }
})

export default styles;