import React, {useState} from 'react'
import Expenses from './components/Expense/Expenses';
import NewExpenses from './components/NewExpenses/NewExpenses';

let dummy__Expense=[
    {
        id: 1,
        date:new Date(2021,3,24),
        title:'School fee',
        amount:500
    },
    {
        id: 1,
        date:new Date(2021,3,25),
        title:'School dress',
        amount:200
    },
    {
        id: 1,
        date:new Date(2021,3,25),
        title:'School books',
        amount:150
    },
    {
        id: 1,
        date:new Date(2021,3,23),
        title:'School Girlfriend',
        amount:350
    },
   ]
function App(){
   const [expenses, setExpenses]= useState(dummy__Expense)
   
   const addExpenseHandler=(expense)=>{
    let updatedExpense= [expense,...expenses]
    setExpenses(updatedExpense)
   }
    return (
        <> 
        <NewExpenses onAddExpense={addExpenseHandler}/>
        <Expenses item={expenses}/>
        </>
    )
}

export default App;