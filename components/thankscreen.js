import React from 'react';
import { StyleSheet, Text, View, Button, Picker, Alert, ScrollView, Modal, TouchableHighlight, TextInput } from 'react-native';


export default class ThankYou extends React.Component {

constructor(event){
  super();
    this.state = {
      isLoading: true,
      throttlemode:'',
    }
  }


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topBar}>
            <Text style= {{paddingTop:40,paddingBottom:30, paddingLeft:10, paddingRight:'auto', textAlign: 'left', fontSize:20, fontWeight:'bold', color:'white'}}>Hungry Mate</Text>
        </View>
        <View style={styles.pageContainer}>
        <Text style={styles.thankYou}>Thank you for ordering with us!</Text>
        <Text> We will process your order asap.</Text>
          <View style={{marginTop:30}}>
              <Button
                color='skyblue'
                onPress={this._handlePress}
                style={{backgroundColor:'white', marginTop:50, width: 'auto'}}
                title='Go Home'
                accessibilityLabel="Go Home"
                />
          </View>
        </View>
      </View>
    );
  }

  _handlePress(event){
    alert('going home');
  }

  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212529',

  },

  pageContainer:{
    paddingTop:20,
    paddingLeft:20,
    paddingRight:20,
    backgroundColor:'white',
    flex:1
  },

  topBar :{
    backgroundColor:'transparent',
  },
  thankYou :{
    fontSize: 40,
    color:'black',
    paddingTop: 10,
    paddingBottom: 10,
  }



});
