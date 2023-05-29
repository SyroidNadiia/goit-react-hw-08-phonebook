import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/contacts/filtersSlice';
import { TextField } from '@mui/material';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleInputChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <TextField
      label="Find contacts by name"
      variant="outlined"
      size="small"
      fullWidth
      onChange={handleInputChange}
    />
  );
};

