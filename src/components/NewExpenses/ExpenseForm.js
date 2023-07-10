import React, {useState} from "react";
import './ExpenseForm.css'

const ExpenseForm=(props)=>{
  const [enteredTitle, setEnteredTitle]=useState('');
  const [enteredAmount, setEnteredAmount]=useState('');
  const [enteredDate, setEnteredDate]=useState('');

  const titleChangehanlder=(event)=>{
    setEnteredTitle(event.target.value);
  }
  const amountChangehanlder=(event)=>{
    setEnteredAmount(event.target.value);
  }
  const dateChangehanlder=(event)=>{
    setEnteredDate(event.target.value);
  }

  const submitHandler=(event)=>{
        event.preventDefault();
        const expenseData={
          title:enteredTitle,
          amount:enteredAmount,
          date:new Date(enteredDate)
        }
        props.onSaveExpenseData(expenseData);
        setEnteredTitle(' ')
        setEnteredAmount(' ')
        setEnteredDate(' ')
        
  }
    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                  <label>Title*</label>
                  <input type="text" value={enteredTitle}onChange={titleChangehanlder} required/>
                </div>
                <div className="new-expense__control">
                  <label>Amount</label>
                  <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangehanlder} required/>
                </div>
                <div className="new-expense__control">
                  <label>Date</label>
                  <input type="date" value={ enteredDate}onChange={dateChangehanlder} required/>
                </div>
            </div>
            <div className="new-expense__actions">
            <button type='submit' >Add Expense</button>
            </div>
            
        </form>
    )
}

export default ExpenseForm;