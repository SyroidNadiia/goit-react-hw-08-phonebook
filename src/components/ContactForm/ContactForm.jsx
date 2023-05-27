import { useDispatch, useSelector } from 'react-redux';
import Notiflix from 'notiflix';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { addContact } from 'redux/contacts/operations';
import { getContacts } from 'redux/contacts/selectors';
import sharedStyles from 'components/sharedStyles.module.css';
// import css from './ContactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const initialValues = {
    name: '',
    number: '',
  };

  const validate = values => {
    const errors = {};

    if (!values.name) {
      errors.name = 'Required';
    }

    if (!values.number) {
      errors.number = 'Required';
    }

    return errors;
  };

  const handleSubmit = (values, { setSubmitting }) => {
    const { name, number } = values;
    const newContact = { name, number };

    if (contacts.find(item => item.name.toLowerCase() === name.toLowerCase())) {
      Notiflix.Notify.failure(`${name} is already in contacts`);
    } else {
      dispatch(addContact(newContact));
      resetForm();
    }

    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <label>
            Name
            <Field type="text" name="name" className={sharedStyles.input} />
            <ErrorMessage
              name="name"
              component="div"
              className={sharedStyles.error}
            />
          </label>

          <label>
            Number
            <Field type="tel" name="number" className={sharedStyles.input} />
            <ErrorMessage
              name="number"
              component="div"
              className={sharedStyles.error}
            />
          </label>

          <button
            type="submit"
            className={sharedStyles.button}
            disabled={isSubmitting}
          >
            Add contact
          </button>
        </Form>
      )}
    </Formik>
  );
};

// const ContactForm = () => {
//   const dispatch = useDispatch();
//   const contacts = useSelector(getContacts);

//   const handleSubmit = e => {
//     e.preventDefault();
//     const name = e.target.name.value;
//     const number = e.target.number.value;
//     const newContact = { name, number };

//     if (contacts.find(item => item.name.toLowerCase() === name.toLowerCase())) {
//       Notiflix.Notify.failure(`${name} is already in contacts`);
//       return;
//     }

//     dispatch(addContact(newContact));
//     e.target.reset();
//   };

//   return (
//        <form className={css.form} onSubmit={handleSubmit}>
//       <label className={sharedStyles.label}>
//         Name
//         <input
//           type="text"
//           name="name"
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           required
//           className={sharedStyles.input}
//         />
//       </label>

//       <label className={sharedStyles.label}>
//         Number
//         <input
//           type="tel"
//           name="number"
//           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//           required
//           className={sharedStyles.input}
//         />
//       </label>

//       <button className={sharedStyles.button} type="submit">
//         Add contact
//       </button>
//     </form>
//   );
// };

export default ContactForm;
