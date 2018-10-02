import React, { Component } from 'react';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import { sortByCategory } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import './App.css';
const store = configureStore();


store.dispatch(addExpense({ createdAt: 2000, description: 'Gas bill', category: 'bills', account: 'Chase', amount: 8800}));
store.dispatch(addExpense({ createdAt: 1000, description: 'Phone bill', category: 'bills', account: 'Chase', amount: 8200 }));
store.dispatch(addExpense({ createdAt: 5000, description: 'Dog Food', category: 'Saphie', account: 'Citi', amount: 6000}));
store.dispatch(addExpense({ createdAt: 3000, description: 'Rent', category: 'Rent', account: 'Chase', amount: 95200}));

//store.dispatch(sortByCategory());

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

class App extends Component {
  render() {
    return (
      <div>
      	<Provider store={store}>
        	<AppRouter />
        </Provider>
      </div>
    );
  }
}
export default App;
