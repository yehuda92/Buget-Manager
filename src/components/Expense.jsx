import React, {useContext} from 'react'
import { ExpenseListContext } from '../context/ExpenseListContext';

const Expense = ({expense}) => {
    const {removeExpense, findItem} = useContext(ExpenseListContext)
    return (
        <li className="list-item">
            <div>
               <span className="title">{expense.title}</span>
               <span className="sum">{expense.sum}</span>
            </div>
            <div>
                <button onClick={()=> removeExpense(expense)} className="btn-delete expense-btn">
                    <i className="fas fa-trash"></i>
                </button>
                <button onClick={() => findItem(expense.id)} className="btn-edit expense-btn">
                    <i className="fas fa-pen"></i>
                </button>
            </div>
        </li>
    );
};

export default Expense
