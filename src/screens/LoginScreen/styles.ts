import {StyleSheet} from 'react-native';
import theme from '../../utils/themes';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: wp('100%'),
    alignSelf: 'center',
    backgroundColor: theme.colors.white,
  },
  subContainer: {
    width: wp('90%'),
    alignSelf: 'center',
  },
  imageContainer: {
    alignItems: 'center',
  },
  image: {
    width: wp('30%'),
    height: wp('15%'),
    resizeMode:'contain'
  },
  accoutExistStyle: {
    color: theme.colors.black,
    fontSize: theme.fonts.authLabel
  },
  accoutExistBtnStyle: {
    color: theme.colors.primary,
    fontSize: theme.fonts.authLabel
  },
  accountExistViewStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: theme.fonts.authLabel,
  },
  errorText: {
    fontSize: theme.fonts.valueLabel,
    color: theme.colors.primary,
  },
  errorInput: {
    borderColor: theme.colors.primary,
  },
  button: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginVertical: wp('2.5%'),
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
