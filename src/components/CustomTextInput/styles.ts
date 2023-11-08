import {StyleSheet} from 'react-native';
import theme from '../../utils/themes';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    padding: hp('1%'),
    flex: 1,
  },
  iconContainer: {
    padding: hp('0.5%'),
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: theme.colors.black,
  },
  errorText: {
    color: theme.colors.primary,
  },
  labelText: {
    color: theme.colors.black,
    fontSize: theme.fonts.authLabel,
  },
  textInput: {
    backgroundColor: theme.colors.white,
    flex: 1,
    fontSize: theme.fonts.authLabel,
    color: theme.colors.black,
  },
});
