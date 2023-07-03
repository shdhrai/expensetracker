import './ExpenseForm.css';
import { useState } from 'react';

const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const [enterdState, setState] = useState("AddNewExpense");

    const submitHandler = (event) =>{
        event.preventDefault();
        
            const expenseData = {
                title: enteredTitle,
                amount: +enteredAmount,
                date: new Date(enteredDate),
            };
            
            props.onSaveExpenseData(expenseData);

            setEnteredTitle("");
            setEnteredAmount("");
            setEnteredDate("");
            setState('AddNewExpense');
    };

       // SHARED CHANGE HANDLER
       const inputChangeHandler =(identifier, value)=>{
        if(identifier ==='title')
        {
            setEnteredTitle(value);
        }
        else if(identifier ==='date')
        {
            setEnteredDate(value);
        }
        else
        {
            setEnteredAmount(value);
        }
    };

    const AddNewExpensesButtonHandler = ()=>{
        setState('NewExpense');
    }

    const cancelButtonHandler = ()=>{
        setState('AddNewExpense')
    }

    const AddNewExpenseButton =                 
        <div className='new-expense__actions'>
            <button value='AddNewExpense' onClick={AddNewExpensesButtonHandler}>Add New Expense</button>
        </div>

    const Form =   
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__controls'>
                    <label>Title</label>
                    <input type='text' value={enteredTitle} onChange={(e) => inputChangeHandler('title', e.target.value)} />
                </div>
                <div className='new-expense__controls'>
                    <label>Amount</label>
                    <input type='number' value={enteredAmount} min="0.01" step="0.01" onChange={(e) => inputChangeHandler('amount', e.target.value)} />
                </div>
                <div className='new-expense__controls'>
                    <label>Date</label>
                    <input type='date' value={enteredDate} min="2022-05-1" onChange={(e) => inputChangeHandler('date', e.target.value)} />
                </div>
            </div>
            <div  className='new-expense__action'>
                <div className='new-expense__actions'>
                        <button value='cancel' onClick={cancelButtonHandler}>Cancel</button>
                </div>
                <div className='new-expense__actions'>
                    <button value='addexpense' type='submit'>Add Expense</button>
                </div>
            </div>

        </form>


    if(enterdState ==="AddNewExpense")
    {
        return AddNewExpenseButton;
    }
    else if(enterdState==='NewExpense')
    {
        return Form;
    }
};

export default ExpenseForm;