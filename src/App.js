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


store.dispatch(addExpense({ category: 'bills', description: 'Gas bill', amount: 8800}));
store.dispatch(addExpense({ category: 'bills', description: 'Phone bill', amount: 8200, createdAt: 1000}));
store.dispatch(addExpense({ category: 'Saphie', description: 'Dog Food', amount: 6000}));
store.dispatch(addExpense({ category: 'Rent', description: 'Rent', amount: 95200}));

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
