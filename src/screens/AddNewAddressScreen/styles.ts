import {StyleSheet} from 'react-native';
import {moderateScale, verticalScale} from '../../constants/Dimensions';
import {Colors} from '../../constants/Colors';

export const styles = StyleSheet.create({
  container: {gap: moderateScale(30), backgroundColor: Colors.white, flex: 1},
  inputContainer: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#E6E9EE',
  },
  input: {
    backgroundColor: '#F9F9FB',
    fontSize: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#E6E9EE',
    height: verticalScale(60),
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  formContainer: {padding: moderateScale(20)},
  buttonCont: {
    borderTopWidth: 1,
    borderTopColor: Colors.primaryGrey,
    position: 'absolute',
    bottom: verticalScale(30),
    left: 0,
    right: 0,
  },
});
