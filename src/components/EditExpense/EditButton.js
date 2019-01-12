import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';


const EditButton = ({dispatch, id }) => (
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
);
export default connect()(EditButton);