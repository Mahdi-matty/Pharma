import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>no i like this!</Text>
      <StatusBar style="auto" />
      <Link href='/profile'>Profile</Link>
    </View>
  );
}

