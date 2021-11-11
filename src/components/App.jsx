import React from 'react'
import Header from './Header';
import ExpenseList from './ExpenseList';
import ExpenseListContextProvider from '../context/ExpenseListContext';
import ExpenseForm from './ExpenseForm';
import '../App.css';
import TotalExpenses from './TotalExpenses';
const App = () => {
    return (
        <ExpenseListContextProvider>
            <div className="container">
                <div className="app-wrapper">
                    <Header/>
                    <div className="main">
                        <ExpenseForm/>
                        <ExpenseList/> 
                    </div>
                </div>
           </div>
        </ExpenseListContextProvider>
    );
};

export default App
