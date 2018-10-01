import React from 'react';

const EditExpense = (props) => {
	return(
		<div>
			Editing expense with ID of {props.match.params.id}
		</div>
	);
}

export default EditExpense;