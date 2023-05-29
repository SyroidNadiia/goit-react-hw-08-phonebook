import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import { ContactItem } from './ContactListItem.styles';

export const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <ContactItem key={contact.id}>
      <PhoneIphoneIcon />
      {contact.name}
      <IconButton onClick={handleDelete} >
        <DeleteIcon />
      </IconButton>
    </ContactItem>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};

