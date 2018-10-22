import React from 'react';
import {Component} from 'react';
import $ from 'jquery';

class Demo extends Component {
  constructor(props){

    super(props);
  }


  componentWillMount(){
    $(function () {

      let order = {
        'merchantId': 'sample string 1',
        'orderItems': [
          {
            'qtyOrdered': 1,
            'name': 'sample string 2',
            'description': 'sample string 3',
            'price': 4,
            'itemId': 'sample string 5',
            'inStock': true,
            'stock': 1,
          },
          {
            'qtyOrdered': 1,
            'name': 'sample string 2',
            'description': 'sample string 3',
            'price': 4,
            'itemId': 'sample string 5',
            'inStock': true,
            'stock': 1,
          },
        ],
        'taxTotal': 2,
        'shippingTotal': 3,
        'discountTotal': 4,
        'promotion': {
          'orderSubTotal': 1.1,
          'promoAmt': 2.1,
          'promoId': 'sample string 3',
          'promotionName': 'sample string 4',
          'start': '10/21/2018',
          'end': '10/21/2018',
          'minimumOrderValue': 1.1,
          'promotionType': 'ValueOff',
        },
        'merchantOrderReference': 'sample string 5',
        'orderId': 'sample string 6',
        'orderDate': 1,
        'signature': 'sample string 7',
      };

      $.post('http://jst.edchavez.com/api/order/', function (order) {
        console.log(order);
        $();
      });
    });
  }

  render(){
    return (
      <div></div>
    );
  }
}

export default Demo;