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

store.dispatch(addExpense({ description: 'rent'}));
store.dispatch(addExpense({ description: 'electric'}));
store.dispatch(addExpense({ description: 'phone'}));
//store.dispatch(setTextFilter('rent'));
//store.dispatch(sortByCategory());

setTimeout(() => {
	store.dispatch(setTextFilter('rent'));
}, 3000)

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
