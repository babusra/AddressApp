import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AddressListScreen from '../../screens/AddressListScreen';

const MaintStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="AddressListScreen" component={AddressListScreen} />
    </Stack.Navigator>
  );
};

export default MaintStack;
