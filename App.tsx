import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './navigators/AuthStack';
import MainStack from './navigators/MainStack';

const user = true

export default function App() {
  return (
    <NavigationContainer>
      {!user ? <AuthStack /> : <MainStack />}
      
    </NavigationContainer>
  );
}
