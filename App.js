import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Table from './Components/Table';
import AddButton from './Components/AddButton';
import Constants from 'expo-constants'

export default function App() {
  return (
    <View style={styles.container}>
      <Table />
      <AddButton />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: Constants.statusBarHeight,
  },
});
