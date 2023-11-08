import {StyleSheet} from 'react-native';
import theme from '../../utils/themes';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';



export const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: theme.colors.backgroundGrey,
    paddingVertical:hp('2%'),
    
  },
  flatlistContainer: {
    width: wp('95%'),
    alignSelf: 'center',
    padding: hp('1%'),
  },
});
