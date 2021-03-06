import React, {Fragment} from 'react';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import EditExpense from '../EditExpense/EditExpense';
import './dialogs.css';

export default class extends React.Component{
	state = {
		open: false
	}

	handleToggle = () => {
		this.setState({
			open: !this.state.open
		})
	}
	render() {
		const { open } = this.state
		return <Fragment>
		<Fab onClick={this.handleToggle} color="primary" mini='true'>
			<AddIcon />
		</Fab>
		<Dialog
        open={this.state.open}
        onClose={this.handleClose}
        aria-labelledby="form-dialog-title"
        //maxWidth='fit-content'
      >
        <DialogTitle id="form-dialog-title"></DialogTitle>
        <DialogContent>
        	<EditExpense />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleToggle} color="primary">
            Done
          </Button>
        </DialogActions>
      </Dialog>
	</Fragment>
	}
}