import React from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import AddressItem from './AddressItem';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../constants/Dimensions';
import {Colors} from '../constants/Colors';
import {ItemSeparator} from './ItemSeparator';
import {useTranslation} from 'react-i18next';
import {SwipeListView} from 'react-native-swipe-list-view';
import {IAddressType} from '../types/IAddressType';

interface Props {
  addressData: IAddressType[];
  onDelete: (id: string) => void;
}

const AddressList: React.FC<Props> = ({addressData, onDelete}) => {
  const {t} = useTranslation();
  const renderHiddenItem = (data: {item: IAddressType}) => (
    <View style={styles.rowBack}>
      <TouchableOpacity
        style={[styles.backRightBtn, styles.backRightBtnRight]}
        onPress={() => onDelete(data.item.id)}>
        <Text style={styles.backTextWhite}>{t('delete')}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={{}}>
      <Text style={styles.title}>{t('registeredAddresses')}</Text>
      <SwipeListView
        data={addressData}
        renderItem={({item}) => (
          <View style={styles.rowFront}>
            <AddressItem
              address={{
                id: item?.id,
                cityName: item?.cityName,
                districtName: item?.districtName,
                addressTitle: item?.addressTitle,
                addressDetail: item?.addressDetail,
              }}
            />
          </View>
        )}
        renderHiddenItem={renderHiddenItem}
        rightOpenValue={-75}
        disableRightSwipe
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
        ItemSeparatorComponent={ItemSeparator}
        ListEmptyComponent={<Text>{t('noRecord')}</Text>}
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
    padding: moderateScale(10),
    borderRadius: 8,
  },
  title: {paddingBottom: verticalScale(15)},

  rowFront: {
    backgroundColor: '#FFF',
    justifyContent: 'center',
    height: 60,
    paddingHorizontal: horizontalScale(15),
  },
  rowBack: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: 15,
  },
  backRightBtn: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 75,
  },
  backRightBtnRight: {
    backgroundColor: 'red',
    right: 0,
  },
  backTextWhite: {
    color: '#FFF',
  },
});
