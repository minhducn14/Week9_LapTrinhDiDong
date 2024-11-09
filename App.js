import { Text, SafeAreaView, StyleSheet } from 'react-native';

import { Provider } from 'react-redux';
import { store } from './Redux/store';
import Display from './components/display'
export default function App() {
   return (
      <Provider store={store}>
          <Display />
      </Provider>
    );
}
