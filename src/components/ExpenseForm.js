import React from 'react';
import DateFnsUtils from 'material-ui-pickers/utils/date-fns-utils';
import TextField from '@material-ui/core/TextField';
import DatePicker from 'material-ui-pickers/DatePicker';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    marginLeft: '20px'
  },
  textField: {
    marginLeft: '15px',
    marginRight: '15px',
  }
});
class ExpenseForm extends React.Component {
	state = {
		description: '',
		note: '',
		category: '',
		amount: '',
		createdAt: new Date()
	};
	onDescriptionChange = (e) => {
		const description = e.target.value;
		this.setState(() => ({ description }));
	};

	onAmountChange = (e) => {
		const amount = e.target.value;
		if(amount.match(/^\d*(\.\d{0,2})?$/)) {
			this.setState(() => ({ amount }));
		}
	};

	onNoteChange = (e) => {
		// e.persist
		// this.setState(() => ({ note: e.target.value }));
		const note = e.target.value;
		this.setState(() => ({ note }));
	};
	onDateChange = (createdAt) => {
		this.setState({ createdAt });
	}
	render() {
		const { classes } = this.props;
		const { selectedDate } = this.state;
		return (
			<div>
				<form className={classes.container}>
					<MuiPickersUtilsProvider utils={DateFnsUtils}>
			      <DatePicker
			      	variant='outlined'
			        value={this.state.createdAt}
			        autoOk={true}
			        format='MM/dd/yyyy'
			        showTodayButton={true}
          		onChange={this.onDateChange}
			      />
		      </MuiPickersUtilsProvider>
					<TextField
						type="text"
						className={classes.textField}
						placeholder="Description"
						autoFocus
						value={this.state.description}
						onChange={this.onDescriptionChange}
						variant="outlined"
					/>
					<TextField
						type="text"
						placeholder="Amount"
						value={this.state.amount}
						onChange={this.onAmountChange}
						variant="outlined"
					/>
					<TextField
						multiline
						className={classes.textField}
						placeholder="Add a note for your expense (optional)"
						onChange={this.onNoteChange}
						variant="outlined"
					/>
					<Button
						variant="outlined" 
						color="primary"
					>
					Add Expense
					</Button>
				</form>
			</div>
		)
	}
}

export default withStyles(styles)(ExpenseForm);