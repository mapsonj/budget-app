import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';

const ExpenseListItem = ({ dispatch, category, id, account, description, note, amount, createdAt }) => (
		<div>
			<h3>{description}</h3>
			<p>{createdAt} - {category} - {account} - {amount} - {note} </p>
			<button onClick={() => {
			dispatch(removeExpense({id}));
		}}>Remove</button>
		</div>
);

export default connect()(ExpenseListItem);