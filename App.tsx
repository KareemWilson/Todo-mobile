import { Provider } from 'react-redux';
import AppStack from './navigators';
import { store } from './redux/store';



export default function App() {
  return (
    <Provider store={store}>
      <AppStack />
    </Provider>
  );
}
