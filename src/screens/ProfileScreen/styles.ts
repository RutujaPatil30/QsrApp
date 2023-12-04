import { StyleSheet } from "react-native";
import theme from "../../utils/themes";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
    },
    viewStyles: {
        width: wp('100%'),
        height: hp('1.5%'),
        backgroundColor: theme.colors.secondary,
        borderWidth: 1,
        borderColor: theme.colors.secondary,
    },
    titleStyles: {
        flex:8,
        padding: hp('2%'),
        fontSize: theme.fonts.title,
        fontWeight: 'bold',
        color: theme.colors.white,
    },
    innerContainer: {
        margin: hp('3%'),
        padding: hp('1%'),
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: theme.colors.lightGrey,
        borderRadius: hp('3%'),
    },
    imageContainer: {
        height: hp('15%'),
        width: hp('15%'),
        marginTop: hp('3%'),
        alignSelf: 'center',
        padding: hp('1%'),
        backgroundColor: theme.colors.lightGrey,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: hp('13%'),
        borderColor:theme.colors.primary,
        borderWidth:1,
    },
    initialContainer:{
        height: hp('10%'),
        width: hp('10%'),
        marginTop: hp('3%'),
        alignSelf: 'center',
        padding: hp('1%'),
        borderColor:theme.colors.primary,
        borderWidth:1,
        backgroundColor: theme.colors.lightGrey,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: hp('5%'),
    },
    imageStyles: {
        borderRadius: hp('9%'),
        height: hp('12%'),
        width: hp('12%'),
    },
    cardContainer: {
        borderWidth: 1.5,
        padding: hp('1.5%'),
        borderRadius: hp('2%'),
        marginBottom: hp('3%'),
        borderColor: theme.colors.grey,
        width: wp('80%'),
        alignSelf: 'center',
    },
    labelStyles: {
        fontSize: theme.fonts.authLabel,
        padding: hp('0.5%'),
        color: theme.colors.grey,
        fontWeight: '500',
    },
    detailsLabel: {
        fontSize: theme.fonts.labels,
        color: theme.colors.primary,
        fontWeight: '500',
    },
    modalContainer: {
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
    },
    avatarItem: {
        width: wp('18%'), 
        height: hp('10%'), 
        margin: hp('1%'),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.lightGrey,
        borderWidth:1.5,
        borderColor:theme.colors.black,
        borderRadius: hp('9%'),
    },
    avatarImage: {
        width: wp('12%'),
        height: hp('7%'),
    },
    avatarText: {
        fontSize: theme.fonts.title, 
        color: theme.colors.primary,
        fontWeight: 'bold',
    },
    closeText: {
        fontSize: theme.fonts.buttonText, 
        color: theme.colors.white,
        fontWeight: 'bold',
        marginBottom: hp('25%'), 
    },
    defaultText:{
        fontSize: theme.fonts.buttonText, 
        color: theme.colors.white,
        fontWeight: 'bold',
        marginLeft:hp('5%')
    },
    recentTextStyles:{
        paddingLeft: hp('3.2%'),
        color:theme.colors.primary,
        fontSize:theme.fonts.authLabel,
        fontWeight:'bold'
    },
    iconContainer:{
        alignSelf:'center',
        flex:1
    },
    topContainer:{
        flexDirection:'row',
        backgroundColor:theme.colors.primary
    },
    ordersContainer:{
        marginVertical:hp('1.5%'),
        backgroundColor:theme.colors.lightGrey,
        padding: hp('1.5%'),
        borderRadius: hp('2%'),
        width:wp('87%'),
        alignSelf:'center',
    },
    orderItem:{
        fontSize: theme.fonts.subtitle,
        color: theme.colors.grey,
    },
    orderTotalLabel:{
        fontSize: theme.fonts.subtitle,
        color: theme.colors.grey,
        fontWeight: '500',
    }

});


export default styles;