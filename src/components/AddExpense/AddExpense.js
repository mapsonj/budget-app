import React from 'react';
import ExpenseForm from '../ExpenseForm';
import { connect } from 'react-redux';

const AddExpense = () => (
	<div>
		<h1>Add Expense</h1>
		<ExpenseForm 
			onSubmit={(expense) =>  {
				console.log(expense);
			}}
		/>
	</div>
);

export default AddExpense;