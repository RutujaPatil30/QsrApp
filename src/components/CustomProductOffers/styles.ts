import {StyleSheet} from 'react-native';
import theme from '../../utils/themes';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: hp('35%'),
  },
  fixedHeightContainer: {
    borderRadius: hp('3%'),
    elevation: 3,
    backgroundColor: theme.colors.white,
    width:wp('36%'),
    height: hp('30%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: wp('35%'),
    height: hp('12%'),
    resizeMode: 'contain',
  },
  textContainer: {
    alignItems: 'center',
    padding:  hp('1.5%'),
  },
  textStyle: {
    color: theme.colors.black,
    fontWeight: '500',
    textAlign: 'center',
  },
  textStyle1: {
    color: theme.colors.secondary,
    fontWeight: '500',
    textAlign: 'center',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    left: '50%',
    marginLeft: -hp('6.5%'),
  },
  
});
