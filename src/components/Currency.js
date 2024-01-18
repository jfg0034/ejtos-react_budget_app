import React, { useContext } from 'react';
//import { AppContext } from '../context/AppContext';
const Currency = () => {

    return (
        <div className='row'>
            <div className="input-group mb-3" style={{ marginLeft: '2rem' }}>
                <label className="input-group-text" htmlFor="inputCurrencySelect">Currency: </label>
            
                <select className="custom-select" id="currencySelect" >
                    <option value="Dollar" name="dollar"> $ Dollar</option>
                    <option value="Pound" name="pound">£ Pound</option>
                    <option value="Euro" name="euro">€ Euro</option>
                    <option value="Ruppee" name="ruppee">₹ Ruppee</option>
                </select>
            </div>
        </div>
    );
};
export default Currency;
