import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';

const ExpenseListItem = ({ dispatch, category, id, account, description, amount, createdAt }) => (
		<div>
			<h3>{description}</h3>
			<p>{category} - {account} - {amount} - {createdAt}</p>
			<button onClick={() => {
			dispatch(removeExpense({id}));
		}}>Remove</button>
		</div>
);

export default connect()(ExpenseListItem);