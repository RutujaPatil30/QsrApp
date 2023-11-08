import {StyleSheet} from 'react-native';
import theme from '../../utils/themes';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: wp('5%'),
    backgroundColor: theme.colors.white,
    alignSelf:'center',
    width: wp('90%'),
    alignItems: 'center',
    justifyContent:'center',
    height:hp('12%'),
    elevation: 8,
    borderColor: theme.colors.white,
  },
  imageContainer: {
    width:wp('20%'),
  },
  image: {
    width: wp('20%'),
    height: hp('8%'),
  },
  textHeaderStyle: {
    fontSize: theme.fonts.labels,
    fontWeight: '600',
    color: theme.colors.black,
  },
  counterStyle: {
    backgroundColor: theme.colors.lightGrey,
    borderRadius: wp('3%'),
    padding:wp('0.5%'),
  },
  viewContainer: {
    width: wp('50%'),
    paddingLeft: wp('6%'),
  },
  viewSubContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp('1.5%'),
  },
  textSubContainer: {
    fontSize: theme.fonts.buttonText,
    marginHorizontal:hp('1.5%'),
    color: theme.colors.black,
  },
  priceContainer: {
    width: wp('15%'),
    marginRight:wp('2%'),
  },
  textPrice: {
    fontSize: theme.fonts.labels,
    color: theme.colors.secondary,
    fontWeight: 'bold',
  },
});
