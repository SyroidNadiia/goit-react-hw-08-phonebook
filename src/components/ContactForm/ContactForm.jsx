import { useDispatch, useSelector } from 'react-redux';
import Notiflix from 'notiflix';
import { Formik,  Field } from 'formik';
import { addContact } from 'redux/contacts/operations';
import { getContacts } from 'redux/contacts/selectors';
import * as yup from 'yup';
import { Button, TextField } from '@mui/material';
import {
  FormContainer,
  FormLabel,
  ErrorMessageContainer,
} from '../RegisterForm/RegisterForm.styles';

const validationSchema = yup.object({
  name: yup.string().required('Required'),
  number: yup.number().required('Required'),
});

const ContactForm = ({ handleCloseModal }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const initialValues = {
    name: '',
    number: '',
  };

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    const { name, number } = values;
    const newContact = { name, number };

    if (contacts.find(item => item.name.toLowerCase() === name.toLowerCase())) {
      Notiflix.Notify.failure(`${name} is already in contacts`);
    } else {
      dispatch(addContact(newContact));
      resetForm();
      handleCloseModal();
    }

    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <FormContainer>
          <FormLabel>
            Name
            <Field
              as={TextField}
              type="text"
              name="name"
              sx={{ width: '300px' }}
            />
            <ErrorMessageContainer name="name" component="div" />
          </FormLabel>

          <FormLabel>
            Number
            <Field
              as={TextField}
              type="tel"
              name="number"
              sx={{ width: '300px' }}
            />
            <ErrorMessageContainer name="number" component="div" />
          </FormLabel>

          <Button
            variant="contained"
            color="primary"
            type="submit"
            disabled={isSubmitting}
          >
            Add contact
          </Button>
        </FormContainer>
      )}
    </Formik>
  );
};

export default ContactForm;
