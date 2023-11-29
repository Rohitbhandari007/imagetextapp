import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Div } from "react-native-magnus";
import Navigation from './components/navigation';
import History from './components/history';


export default function App() {
  return (
    <View style={styles.container}>
        <Div style={{
          marginTop:80
        }}>
          <Text fontSize="lg" fontWeight="bold">Image to Text</Text>
        </Div>
        <History />
        <Navigation />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
