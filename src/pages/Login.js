import React from 'react';
import { 
	StyleSheet, 
	Text, 
	TextInput, 
	View, 
	Image,
	TouchableOpacity
} from 'react-native';

export default class Login extends React.component{
  render(){
    <View style={styles.container}>
      <Text>Hello World</Text>
    </View>
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4785e8'
  },
  textLabel: {
    color: '#707377'
  }
});
