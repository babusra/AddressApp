import {View, Text} from 'react-native';
import React, {FC} from 'react';
import {BottomSheet} from 'react-native-btr';

interface Props {
  visible: boolean;
  toggleBottomNavigationView: () => void;
  content: any;
}

const CustomBottomSheet: FC<Props> = props => {
  const {visible, toggleBottomNavigationView, content} = props;
  return (
    <BottomSheet
      visible={visible}
      onBackButtonPress={toggleBottomNavigationView}
      onBackdropPress={toggleBottomNavigationView}>
      <View>{content}</View>
    </BottomSheet>
  );
};

export default CustomBottomSheet;
