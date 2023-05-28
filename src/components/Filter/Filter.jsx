import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/contacts/filtersSlice';

const Filter = () => {
  const dispatch = useDispatch();

  const handelInputChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <label >
      Find contacts by name
      <input
        type="text"
        name="filter"
        onChange={handelInputChange}
      ></input>
    </label>
  );
};

export default Filter;
