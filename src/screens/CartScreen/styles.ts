import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import theme from "../../utils/themes";


const styles = StyleSheet.create({
    container:{
        flex:1
    },
    topView: {
        height: hp('18%'),
        backgroundColor: theme.colors.secondary,
        padding: hp('2%'),
        borderBottomRightRadius: wp('10%'),
        borderBottomLeftRadius: wp('10%'),
        flexDirection:'row'
    },
    pageTitle: {
        fontSize: theme.fonts.detailsLabel,
        color: theme.colors.primary,
        fontWeight: 'bold',
    },
    scrollViewStyle: {
        flexGrow:1,
        position: 'absolute',
        top: hp('6%'),
        height: hp('100%'),
        padding: hp('2%'),
        borderRadius: wp('5%'),
    },
    totalItemViewStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: hp('2%'),
    },
    totalItemTextStyle: {
        color: theme.colors.black,
        fontSize: theme.fonts.subtitle
    },
    totalPriceText: {
        color: theme.colors.black,
        fontWeight: 'bold',
        fontSize: theme.fonts.labels
    },
    gratisStyle: {
        marginBottom:wp('3%') ,
        fontSize: theme.fonts.subtitle,
        color: theme.colors.black
    },
    buttonContainer :{
        flexDirection:"row",
        alignItems: "center",
        justifyContent:"space-evenly", 
        top:hp('70%')
    },
    TextContainer: {
        color: theme.colors.primary,
        fontSize: theme.fonts.detailsLabel,
        fontWeight: '500',
    },
    noRideContainer: {
        marginTop:hp('20%'),
        justifyContent: 'center',
        alignItems: 'center',
    },
    noRideImage: {
        width:wp('100%'),
        height: hp('25%'),
        resizeMode: 'contain',
    },
})

export default styles;