import React from 'react';
import { StyleSheet, Text, View, Button, Picker, Alert, ScrollView, Modal, TouchableHighlight, TextInput, FlatList } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';

import {  StackNavigator } from 'react-navigation';

import CustomHelper from '../lib/customhelper';


export default class CartScreen extends React.Component<Props> {

  static navigationOptions = {
    title: 'Home',
  };


constructor(event){
    super();
    this.state = {
      isLoading: true,
      throttlemode:'',
      selectedBusiness : '',
      activeList : [],

      cartItems:[],

      cartTotal : 0,
      estimatedPickUpTime : 0,
      businessList : [
        {value : 'Dumpling House',id :1},
        {value : 'Nepali and Indian restaurant',id :2},
        {value : 'Busy Burger center',id :3},
        {value : 'Panda\'s Pizza',id :4},
        {value : 'Billu\'s Biryani',id :5}
      ],
    }

    businessAndItemsList = [
         {'businessId': 1, 'items':[
               {'name': 'Chicken dumpling','id': 1, 'price' : '12.90'},
               {'name': 'Vegetable dumpling','id': 2, 'price':'10.99'},
               {'name': 'Pork dumpling', 'id': 3, 'price':'12.35'},
               {'name': 'Lamb dumpling', 'id': 4, 'price':'15.23'},
               {'name': 'Goat dumpling', 'id': 5, 'price':'15.17'},
            ]
          },

        {'businessId': 2, 'items':[
               {'name': 'Nepali Thali set', 'id': 6, 'price':'15.22'},
               {'name': 'Nepali dumpling/momo', 'id': 7, 'price':'10.32'},
               {'name': 'Rice with mutton curry', 'id': 8, 'price':'16.45'},
               {'name': 'Butter chicken with 2pcs naan', 'id': 9, 'price':'15.62'},
               {'name': 'Rice with chicken curry', 'id': 10, 'price':'16.99'},
            ]
          },
      {'businessId': 3, 'items':[
               {'name': 'Cheese Burger','id': 11, 'price':'9.00'},
               {'name': 'Quarter Pounder Burger','id': 12, 'price':'12.45'},
               {'name': 'Mc Chicken Burger', 'id': 13, 'price':'13.98'},
               {'name': 'Double Beef and Bacon Burger', 'id': 14, 'price':'14.76'},
               {'name': 'Big Mac burger', 'id': 15, 'price':'16.00'},
            ]
          },
          {'businessId': 4, 'items':[
               {'name': 'Pepperoni Pizza', 'id': 16, 'price':'15.00'},
               {'name': 'Mushroom and Tomato Pizza','id': 17, 'price':'12.99'},
               {'name': 'Chicken Pizza', 'id': 18, 'price':'14.00'},
               {'name': 'BBQ chicken Pizza', 'id': 19, 'price':'9.00'},
               {'name': 'Meat lovers pizza', 'id': 20, 'price':'20.00'},
            ]
          },
          {'businessId': 5, 'items':[
               {'name': 'Chicken dum Biryanyi','id': 21, 'price':'15.32'},
               {'name': 'Goat Biryani','id':22, 'price':'12.00'},
               {'name': 'Vegetable Biryani', 'id': 23, 'price':'14.80'},
               {'name': 'Egg Biryani', 'id': 24, 'price':'16.00'},
               {'name': 'Pork Biryani', 'id': 25, 'price':'20.90'},
            ]
          }
        ];

        itemQuantityCounter =[
          {value :0},
          {value :1},
          {value :2 },
          {value :3 },
          {value :4 },
          {value :5 },
          {value :6 }
        ];

}




