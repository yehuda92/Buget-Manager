import React, {createContext, useState, useEffect} from "react";
import { v4 as uuidv4 } from 'uuid';
export const ExpenseListContext = createContext()


const ExpenseListContextProvider = props => {
    const initialState = JSON.parse(localStorage.getItem('expenses')) || []
    const initialTotalStat = JSON.parse(localStorage.getItem('total')) || 0
    const [expenses, setExpense] =  useState(initialState);

    const [editItem, setEditItem] = useState(null);

    const [total, setTotal] = useState(initialTotalStat);

    useEffect(() => {
        localStorage.setItem('expenses', JSON.stringify(expenses))
        localStorage.setItem('total', JSON.stringify(total))
    },[expenses],[total]);

    const addExpense = (expense) => {
        setExpense([...expenses, {title: expense.title, sum: expense.sum, id: uuidv4()}])
        setTotal(total + Number(expense.sum));
    }

    const clearList = () => {
        setExpense([]);
        setTotal(0);
    }

    const removeExpense = e => {
        setTotal(total - Number(e.sum));
        setExpense(expenses.filter(expense => expense.id !== e.id))
    }

    const findItem = id => {
       const item = expenses.find(expense => expense.id === id)
       setEditItem(item);
    }

    const editExpense = (ex, id) => {
        console.log("b",total);
        console.log("a",total);

        const newExpense = expenses.map(expense => (expense.id === id ? { title: ex.title, sum: ex.sum, id: ex.id } : expense) )
 
        setExpense(newExpense)
        const temp = newExpense.find(expense => expense.id === id)
        console.log(temp);
        setTotal(total + Number(temp.sum) - Number(editItem.sum));
        setEditItem(undefined)
    };

    
    return (
        <ExpenseListContext.Provider value={{
            expenses,
            total,
            addExpense,
            removeExpense,
            clearList,
            findItem, 
            editExpense, 
            editItem
            }}>
            {props.children}
        </ExpenseListContext.Provider>
    )
   
};

export default ExpenseListContextProvider;