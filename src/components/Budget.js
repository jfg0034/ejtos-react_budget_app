import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, handleUpdateBudget } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        if(event.target.value > 20000) {
            alert("Please enter a budget lower than 20,000");
        }
        else {
            setNewBudget(event.target.value);
            handleUpdateBudget(event.target.value);
        }
        
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: £</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange} min = "0"></input>
</div>
    );
};
export default Budget;
