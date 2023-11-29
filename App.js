import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Icon, Div } from "react-native-magnus";


export default function App() {
  return (
    <View style={styles.container}>

        <Div>
          <Button bg="red100" h={40} w={40} rounded="circle" ml="md">
          <Icon name="scan1" color="red500" />
        </Button> 
        </Div>
        <Div style={{marginBottom:20}}>
          <Button bg="red100" h={40} w={40} rounded="circle" ml="md">
          <Icon name="scan1" color="red500" />
        </Button> 
        </Div>
      

      
      
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
