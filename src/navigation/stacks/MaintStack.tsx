import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AddressListScreen from '../../screens/AddressListScreen';
import AddNewAddressScreen from '../../screens/AddNewAddressScreen';

const MaintStack = () => {
  const Stack = createNativeStackNavigator();

  const SCREENS = {
    AddressListScreen: 'AddressListScreen',
    AddNewAddressScreen: 'AddNewAddressScreen',
  };

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={SCREENS.AddressListScreen}
        component={AddressListScreen}
      />
      <Stack.Screen
        name={SCREENS.AddNewAddressScreen}
        component={AddNewAddressScreen}
      />
    </Stack.Navigator>
  );
};

export default MaintStack;
