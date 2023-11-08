import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import theme from "../../utils/themes";


const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
    },
    topView:{
        height:hp("30%"),
        width:wp('100%'),
        backgroundColor:theme.colors.primary,
        padding:hp("2%"),
        flexDirection:'column',
    },
    logo:{
        height:hp("4%"),
        width:wp('10%'),
    },
    dropdown:{
        width: wp('50%'),
        alignSelf:'flex-start',
        marginHorizontal:wp('10%'),    
    },
    placeholderStyle:{
        textAlign:'center',
        fontSize:theme.fonts.labels,
        color:theme.colors.white
    },
    listItemTextStyle:{
        color:theme.colors.primary,
        fontSize:theme.fonts.listIten,
    },
    searchbarContainer:{
        padding:hp("2%"),
        justifyContent:'center',
        alignItems:'center'
    },
    searchbar:{
        width:wp('85%'),
        borderRadius:theme.fonts.subtitle,
    },
    carouselContainer:{
        position: 'absolute', 
        top: hp('15%'), 
        alignSelf:'center', 
    },
    carouselImage:{
        height:hp("25%"),
        width:wp('87%'),
        borderRadius: wp('2%'),
    },
    categoryContainer:{
        top: hp('8%'), 
        padding:hp("2%"),
    },
    categoryLabel:{
        fontSize:theme.fonts.buttonText,
        color:theme.colors.black,
        fontWeight:'bold',
        marginVertical:wp('5%')
    },
    specialOffersContainer:{
        flexDirection:'row',
        top: hp('7%'), 
        padding:hp("2%"),
        justifyContent:'space-between',
    },
    specialOffersLabel:{
        fontSize:theme.fonts.buttonText,
        color:theme.colors.black,
        fontWeight:'bold',
    },
    viewAllLabel:{
        fontSize:theme.fonts.subtitle,
        color: theme.colors.primary,
        fontWeight:'bold',
    },
    iconContainer:{
        alignSelf:'center', 
        marginLeft:wp('5%')
    }

})

export default styles;