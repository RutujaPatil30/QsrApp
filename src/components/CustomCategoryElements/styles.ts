import {StyleSheet} from 'react-native';
import theme from '../../utils/themes';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: hp('2%'),
    backgroundColor: theme.colors.white,
    width: '100%',
    alignItems: 'center',
    padding: 8,
    elevation: 8,
    borderColor: theme.colors.white,
  },
  imageContainer: {
    width: '20%',
    alignItems: 'center',
    marginHorizontal:hp('1.5%'),
  },
  image: {
    alignSelf:'center',
    width:hp('20%'),
    height: 100,
    resizeMode:'stretch'
  },
  textHeaderStyle: {
    fontSize: theme.fonts.buttonText,
    fontWeight: '600',
    color: theme.colors.black,
  },
  viewContainer1: {
    width: '60%',
    paddingLeft: theme.fonts.detailsLabel,
  },
  viewSubContainer1: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textSubContainer1: {
    fontSize: theme.fonts.buttonText,
    marginTop: hp('0.2%'),
    color: theme.colors.black,
  },
 
});
