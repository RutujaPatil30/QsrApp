import { StyleSheet } from "react-native";
import theme from "../../utils/themes";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
  },
  container: {
    paddingVertical: hp('0.8%'),
    alignItems: 'center',
    borderRadius: hp('6%'),
    borderWidth: 1,
  },
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal:hp('1.5%'),
  },
  iconContainer: {
    backgroundColor: theme.colors.white,
    borderRadius: hp('5%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
    color: theme.colors.black,
    fontSize: theme.fonts.subtitle,
    marginLeft: wp('1.5%'),
  },
});