  render() {

    const { navigate } = this.props.navigation;

    return (
      // this.businessList =

      <View style={styles.container}>

        <View style={styles.pageContainer}>

        <Text style={styles.heading2}>
            Please select a business to place an order.
        </Text>
            <Dropdown
                containerStyle={{}}
                label='Choose the place of business'
                data = {this.state.businessList}
                onChangeText = {(value, id) =>
                    this.handleBusinessChange(value,id)}
            />


            <ScrollView style={{}}>
            {
                this.state.activeList.map((item, index) => (
                    <View key = {item.id} style = {styles.itemContainer}>
                        <View style={styles.item}>
                          <View>
                             <Text style={{width : 290, fontSize:20, padding: 10}}>
                                {item.name}
                             </Text>

                             <Text style={{paddingLeft: 10, fontSize:14}}>
                                ${item.price}/-
                             </Text>
                          </View>
                        </View>

                   <View style={styles.itemCounterButtonGroup}>

                        <Dropdown
                            containerStyle={{}}
                            label='Qty'
                            data = {itemQuantityCounter}
                            onChangeText = {(value) =>
                               this.handleQuantityChange(value, item.id, item.name, item.price)
                             }
                        />

                        </View>

                </View>
                 ))
}

           </ScrollView>

           <View style = {styles.nextButtonBar}>
           <TouchableHighlight
               style={styles.buttonSuccess}
               onPress={(event) => {
                 // onPress event fires with an event object
                 const { navigate } = this.props.navigation;
                 this.state.estimatedPickUpTime = CustomHelper.getPickUpTime();

                 if((this.state.selectedBusiness ==='' ) ){
                   alert('Please select a business and item/s to proceed! ');
                   return false;
                 }
                 if((this.state.cartItems).length < 1){
                   alert('Please add at least 1 quantity for 1 item to continue');
                   return false;
                 }

                 navigate('Summary', { estimatedPickUpTime : this.state.estimatedPickUpTime, cartItems : this.state.cartItems, cartTotal: this.state.cartTotal });
             }}
               accessibilityLabel="Continue to checkout"
             >
             <Text style={styles.buttonText}> Continue </Text>
           </TouchableHighlight>

           </View>

        </View>


      </View>
    );
  }

  handleBusinessChange(business,itemid){
    itemid+=1;
    businessItems = businessAndItemsList.find(x => x.businessId === itemid);

    this.setState({
            activeList:businessItems.items,
            selectedBusiness:business
    });
    this.setState({
        cartItems:[]
    });

  }

  handleQuantityChange(quantity, itemId, name, price){
     if(!isNaN(quantity)){
       if(quantity > 0){
         //calculate new subTotalForNewItem
         subTotalForNewItem = CustomHelper.getSubtotal(quantity, parseFloat(price));
         // prepare new item
         newItem = {'name': name, 'id': itemId, 'price':price, 'quantity':quantity, 'subtotal' : subTotalForNewItem+''}
         //remove previous entry
         this.removeItemFromCart(itemId);
         // addNewItem
         this.addNewItemToCart(newItem);

         newCartTotal = CustomHelper.getTotal(this.state.cartItems);

         this.setState({
           cartTotal: newCartTotal
         });

       }else{
          this.removeItemFromCart(itemId);
       }
     }
  }

  addNewItemToCart(newItem){
    currentCartItems = this.state.cartItems;
      currentCartItems.push(newItem);
      this.setState({
        cartItems: currentCartItems
      });
  }

  removeItemFromCart(itemId){

    currentCartItems = this.state.cartItems;
    item = currentCartItems.find(x => x.id === itemId);
    index = currentCartItems.indexOf(item);
    if(index>-1){
      currentCartItems.splice(index,1);
    }

    this.setState({
      cartItems:currentCartItems
    });

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

  PickerStyleClass:{
      backgroundColor:'#ccc',
      paddingLeft: 7,
      marginBottom: 7,
      height: 40,
      borderWidth: 1,
      borderColor: '#FF5722',
  },

  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    height: 80,
    // backgroundColor: '#ccc',
    borderColor:'#ccc',
    borderWidth: 2,
  },

  itemCounterButtonGroup: {
    width :200
  },

buttonContainer:{
  backgroundColor:'#ccc',
  borderRadius:2,
  borderColor:'white',
  height:38,
  padding:2,
  alignItems:'center',
  borderWidth:2
},

  counterButtonContainer:{
    justifyContent: 'space-between',
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

  nextButtonBar : {
    height: 60,
    backgroundColor : 'transparent',
    paddingTop: 10,
  },

  modalDialog: {
    height:50,
    width:'auto',
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: 'skyblue'
  },
  questionFormat: {
    fontSize: 24,
    fontWeight : 'bold',
    color:'#000',
    paddingTop: 10,
    paddingBottom: 10,
  },

  error:{
    color:'red',
    fontSize:16
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

  heading2: {
    fontSize: 18,
    color:'#000',
    paddingTop: 10,
    paddingBottom: 10,
  },
});
