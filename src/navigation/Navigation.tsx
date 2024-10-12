import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './rootNavigation';
import MaintStack from './stacks/MaintStack';

const Navigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <MaintStack />
    </NavigationContainer>
  );
};

export default Navigation;
