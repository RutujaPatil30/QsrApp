import {StyleSheet} from 'react-native';
import theme from '../../utils/themes';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignSelf: 'center',
    backgroundColor: theme.colors.white,
  },
  subContainer: {
    width: '90%',
    alignSelf: 'center',
  },
  imageContainer: {
    alignItems: 'center',
  },
  genderStyle1: {
    color: 'grey',
    fontSize: theme.fonts.authLabel
  },
  image: {
    width: wp('30%'),
    height: wp('15%'),
    resizeMode:'contain'
  },
  accoutExistStyle: {
    color: theme.colors.black,
    fontSize: theme.fonts.buttonText
  },
  accoutExistBtnStyle: {
    color: theme.colors.primary,
    fontSize: theme.fonts.buttonText
  },
  accountExistViewStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  errorText: {
    fontSize: theme.fonts.valueLabel,
    color: 'red',
  },
  errorInput: {
    borderColor: 'red',
  },
  btn: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginVertical:wp('2.5%'),
  },
  viewHeaderStyle: {
    paddingVertical: wp('2.5%'),
    alignItems: 'center',
  },
  textHeaderStyle: {
    fontSize: theme.fonts.buttonText,
    color: theme.colors.black,
    fontWeight: '600',
  },
});
