

export default class CustomHelper {


static getSubtotal(quantity, price){

  return ((quantity*price).toFixed(2)) + "";

  }



  static getTotal(cartItemsArray){
    var total = 0;

    cartItemsArray.forEach(function (arrayItem) {
      total+= parseFloat(arrayItem.subtotal);
    });

    return (total.toFixed(2)) + "";
  }



  static getPickUpTime(){

  return Math.floor((Math.random() * 20) + 5);

  }



}
