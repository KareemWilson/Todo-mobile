import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Tasks from './components/Tasks';
import Login from './screens/Login/Login';
import Signup from './screens/Signup/Signup';

export default function App() {
  return (
    <View style={styles.container}>
      <Signup />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
