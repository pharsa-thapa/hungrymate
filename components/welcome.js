import React from 'react';
import { StyleSheet, Text, View, Button, TouchableHighlight, Image } from 'react-native';


export default class Welcome extends React.Component<Props> {

  static navigationOptions = {
    title: 'Welcome',
  };

  constructor(props){
    super(props);
    const { params } = this.props.navigation.state;
  }



  render() {
    const { navigate } = this.props.navigation;

      return (

      <View style={styles.container}>


        <View style={styles.pageContainer}>
          <Text style={styles.welcomeNote}>Welcome to Hungry Mate !</Text>

            <Image source={require('../resources/hungry_mate.png')} />

          <Text style={styles.alert}>HUNGRY?</Text>
          <Text> Let us help you find some stuffs.</Text>
            <View style={{marginTop:30}}>

                  <TouchableHighlight
                      style={styles.buttonSuccess}
                      onPress={(event) => {
                        // onPress event fires with an event object
                        const { navigate } = this.props.navigation;
                        navigate('CartScreen', { });
                    }}
                      accessibilityLabel="Pick some stuffs"
                    >
                        <Text style={styles.buttonText}>OK </Text>
                    </TouchableHighlight>
            </View>
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212529',

  },

  pageContainer:{
    backgroundColor:'white',
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },

  topBar :{
    backgroundColor:'transparent',
  },

  welcomeNote: {
    fontSize: 30,
    fontWeight : 'bold',
    color:'green',
    paddingTop: 10,
    paddingBottom: 10,
  },

  alert:{
    color:'red',
    fontSize:16,
    fontWeight : 'bold',
    marginTop:10,
  },

  buttonSuccess: {
    alignItems: 'center',
    backgroundColor: 'green',
    margin : 1,
    borderColor:'white'
  },

  buttonText :{
    fontSize:16,
    color:'white',
    padding:10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
