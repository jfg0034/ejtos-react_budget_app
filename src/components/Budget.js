import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    
    const { budget, handleUpdateBudget, totalExpenses } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const handleBudgetChange = (event) => {
        if(event.target.value > 20000) {
            alert("Please enter a budget lower than 20,000");
        }
        else {
            setNewBudget(event.target.value);
        }
    }
    const setBudgetChange = () => {
        if (newBudget < totalExpenses) {
            // at least set the budget to the minimum budget
            setNewBudget(totalExpenses);
            alert("Please increase the Budget, your spending is higher.");
        }
        else {
            handleUpdateBudget(newBudget);
        }
        
    }

    return (
<div className='alert alert-secondary'>
<span>Budget: £</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange} min = "0"></input>
<button className="btn btn-primary" onClick={setBudgetChange} style={{ marginLeft: '1rem' }} >
                        Set
                    </button>
</div>
    );
};
export default Budget;
