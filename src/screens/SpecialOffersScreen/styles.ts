import {StyleSheet} from 'react-native';
import theme from '../../utils/themes';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.lightGrey,
    alignItems:'center',
    padding: hp('1.5%'),
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor:theme.colors.white,
    borderRadius: hp('1%') ,
    paddingHorizontal: hp('1.5%'),
    margin: hp('1%'),
  },
  searchInput: {
    flex: 1,
    padding: hp('1%'),
    color: theme.colors.black,
  },
  flatListItem: {
    padding: hp('1%'),
  },
});
