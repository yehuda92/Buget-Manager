import React, { useContext, useState, useEffect }from 'react'
import { ExpenseListContext } from '../context/ExpenseListContext';



const ExpenseForm = () => {
    const {addExpense, clearList, editItem, editExpense} = useContext(ExpenseListContext);
    const [expense, setExpense] = useState({title: "", sum: ""});
    
    
    const handleSubmit = e => {
        e.preventDefault()
        if (!editItem) {
          addExpense(expense)
          setExpense({title: "", sum: ""})
          
        } else {
          editExpense(expense, editItem.id)
        }
      }   

      useEffect(() => {
        if (editItem) {
          setExpense(editItem)
          
        } else {
          setExpense({title: "", sum: ""})
        }
      }, [editItem])

    return (
        <form className="form" onSubmit={handleSubmit}>
             <input
                type="text"
                placeholder="עבור"
                value={expense.title}
                onChange={e => setExpense({...expense, title: e.target.value})}
                required
                className="expense-input"
            />
             <input
                type="number"
                placeholder="סכום"
                value={expense.sum}
                onChange={e => setExpense({...expense, sum: e.target.value})}
                required
                className="expense-input"
            />
            <div className="buttons">
                <button type="submit" className="btn add-expense-btn">
                    {editItem ? "ערוך" : "הוסף"}
                </button>
                <button onClick={clearList} type="submit" className="btn clear-btn">
                    מחק הכל
                </button>
            </div>
        </form>
    )
}

export default ExpenseForm
