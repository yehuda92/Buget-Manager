import React, {useContext, useState} from 'react'
import { ExpenseListContext } from '../context/ExpenseListContext';

const TotalExpenses = () => {
    const {total} = useContext(ExpenseListContext);

    return (
        <div className="header">
            <h1>סך הכל הוצאות {total}</h1> 
        </div>
    )
}

export default TotalExpenses
