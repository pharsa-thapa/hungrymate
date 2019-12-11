import React from 'react';
import { StyleSheet, Text, View, Button, Picker, Alert, ScrollView, Modal, TouchableHighlight, TextInput } from 'react-native';

import { StackNavigator } from 'react-navigation';

export default class Summary extends React.Component<Props> {

  static navigationOptions = {
    title: 'Order Summary',
  };

constructor(props){
  super(props);

  const { params } = this.props.navigation.state;

  cartItems = params.cartItems;
  estimatedPickUpTime = params.estimatedPickUpTime;
  cartTotal = params.cartTotal;

  this.state = {
      isLoading: true,
      throttlemode:'',
      itemList : cartItems,
      cartTotal : cartTotal
    }
  }


  render() {

    const { navigate } = this.props.navigation;
    return (

      <View style={styles.container}>
        <View style={styles.pageContainer}>
            <Text style={styles.heading1}>

            Thank you for ordering with us!
            </Text>
            <Text style={styles.heading2}>
                Here is the summary of your order.
            </Text>

<ScrollView style={{}}>
            <View style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'row' }}>
              <Text style = {styles.tableHeader}>Description</Text>
              <Text style = {styles.tableHeader}>Quantity</Text>
              <Text style = {styles.tableHeaderRight}>Subtotal</Text>
            </View>

            {
               this.state.itemList.map((item, index) => (
                  <View style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'row' }} key = {item.id}>
                      <View style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'row' }}>
                           <Text style={styles.tableItem}>
                              {item.name} @ { item.price}
                           </Text>
                      </View>
                      <View style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'row' }}>
                           <Text style={styles.tableItemRightAligned}>
                              {item.quantity}
                           </Text>
                      </View>
                      <View style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'row' }}>
                           <Text style={styles.tableItemRightAligned}>
                              {item.subtotal}
                           </Text>
                      </View>
                </View>
               ))
            }

            <View style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'row' }}>
              <Text style = {styles.tableHeader}></Text>
              <Text style = {styles.tableHeader}>Total</Text>
              <Text style = {styles.tableHeaderRightAligned}>{this.state.cartTotal}</Text>
            </View>

            <View style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'row' }}>
              <Text style = {styles.tableHeader}>Expected Pickup Time</Text>
              <Text style = {styles.tableHeaderRightAligned}>{ estimatedPickUpTime } mins</Text>
            </View>
            </ScrollView>

            </View>

            <View style = {styles.nextButtonBar}>

              <View style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'row' }}>


              <TouchableHighlight
                  style={styles.buttonInfo}
                  onPress={(event) => {
                    // onPress event fires with an event object
                    const { navigate } = this.props.navigation;
                    navigate('Welcome', {});
                }}
                accessibilityLabel = "Lets go to home"
                >
                    <Text style={styles.buttonText}>Go Home </Text>
                </TouchableHighlight>


                  </View>
            </View>
      </View>
    );
  }

  _handleClick(event){
    alert('Button clicked');
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



  nextButtonBar : {
    height: 60,
    backgroundColor : 'white',
    paddingTop: 10,
  },

  heading1: {
    fontSize: 24,
    fontWeight : 'bold',
    color:'#000',
    paddingTop: 10,
    paddingBottom: 10,
  },

  heading2: {
    fontSize: 18,
    color:'#000',
    paddingTop: 10,
    paddingBottom: 10,
  },


  tableHeader:{
    flex: 1,
    alignSelf: 'stretch',
    flexDirection:'row',
    width :120,
    fontSize:16,
    fontWeight:'bold',
    color:'black',
    padding: 20,
    textAlign:'center'
  },

  tableHeaderRight: {
    flex: 1,
    alignSelf: 'stretch',
    flexDirection:'row',
    width :120,
    fontSize:16,
    fontWeight:'bold',
    color:'black',
    padding: 20,
    textAlign:'right'
  },

  tableHeaderRightAligned: {
    flex: 1,
    alignSelf: 'stretch',
    flexDirection:'row',
    width :120,
    fontSize:16,
    fontWeight:'bold',
    color:'black',
    padding: 20,
    textAlign:'right'
  },

  tableItem:{
    flex: 1,
    alignSelf: 'stretch',
    flexDirection:'row',
    width :120,
    fontSize:12,
    color:'black',
    padding: 20,
  },

  tableItemRightAligned : {
    flex: 1,
    alignSelf: 'stretch',
    flexDirection:'row',
    width :120,
    fontSize:12,
    color:'black',
    padding: 20,
    textAlign:'right'
  },

  buttonInfo: {
    flex: 1,
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'skyblue',
    margin :1,
    borderColor:'white'
  },

  buttonDanger: {
    flex: 1,
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    margin :1,
    borderColor:'white'
  },

  buttonSuccess: {
     flex: 1, alignSelf: 'stretch', flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'green',
    margin : 1,
    borderColor:'white'
  },

  buttonText :{
    fontSize:16,
    color:'white',
      textAlign: 'center'
  }

});
