import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import { Link } from 'react-router-dom';
import EditButton from './EditExpense/EditButton';

const ExpenseListItem = ({ dispatch, category, id, account, description, note, amount, createdAt }) => (

<TableRow key={id}>
  <TableCell>{createdAt}</TableCell>
  <TableCell>{description}</TableCell>
  <TableCell>{category}</TableCell>
  <TableCell>${amount}</TableCell>
  <TableCell>{note}</TableCell>
  <TableCell 
    component="th" scope="row"
  >
  <Link to={`/edit/${id}`}>
    <IconButton 

      variant="fab" 
      size="small"
       
      aria-label="Edit" 
      className={"edit-button"}
    >
      <Icon>edit_icon</Icon>
    </IconButton>
  </Link>
    <IconButton 
      size="small"
      aria-label="Delete"
      className={"del-button"}
    >
      <DeleteIcon 
        onClick={() => {
	 		dispatch(removeExpense({id}));
	 	}}
      />
    </IconButton>
  </TableCell>
</TableRow>

);

export default connect()(ExpenseListItem);