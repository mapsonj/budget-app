import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import { sortByDate, sortByCategory, sortByAmount } from '../actions/filters';
import './ExpenseList.css';

const ExpenseList = (props) =>{
const { classes } = props;

const hola = (e) => {
			console.log(e.target.id);
			if (e.target.id === 'date') {
					props.dispatch(sortByDate());
				} else if (e.target.id === 'amount') {
					props.dispatch(sortByAmount());
				} else if (e.target.id === 'category') {
					props.dispatch(sortByCategory());
				}
};
return(
	<Paper className={"root"}>
      <Table className={"table"}>
        <TableHead>
          <TableRow>
            <TableCell><TableSortLabel id='date' onClick={hola}>Date</TableSortLabel></TableCell>
            <TableCell>Description</TableCell>
            <TableCell numeric><TableSortLabel id='amount' onClick={hola}>Amount</TableSortLabel></TableCell>
            <TableCell>Note</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.expenses.map((expense) => {
            return (
              <TableRow key={expense.id}>
                <TableCell component="th" scope="row" numeric>{expense.createdAt}</TableCell>
                <TableCell>{expense.description}</TableCell>
                <TableCell numeric>${expense.amount}</TableCell>
                <TableCell>{expense.note}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
	);
}

const mapStateToProps = (state) => {
	return {
		expenses: selectExpenses(state.expenses, state.filters)
	};
};

export default connect(mapStateToProps)(ExpenseList);
