import { StyleSheet } from "react-native";
import theme from "../../utils/themes";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor:theme.colors.primary,
        paddingVertical:hp('5%'),
        paddingHorizontal:wp('5%'),
        alignItems:'center',
    },
    logoImage:{
        height:hp("15%"),
        width:wp('30%')
    },
    ronaldImage:{
        marginTop:hp('3%'),
        height:hp("40%"),
        width:wp('80%')
    },
    title:{
        color:theme.colors.white,
        fontSize:theme.fonts.title,
        fontWeight:'bold',
    },
    subtitle:{
        marginTop:hp('3%'),
        color:theme.colors.white,
        fontSize:theme.fonts.subtitle,
        textAlign:'center'
    },
    buttonContainer:{
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: hp('2%'),
        
    }
})

export default styles