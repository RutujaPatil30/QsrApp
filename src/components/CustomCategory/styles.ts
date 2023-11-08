import {StyleSheet} from 'react-native';
import theme from '../../utils/themes';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginRight: wp('2%'),
    backgroundColor: theme.colors.lightGrey,
    padding: wp('2%'),
    borderRadius: wp('2%'),
  },
  image: {
    height:hp("10%"),
    width:wp('25%'),
    resizeMode: 'contain',
  },
  textStyle: {
    color: theme.colors.black,
  },
});
