import { createStore, combineReducers} from 'redux';
import { uuid } from 'uuid';

// ADD_EXPENSE
const addExpense = (
{ 
	description = '', 
	note = '', account = '', 
	category = '', 
	amount = 0, 
	createdAt = 0, 
	transactionDate = 0
} = {}) => ({
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
const removeExpense = ({ id } = {}) => ({
	type: 'REMOVE_EXPENSE',
	id
});

// EDIT_EXPENSE
const editExpense = (id, updates) => ({
	type: 'EDIT_EXPENSE',
	id,
	updates
});

// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
	type: 'SET_TEXT_FILTER',
	text
});

// SORT_BY_DATE
const sortByDate = () => ({
	type: 'SORT_BY_DATE'
});

// SORT_BY_AMOUNT
const sortByAmount = () => ({
	type: 'SORT_BY_AMOUNT'
});

// SORT_BY_CATEGORY
const sortByCategory = () => ({
	type: 'SORT_BY_CATEGORY'
});
// SET_START_DATE
const setStartDate = (startDate) => ({
	type: 'SET_START_DATE',
	startDate

});

// SET_END_DATE
const setEndDate = (endDate) => ({
	type: 'SET_END_DATE',
	endDate
});

// Expense Reduce
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
	switch (action.type) {
		case: 'ADD_EXPENSE':
		return return [
		...state,
		action.expense
		];
		case: 'REMOVE_EXPENSE':
		return state.filter(( id ) => id !== action.id);
		case: 'EDIT_EXPENSE':
		return state.map((expense) => {
			if (expense.id === action.id){
				return {
					...expense,
					...action.updates
				};
			} else {
				return expense;
			}
		});
		default:
		return state;
	}
};

// Filter Reducer
filtersReducerDefaultState = {
	text: '',
	sortBy: 'date',
	startDate: undefined,
	endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
	switch (action.type) {
		case 'SET_TEXT_FILTER':
		return {
			...state,
			text: action.text
		};
		case 'SORT_BY_AMOUNT':
		return {
			...state,
			sortBy: 'amount'
		};
		case 'SORT_BY_DATE':
		return {
			...state,
			sortBy: 'date'
		};
		case 'SORT_BY_CATEGORY':
		return {
			...state,
			sortBy: 'category'
		};
		case 'SET_START_DATE':
		return {
			...state,
			startDate: action.startDate
		};
		case 'SET_END_DATE':
		return {
			...state,
			endDate: action.endDate
		};
		default:
		return state;
	}
};


// Get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
	return expenses.filter((expense) => {
		const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
		const endDateMatch typeof endDate !== 'number' || expense.createdAt <= startDate;
		const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

		// figure out if expenses.description has the text variable string inside of it
		return startDateMatch && endDateMatch && textMatch;

	}).sort((a, b) => {
		if (sortBy === 'date') {
			return a.createdAt < b.createdAt ? 1 : -1
		} else if(sortBy === 'amount') {
			return a.amount < b.amount ? 1 : -1
		} else if(sortBy === 'category') {
			return a.category < b.category ? 1 : -1
		}
	});
};

// Store creation
const store = createStore(
	combineReducers({
		expenses: expensesReducer,
		filters: filtersReducer
	})
);

store.subscribe(() => {
	const state = store.getState();
	const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
	console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: 1000}));
const expenseTwo = store.dispatch(addExpense({ description: 'Mocha', amount: 200, createdAt: -1000}));

store.dispatch(removeExpense({ id: expenseOne.expense.id }));
store.dispatch(editExpense( id: expenseTwo.expense.id, { amount: 500 }));

store.dispatch(setTextFilter('rent'));
store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
store.dispatch(sortByDate());
store.dispatch(sortByCategory());

store.dispatch(setStartDate(125));
store.dispatch(setStartDate());

store.dispatch(setEndDate(1250));




const demoState = {
	expenses:[{
		id: '1',
		transactionDate: '20182509'
		description: 'rent',
		account: 'Chase',
		category: 'Bills',
		amount: '$911.00',
		note: 'this is for rent',
		createdAt: 0
	}],
	filters: {
		text: 'rent',
		sortBy: 'amount',
		startDate: undefined,
		endDate: undefined
	}
};