import './ExpenseForm.css';
import { useState } from 'react';

const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: '',
    // });

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);

        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value,
        // });
        
        // Better way to update the value of states because in this way react makes sure that 
        // we get the latest updated value for the state. "Best Way to Update"

/*         setUserInput((prevState)=>{
            return{...prevState, enteredTitle: event.target.value};
        }); */
    };

    const amountChangeHandler = (e) => {
        setEnteredAmount(e.target.value);

        // setUserInput({
        //     ...userInput,
        //     enteredAmount: e.target.value,
        // });

/*         setUserInput((prevState)=>{
            return{...prevState, enteredAmount: e.target.value};
        }); */
    };
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);

        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value,
        // });

/*         setUserInput((prevState)=>{
            return{...prevState, enteredDate: e.target.value};
        }); */
    };

    const submitHandler = (event) =>{
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };
        
        props.onSaveExpenseData(expenseData);

        setEnteredTitle("");
        setEnteredAmount("");
        setEnteredDate("");
    };

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__controls'>
                    <label>Title</label>
                    <input type='text' value={enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className='new-expense__controls'>
                    <label>Amount</label>
                    <input type='number' value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler} />
                </div>
                <div className='new-expense__controls'>
                    <label>Date</label>
                    <input type='date' value={enteredDate} min="2022-05-1" onChange={dateChangeHandler} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
};

export default ExpenseForm;