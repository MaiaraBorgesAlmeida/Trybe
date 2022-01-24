import React from 'react';

class Order extends React.Component { // 'App' é o componente pai em relação a 'Order'
  render() {
    const { user, product, price } = this.props.order;

    return (
      <div className="order">
        <p> {user} bought {product} for {price.value} {price.currency} </p>
      </div>
    );
  }
}

export default Order;