import {StyleSheet} from 'react-native';
import {moderateScale} from '../../constants/Dimensions';
import {Colors} from '../../constants/Colors';

export const styles = StyleSheet.create({
  container: {gap: moderateScale(30), backgroundColor: Colors.white, flex: 1},
  button: {
    borderTopWidth: 1,
    borderTopColor: Colors.primaryGrey,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});
