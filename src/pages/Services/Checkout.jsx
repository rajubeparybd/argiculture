// src/pages/Services/Checkout.jsx
import React, { useContext } from 'react';
import styled from 'styled-components';
import { CartContext } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  padding: 100px 20px 40px;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const CartItem = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
  padding: 10px 0;
`;

const ItemInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Total = styled.p`
  font-weight: bold;
  text-align: right;
  margin-top: 20px;
`;

const CheckoutButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  float: right;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }             
`;

function Checkout() {
  const { cartItems, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const totalAmount = cartItems.reduce((total, item) => total + parseFloat(item.price), 0);

  const handleCheckout = () => {
    alert('Thank you for your purchase!');
    clearCart();
    navigate('/services/marketplace');
  };

  return (
    <Container>
      <Title>Checkout</Title>
      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <CartItem key={item.id}>
            <ItemInfo>
              <span>{item.name}</span>
              <span>{item.price} per {item.unit}</span>
            </ItemInfo>
          </CartItem>
        ))
      ) : (
        <p>Your cart is empty.</p>
      )}
      {cartItems.length > 0 && (
        <>
          <Total>Total Amount: {totalAmount.toFixed(2)}</Total>
          <CheckoutButton onClick={handleCheckout}>Proceed to Pay</CheckoutButton>
        </>
      )}
    </Container>
  );
}

export default Checkout;
