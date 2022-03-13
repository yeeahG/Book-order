import React, { useState } from 'react'
import CartContext from './CartContext'

const CartProvider = (props) => {
    const [cartState, setCartState]=useState({
        // items: [{id: 'book1', name: 'THE OLD MAN AND SEA', price: 15.23, amount: 5}],
        // totalAmount: 76.15
        items: [],
        totalAmount: 0
    });

    //cart에 book 데이터를 추가하는 메소드
    const addItemToCartHandler=(item)=>{
        console.log(item);

        //1. 기본으로 add할 경우
        //기존의 cart에 등록된 items에 방금 새로 전달된 item 추가
        // const updatedItem=[...cartState.items, item];
        // setCartState({items: updatedItem});

        //2. add를 1개씩 여러번 추가했을 때 cart에 각각 listing되지 않고
        //중복된 수량으로 통합 연산되도록

        //이미 동일한 id값의 book이 cart에 존재할 경우 해당 book의 amount만 추가
        const existingCartItemIndex=cartState.items.findIndex(
            (cartItem)=>cartItem.id===item.id
        );

        const existingCartItem=cartState.items[existingCartItemIndex];
        
        let updatedItems;
        
        if(existingCartItem) { //이 객체가 null값이면 false 있으면 true
            const updatedItem={
                ...existingCartItem, amount: existingCartItem.amount+item.amount,
            };
            updatedItems=[...cartState.items];
            updatedItems[existingCartItemIndex]=updatedItem;
        }else { //방금 새로 등록한 book(item)이 cart에 존재하지 않을 때
            updatedItems=cartState.items.concat(item);
        }

        const updatedTotalAmount = cartState.totalAmount+item.price*item.amount;

        setCartState({items: updatedItems, totalAmount: updatedTotalAmount});
    };

    const cartContext={
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
    }

  return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>
}

export default CartProvider