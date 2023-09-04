import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image, TouchableOpacity, TouchableHighlight, Button,} from 'react-native';


export default function App() {

  // comment for user to check in for the day
  const handlePress = () => {
    alert('AAAAAAAA')
  }
  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: './homescreen.jpg',
        }}
      />
      <Text style={styles.setFontSizeOne}> Welcome to your daily zen space, An :)</Text>
      <StatusBar style="auto" />
      <Button
        title='Continue here'
        style={styles.button}
        onPress={handlePress}
      />
    </View>
  );
}

// this is where the attributes are
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  setFontSizeOne: {
    fontSize: 20 
  },
});
