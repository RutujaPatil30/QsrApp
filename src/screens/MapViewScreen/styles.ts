import { StyleSheet } from "react-native";
import theme from "../../utils/themes";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: theme.colors.white,
    },
    loaderContainer:{
        flex: 1,
        alignItems: 'center',
        justifyContent:'center',
    },
    map: {
        flex: 1,
        width: '100%',
    },
    fab: {
        position: 'absolute',
        bottom: wp('15%'),
        right: wp('10%'),
        backgroundColor: theme.colors.white,
        borderRadius: wp('8%'),
        width: wp('15%'),
        height: wp('15%'),
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 4,
        zIndex: 1,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: theme.colors.white,
        width: wp('80%'),
        borderRadius: wp('8%'),
        padding: wp('5%'),
        elevation: 5,
    },
    modalTitle: {
        fontSize: theme.fonts.buttonText,
        fontWeight: 'bold',
        marginBottom: wp('4%'),
    },
    modalCityItem: {
        paddingVertical: wp('3%'),
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.lightGrey,
    },
    modalCityText: {
        fontSize: theme.fonts.authLabel,
        color: theme.colors.primary,
    },
    modalCloseButton: {
        marginTop: wp('6%'),
        backgroundColor: theme.colors.primary,
        borderRadius: wp('6%'),
        padding: wp('3%'),
        alignItems: 'center',
    },
    modalCloseButtonText: {
        color: theme.colors.white,
        fontSize: theme.fonts.authLabel,
        fontWeight: 'bold',
    },
});


export default styles;