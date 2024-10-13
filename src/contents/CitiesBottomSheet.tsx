import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import CityItem from '../components/CityItem';
import {ItemSeparator} from '../components/ItemSeparator';
import {moderateScale, height} from '../constants/Dimensions';
import {Colors} from '../constants/Colors';
import {ICityType} from '../types/ICityType';

interface Props {
  data: ICityType[];
  onPress: (item: ICityType) => void;
}
const CitiesBottomSheet: React.FC<Props> = ({data, onPress}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({item}) => {
          return (
            <CityItem cityName={item.cityName} onPress={() => onPress(item)} />
          );
        }}
      />
    </View>
  );
};

export default CitiesBottomSheet;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: moderateScale(20),
    maxHeight: height / 1.2,
  },
});
