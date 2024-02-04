import React, { useState } from 'react';

import SellInput from './SellInput';
import SellRow from './SellRow';

import './Sell.css';

function Sell() {
    const [items, setItems] = useState([]);
    const [selectFocus, setSelectFocus] = useState(false);

    const addItem = (item) => {
        setSelectFocus(!selectFocus);
        // Check if the item is already in the list by id
        const existingItem = items.find(i => i.id === item.id);
        if (existingItem) {
            // If it is, increment the quantity
            const newItems = items.map(i => {
                if (i.id === item.id) {
                    return { ...i, qty: i.qty + 1 };
                }
                return i;
            });
            setItems(newItems);
            return;
        }
        setItems([...items, item]);
    }

    const handleFocusWhenChange = () => {
        setSelectFocus(!selectFocus);
    }

    return (
        <div>
            <SellInput handleAddItem={addItem} handleFocus={selectFocus} />
            <table className="sell-table">
                <thead>
                    <tr className='sell-table-header'>
                        
                        <th>name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>total</th>
                    </tr>
                </thead>
                <tbody>
                    <SellRow orderItem={items} handleFocus={handleFocusWhenChange} />
                </tbody>
            </table>
        </div>
    );
}

export default Sell;