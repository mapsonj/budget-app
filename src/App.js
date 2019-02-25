import React, { Component } from 'react';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import { sortByCategory } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import './App.css';
import './firebase/firebase';
//import './playground/promises';
const store = configureStore();

store.dispatch(startSetExpenses());
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
