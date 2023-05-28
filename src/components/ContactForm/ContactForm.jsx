import { useDispatch, useSelector } from 'react-redux';
import Notiflix from 'notiflix';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { addContact } from 'redux/contacts/operations';
import { getContacts } from 'redux/contacts/selectors';
import * as yup from 'yup';

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
        <Form>
          <label>
            Name
            <Field type="text" name="name"  />
            <ErrorMessage name="name" component="div" />
          </label>

          <label>
            Number
            <Field type="tel" name="number"  />
            <ErrorMessage name="number" component="div" />
          </label>

          <button type="submit" disabled={isSubmitting}>
            Add contact
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
