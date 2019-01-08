import React from 'react';
import DateFnsUtils from 'material-ui-pickers/utils/date-fns-utils';
import TextField from '@material-ui/core/TextField';
import { format } from 'date-fns';
import DatePicker from 'material-ui-pickers/DatePicker';
import { withStyles } from '@material-ui/core/styles';
//import AddIcon from '@material-ui/icons/Add';
import MenuItem from '@material-ui/core/MenuItem';
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
	constructor(props) {
		super(props);
	
		this.state = {

			description: props.expense ? props.expense.description : '',
			note: props.note ? props.expense.note : '',
			category: ['Bills','Leisure', 'Dogs'],
			account: [],
			amount: props.amount ? (props.expense.amount / 100).toString() : '',
			createdAt: new Date(),
			error: '',
		};
	}

	onSubmit = (e) => {
		e.preventDefault();
		this.props.onSubmit({
			createdAt: format(this.state.createdAt, 'MM/dd/YYYY'),
			description: this.state.description,
			amount: parseFloat(this.state.amount,10)  * 100 ,
			note: this.state.note
		});
	};


	onDescriptionChange = (e) => {
		const description = e.target.value;
		this.setState(() => ({ description }));
	};

	onCategoryChange = (e) => {
		//const category = e.target.value;
		console.log(this.state.category.value);
		//this.setState(() => ({ category }));
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
		return (
			<div>
				<form onSubmit={this.onSubmit} className={classes.container}>
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
						required
					/>
					<TextField
						select
            value={this.state.category}
            onChange={this.onCategoryChange}
            variant="outlined"
          >
            {this.state.category.map((option, i) => (
            <MenuItem key={option.value} value={option.value}>

              {option}
            	
            </MenuItem>

          	))}
          </TextField>
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
						type="submit"
						variant="outlined"
						color="primary"
						className={classes.button}
					>
					Add Expense
					</Button>

				</form>
			</div>
		)
	}
}

export default withStyles(styles)(ExpenseForm);