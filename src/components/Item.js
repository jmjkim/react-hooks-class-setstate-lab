import React, { useState } from "react";


class Item extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name : props.name,
      category : props.category,
      isInCart : false
    }
  }

  handleAddToCartClick() {
    this.setState({
      isInCart : !(this.state.isInCart)
    })
  }

  render() {
    return (
      <li className={this.state.isInCart ? "in-cart" : ""}>
        <span>{this.state.name}</span>
        <span className="category">{this.state.category}</span>
        <button
          className={this.state.isInCart ? "remove" : "add"}
          onClick={() => this.handleAddToCartClick()}
        >
          {this.state.isInCart ? "Remove From" : "Add to"} Cart
        </button>
      </li>
    );
  }
}

// function Item({ name, category }) {
//   const [isInCart, setIsInCart] = useState(false);

//   function handleAddToCartClick() {
//     setIsInCart((isInCart) => !isInCart);
//   }

//   return (
//     <li className={isInCart ? "in-cart" : ""}>
//       <span>{name}</span>
//       <span className="category">{category}</span>
//       <button
//         className={isInCart ? "remove" : "add"}
//         onClick={handleAddToCartClick}
//       >
//         {isInCart ? "Remove From" : "Add to"} Cart
//       </button>
//     </li>
//   );
// }

export default Item;
