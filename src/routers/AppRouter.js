import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ExpenseDashboard from '../components/Dashboard/ExpenseDashboard';
import AddExpense from '../components/AddExpense/AddExpense';
import EditExpense from '../components/EditExpense/EditExpense';
import Help from '../components/HelpPage/Help';
import Nav from '../components/Nav/Nav';
import PageNotFound from '../components/PageNotFound/PageNotFound';

const AppRouter = () => (
	<BrowserRouter>
		<div>
			<Nav />
			<Switch>
		    <Route path="/" component={ExpenseDashboard} exact={true} />
		    <Route path="/create" component={AddExpense} />
		    <Route path="/edit/:id" component={EditExpense} />
		    <Route path="/help" component={Help} />
		    <Route component={PageNotFound} />
		  </Switch>
	  </div>
	</BrowserRouter>
);

export default AppRouter;