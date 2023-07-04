import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Animals from './src/components/Animals';


export default function App() {
  return (
    <View style={styles.container}>
      <Animals />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E2E5DE',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
