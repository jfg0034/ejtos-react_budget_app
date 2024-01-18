import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Currency = () => {

    const { dispatch } = useContext(AppContext);

    const setCurrency = (event) => {
        if(event.target.value === "Pound") {
            dispatch({
                type: 'CHG_CURRENCY',
                payload: "£",
            });
        } 
        else if (event.target.value === "Euro"){
            dispatch({
                type: 'CHG_CURRENCY',
                payload: "€",
            });
        }
        else if (event.target.value === "Ruppee"){
            dispatch({
                type: 'CHG_CURRENCY',
                payload: "₹",
            });
        }
        else {
            dispatch({
                type: 'CHG_CURRENCY',
                payload: "$",
            });
        }
    }

    return (
        <div className='row'>
            <div className="input-group mb-3" style={{ marginLeft: '2rem' }}>
                <label className="input-group-text" htmlFor="currencySelect">Currency: </label>
            
                <div>
                
                <select className="custom-select" id="currencySelect" onChange={setCurrency}
                    style={{
                        backgroundColor: 'green',
                        color: 'white',
                        
                      }}>
                    <option value="Dollar" name="dollar"> $ Dollar</option>
                    <option value="Pound" name="pound" style={{ backgroundColor: '#f5f5f5', color: '#333' }}>£ Pound</option>
                    <option value="Euro" name="euro">€ Euro</option>
                    <option value="Ruppee" name="ruppee">₹ Ruppee</option>
                </select>

                </div>
            </div>
        </div>
    );
};
export default Currency;
