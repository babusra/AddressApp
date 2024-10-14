import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import AddressItem from './AddressItem';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../constants/Dimensions';
import {Colors} from '../constants/Colors';
import {ItemSeparator} from './ItemSeparator';
import {useTranslation} from 'react-i18next';

interface Props {
  addressData: any[];
}

const AddressList: React.FC<Props> = ({addressData}) => {
  const {t} = useTranslation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('registeredAddresses')}</Text>
      <FlatList
        data={addressData}
        ItemSeparatorComponent={ItemSeparator}
        contentContainerStyle={styles.listContainer}
        ListEmptyComponent={<Text>Kayıt yok</Text>}
        renderItem={({item}) => {
          return (
            <AddressItem
              address={{
                id: item?.id,
                cityName: item?.cityName,
                districtName: item?.districtName,
                addressTitle: item?.addressTitle,
                addressDetail: item?.addressDetail,
              }}
            />
          );
        }}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default AddressList;

const styles = StyleSheet.create({
  container: {paddingHorizontal: horizontalScale(16)},
  listContainer: {
    borderWidth: 1,
    borderColor: Colors.primaryGrey,
    gap: moderateScale(10),
    padding: moderateScale(15),
    borderRadius: 8,
  },
  title: {paddingBottom: verticalScale(15)},
});
