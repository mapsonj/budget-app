import React from 'react';
import DateFnsUtils from 'material-ui-pickers/utils/date-fns-utils';
import DatePicker from 'material-ui-pickers/DatePicker';
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider';

export default class ExpenseForm extends React.Component {
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
		const { selectedDate } = this.state;
		return (
			<div>
				<form>
					<input
						type="text"
						placeholder="Description"
						autoFocus
						value={this.state.description}
						onChange={this.onDescriptionChange}
					/>
					<input
						type="text"
						placeholder="Amount"
						value={this.state.amount}
						onChange={this.onAmountChange}
					/>
					<textarea
						placeholder="Add a note for your expense (optional)"
						onChange={this.onNoteChange}
					>
					</textarea>
					<MuiPickersUtilsProvider utils={DateFnsUtils}>
			      <DatePicker
			        value={this.state.createdAt}
			        autoOk='true'
			        format='MM/dd/yyyy'
			        showTodayButton='true'
          		onChange={this.onDateChange}
			      />
		      </MuiPickersUtilsProvider>
					<button>Add Expense</button>
				</form>
			</div>
		)
	}
}