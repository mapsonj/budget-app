import React from 'react';
import DateFnsUtils from 'material-ui-pickers/utils/date-fns-utils';
import TextField from '@material-ui/core/TextField';
import { format } from 'date-fns';
import DatePicker from 'material-ui-pickers/DatePicker';
import { withStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';
//import DialogContent from '@material-ui/core/DialogContent';
////import DialogContentText from '@material-ui/core/DialogContentText';
//import DialogTitle from '@material-ui/core/DialogTitle';
import AddIcon from '@material-ui/icons/Add';
import MenuItem from '@material-ui/core/MenuItem';

//import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
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
  },
  select: {
    marginRight: '15px',
  }
});

	const categories = [
	  {
	    value: 'Personal Care',
	  },
	  {
	    value: 'Bills',
	  },
	  {
	    value: 'Dogs',
	  },
	  {
	    value: 'Food',
	  },
	  {
	    value: 'Leisure',
	  },
	  {
	    value: 'Other',
	  },
	];


class ExpenseForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			description: props.expense ? props.expense.description : '',
			note: props.expense ? props.expense.note : '',
			category: props.expense ? props.expense.category : '',
			account: [],
			amount: props.expense ? (props.expense.amount / 100).toString() : '',
			createdAt: new Date(),
			error: '',
		};
	}

	onSubmit = (e) => {
		e.preventDefault();
		this.props.onSubmit({
			createdAt: format(this.state.createdAt, 'MM/dd/YYYY'),
			description: this.state.description,
			category: this.state.category,
			amount: parseFloat(this.state.amount,10)  * 100 ,
			note: this.state.note,
		});
	};


	onDescriptionChange = (e) => {
		const description = e.target.value;
		this.setState(() => ({ description }));
	};

	onCategoryChange = (name) => event => {
		console.log(event.target.value);
    this.setState({
      [name]: event.target.value,
    });
  };

	onAmountChange = (e) => {
		const amount = e.target.value;
		if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
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
		console.log(this.state.category);
		return (
			<div>
				<form onSubmit={this.onSubmit} className={classes.container}>
					<MuiPickersUtilsProvider utils={DateFnsUtils}>
			      <DatePicker
			      	variant="outlined"
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
					<Select
						
						className={classes.select}
            value={this.state.category}
            displayEmpty
            //variant="outlined"
            onChange={this.onCategoryChange('category')}
            input={
            	<OutlinedInput labelWidth={this.state.labelWidth} name="category" id="item-category" />
          	}       
          >
            <MenuItem value=""><em>Select Category</em></MenuItem>
      				{categories.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.value}
            </MenuItem>
          ))}
          </Select>
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
						value={this.state.note}
						placeholder="Add a note for your expense (optional)"
						onChange={this.onNoteChange}
						variant="outlined"
					/>
					<Fab
						type="submit"
						color="secondary"
						className={classes.button}
					>
					<AddIcon />
					</Fab>

				</form>
			</div>
		)
	}
}

export default withStyles(styles)(ExpenseForm);