import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice.jsx';
import './CartItem.css';

function CartItem({ onContinueShopping }) {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  // Helper to calculate total cost for a specific plant item
  const calculateTotalCost = (item) => {
    const numericPrice = typeof item.cost === 'string'
      ? parseFloat(item.cost.replace('$', ''))
      : Number(item.cost);
    return (numericPrice * item.quantity).toFixed(2);
  };

  // Helper to calculate the grand total for all items in the cart
  const calculateTotalAmount = () => {
    return cartItems
      .reduce((total, item) => {
        const numericPrice = typeof item.cost === 'string'
          ? parseFloat(item.cost.replace('$', ''))
          : Number(item.cost);
        return total + numericPrice * item.quantity;
      }, 0)
      .toFixed(2);
  };

  // Handle incrementing quantity
  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  // Handle decrementing quantity; remove item if quantity drops to 0
  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  // Handle removing item directly
  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  // Handle continue shopping click
  const handleContinueShoppingClick = (e) => {
    if (onContinueShopping) {
      onContinueShopping(e);
    }
  };

  // Handle checkout click
  const handleCheckout = () => {
    alert('Coming Soon');
  };

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h2 className="total-cart-amount">
          Total Cart Amount: ${calculateTotalAmount()}
        </h2>
      </div>

      {cartItems.length === 0 ? (
        <div className="empty-cart-state">
          <p>Your cart is empty</p>
          <button
            className="continue-shopping-btn"
            onClick={handleContinueShoppingClick}
            aria-label="Continue Shopping"
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <>
          <div className="cart-items-list">
            {cartItems.map((item) => (
              <div className="cart-item-row" key={item.name}>
                <div className="cart-item-details">
                  <img
                    className="cart-item-thumbnail"
                    src={item.image}
                    alt={item.name}
                  />
                  <div className="cart-item-info">
                    <span className="cart-item-name">{item.name}</span>
                    <span className="cart-item-unit-price">
                      Unit Price: {typeof item.cost === 'string' && item.cost.startsWith('$') ? item.cost : `$${item.cost}`}
                    </span>
                  </div>
                </div>

                <div className="cart-item-quantity-section">
                  <button
                    className="quantity-btn quantity-decrement"
                    onClick={() => handleDecrement(item)}
                    aria-label={`Decrease quantity of ${item.name}`}
                  >
                    -
                  </button>
                  <span className="quantity-value">{item.quantity}</span>
                  <button
                    className="quantity-btn quantity-increment"
                    onClick={() => handleIncrement(item)}
                    aria-label={`Increase quantity of ${item.name}`}
                  >
                    +
                  </button>
                </div>

                <div className="cart-item-subtotal-section">
                  <span className="cart-item-total-cost">
                    Total: ${calculateTotalCost(item)}
                  </span>
                  <button
                    className="delete-btn"
                    onClick={() => handleRemove(item)}
                    aria-label={`Delete ${item.name} from cart`}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-actions">
            <button
              className="continue-shopping-btn"
              onClick={handleContinueShoppingClick}
              aria-label="Continue Shopping"
            >
              Continue Shopping
            </button>
            <button
              className="checkout-btn"
              onClick={handleCheckout}
              aria-label="Checkout"
            >
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default CartItem;
