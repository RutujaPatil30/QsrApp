import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import theme from "../../utils/themes";


const styles = StyleSheet.create({
    container :{
        flex:1, 
        backgroundColor:theme.colors.primary,
    },
    imageContainer:{
        height:hp('30%'),
        backgroundColor:theme.colors.primary,
        alignItems:'center'
    },
    imageStyles:{
        top:hp('8%'),
        resizeMode:'contain',
        width : hp('40%'),
        height: hp('30%'),
    },
    detailsContainer:{
        flex:1,
        paddingTop:hp('9%'),
    },
    bottomContainer:{
        top: hp('24%'),
        backgroundColor: theme.colors.white,
        borderTopRightRadius: hp('5%'),
        borderTopLeftRadius: hp('5%'),
        padding:hp('2.5%'),
    },
    productTitle:{
        fontSize:theme.fonts.title,
        fontWeight:'bold',
        color:theme.colors.black
    },
    priceLabel:{
        fontSize:theme.fonts.detailsLabel,
        color:theme.colors.secondary,
        fontWeight:'bold'
    },
    productdescription:{
        fontSize:theme.fonts.subtitle,
        paddingVertical:hp('1.5%'),
    },
    optionalContainer:{
        flexDirection:'row',
        alignItems:'center',
    },
    optionalText:{
        fontSize:theme.fonts.detailsLabel,
        color: theme.colors.black,
        fontWeight:'bold'
    },
    optionalLabel:{
        fontSize:theme.fonts.subtitle,
        fontWeight:'bold',
        marginLeft:hp('0.5%'),
    },
    textInputStyle:{
        backgroundColor: theme.colors.lightGrey,
        borderRadius: hp('1.5%'),
        alignSelf: 'center',
        width: wp('90%'),
        marginVertical:hp('2.5%'),
        padding:hp('1.5%')
    },
    buttonContainer:{
        flexDirection:'row',
        padding: hp('1.5%'),
        alignItems: 'center',
        justifyContent:'space-evenly',
        backgroundColor:theme.colors.white
    },
    iconContainer:{
        backgroundColor:theme.colors.primary,
        borderRadius:wp('15%'),
        justifyContent:'center',
        alignItems:'center',
        height: hp('5.7%'),
        width: wp('13%'),
    },
    animationView: {
        position: 'absolute',
        left: 6,
        right: 0,
        alignItems: 'center',
      },
})

export default styles;