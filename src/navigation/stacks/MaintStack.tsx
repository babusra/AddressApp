import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AddressListScreen from '../../screens/AddressListScreen';
import AddNewAddressScreen from '../../screens/AddNewAddressScreen';

const MaintStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="AddressListScreen" component={AddressListScreen} />
      <Stack.Screen
        name="AddNewAddressScreen"
        component={AddNewAddressScreen}
      />
    </Stack.Navigator>
  );
};

export default MaintStack;
