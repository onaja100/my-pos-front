import { useRef, useEffect, useState } from 'react';
import axios from 'axios';

import './sell-input.css';

function SellInput({ handleAddItem, handleFocus }) {
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState('');
  const [timer, setTimer] = useState(null);
  const [order, setOrder] = useState([]);
  
  useEffect(() => {
    if (inputRef.current) {
        inputRef.current.focus();
    }
  }, []);

  // if handleFocus is changed, focus the input
  useEffect(() => {
    // if (handleFocus || !handleFocus) {
    //     inputRef.current.focus();
    // }
    inputRef.current.focus();
  }, [handleFocus]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);

    // Clear the previous timer
    if (timer) {
        clearTimeout(timer);
    }

    // Set a new timer
    const newTimer = setTimeout(() => {
        fetchData(event.target.value);
        setInputValue('')
    }, 3000); 
    
    setTimer(newTimer);
  };

  // Function to send GET request
  const fetchData = async (query) => {
    // console.log(query)
    if (query) {
        // Replace 'your-backend-endpoint' with your actual backend endpoint
        try {
            const response = await axios.get(`http://localhost:8080/cart/order-id/${query}`);
            console.log(response.data); // Handle the response data as needed
            // setOrder(response.data);
            const item = response.data;
            item.qty = 1;
            handleAddItem(item);
        } catch (error) {
            console.error('Error fetching data: ', error);
        }
    }
  };

  return (
    <div className="find-item">
      <label htmlFor="item">Item:</label>
      <input type="text" id="item" 
        ref={inputRef}
        value={inputValue}
        onChange={handleInputChange}
      />
      {/* <button>find</button> */}
    </div>
  );
}

export default SellInput;