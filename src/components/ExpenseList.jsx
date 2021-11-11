import React, { useContext } from 'react'
import { ExpenseListContext } from '../context/ExpenseListContext'
import Expense from './Expense';

const ExpenseList = () => {
    const {expenses} = useContext(ExpenseListContext);
    return (
        <div>
            {expenses.length ? (
              <ul className="list">
                {expenses.map((expense) => {
                    return <Expense expense={expense} key={expense.id}/>;
                })}
              </ul>
            ) : (
                <div className="no-expenses">אין הוצאות</div>
            )}
           
        </div>
    )
}

export default ExpenseList
