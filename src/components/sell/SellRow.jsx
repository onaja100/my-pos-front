import React, { useState, useEffect } from "react";

import TotalSell from "./TotalSell";

const dummy = [
    { id: 1, name: "coke", price: 18.00, qty: 1, barcode: 123456789 },
    { id: 2, name: "pepsi", price: 20.00, qty: 1, barcode: 987654321 },
]

function SellRow({ orderItem, handleFocus }) {
    const [items, setItems] = useState([]);

    const incrementQty = (id) => {
        handleFocus()
        const newItems = items.map(item => {
            if (item.id === id) {
                return { ...item, qty: item.qty + 1 };
            }
            return item;
        });
        setItems(newItems);
    };

    // const decrementQty = (id) => {
    //     const newItems = items.map(item => {
    //         if (item.id === id && item.qty > 0) {
    //             return { ...item, qty: item.qty - 1 };
    //         }
    //         return item;
    //     });
    //     setItems(newItems);
    // };

    // update items when orderItem changes
    useEffect(() => {
        if (orderItem.length > 0) {
            // const newItems = orderItem.map(item => {
            //     const existingItem = items.find(i => i.id === item.id);
            //     if (existingItem) {
            //         return { ...existingItem, qty: existingItem.qty + 1 };
            //     }
            //     return { ...item, qty: 1 };
            // });
            setItems(orderItem);
        }
    }, [orderItem]);

    const decrementQty = (id) => {
        handleFocus()
        const newData = items.reduce((acc, item) => {
            if (item.id === id) {
                if (item.qty - 1 > 0) {
                    // If qty > 1, decrement it
                    acc.push({ ...item, qty: item.qty - 1 });
                }
                // If qty would be 0, don't add the item back to the array (effectively removing it)
            } else {
                // For all other items, keep them as they are
                acc.push(item);
            }
            return acc;
        }, []);
        setItems(newData);
    };

    return (
            <>
                {
                    items.length === 0 ? 
                    <tr>
                        <td colSpan="4">No items in cart</td>
                    </tr>
                    : items.map(item => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.price.toFixed(2)}</td>
                            <td>
                                {item.qty} 
                                <button onClick={() => decrementQty(item.id)}>-</button>
                                <button onClick={() => incrementQty(item.id)}>+</button>
                            </td>
                            <td>{(item.qty * item.price).toFixed(2)}</td>
                        </tr>
                    ))
                }
                <TotalSell products={items} />
            </>
    );
}

export default SellRow;