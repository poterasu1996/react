import React, { useState } from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);

    const saveExtenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);  // this is called Lifting the state up (we pass the data to parent component)
        setIsEditing(false);
    }

    const startEditingHandler = () => {
        setIsEditing(true);
    }

    const stopEditingHandler = () => {
        setIsEditing(false);
    }

    return (
    <div className="new-expense">
        {/* if Editing is flase, show the button */}
        {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
        {/* if Editing is true, show the form */}
        {isEditing && <ExpenseForm onSaveExpenseData={saveExtenseDataHandler} onCancel={stopEditingHandler} />}
    </div>
    );
};

export default NewExpense;