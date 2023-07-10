import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import React from 'react';
import Card from '../UI/Card';



function Expenses(props){
  return(
    <Card className='expenses'>{
      props.item.map(
        expense => (
          <ExpenseItem 
          date={expense.date} 
          title={expense.title}
          amount={expense.amount}/>
        )
      )
    }

      
         
       
         
    </Card>
  )

}

export default Expenses;