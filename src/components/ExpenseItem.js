import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    const decreaseAllocation = (name) => {
        const redExpense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: redExpense
        });

    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td>
            <button onClick={event=> increaseAllocation(props.name)} 
                style={{ 
                    backgroundColor: 'mediumseagreen', 
                    color: 'white', 
                    borderRadius: '50%',
                    width: '1em', 
                    height: '1em',  
                    fontSize: '3em',
                    fontWeight: 'bolder', 
                    //textAlign: 'center', 
                    verticalAlign: 'middle',
                    display: 'flex', 
                    lineHeight: '30px', 
                    
                }}>
                    +</button></td>
        <td><button onClick={event=> decreaseAllocation(props.name)} 
        style={{ 
            backgroundColor: 'red', 
            color: 'white', 
            borderRadius: '50%',
            width: '50px',
            height: '50px',
            //fontSize: '50px',
            //fontWeight: 'bolder',
            //lineHeight: '1em',
            //display: 'flex',
            //alignItems: 'center',
            //justifyContent: 'center',
            //verticalAlign: 'middle',
            //border: 'none',
        }}>
        <span style={{
            verticalAlign: 'middle', // Adjust vertical alignment for the text
            fontWeight: 'bolder',
            fontSize: '50px',
            lineHeight: '0.5em',
        }}>−</span>
        </button></td>
        <td ><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};



export default ExpenseItem;
