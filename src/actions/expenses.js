import uuid from 'uuid';


// ADD_EXPENSE
export const addExpense = (
	{ 
		description = '', 
		note = '', 
		account = '', 
		category = '', 
		amount = 0, 
		createdAt = 0, 
		transactionDate = 0
	} = {}
) => ({
	type: 'ADD_EXPENSE',
	expense: {
		id: uuid(),
		description,
		note,
		category,
		amount,
		createdAt,
		transactionDate
	}
});

// DELETE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
	type: 'REMOVE_EXPENSE',
	id
});

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
	type: 'EDIT_EXPENSE',
	id,
	updates
});