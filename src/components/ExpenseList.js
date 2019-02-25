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
import Create from './Dialogs/Create';
import Edit from './Dialogs/Edit';

const ExpenseList = (props) => (
  <Paper className={"root"}>
    <Table className={"table"}>
      <TableHead>
        <TableRow>
          <TableCell><TableSortLabel id='date'>Date</TableSortLabel></TableCell>
          <TableCell>Description</TableCell>
          <TableCell><TableSortLabel id='category'>Category</TableSortLabel></TableCell>
          <TableCell><TableSortLabel id='amount'>Amount</TableSortLabel></TableCell>
          <TableCell>Note</TableCell>
          <TableCell className={"actions-th"}>Actions</TableCell>
          <TableCell><Create /></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {props.expenses.map((expense) => {
          return <ExpenseListItem key={expense.id} {...expense} />;
        })}
      </TableBody>
    </Table>
  </Paper>
);

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpenseList);
