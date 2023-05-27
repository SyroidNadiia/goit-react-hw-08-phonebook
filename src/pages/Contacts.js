import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { getIsLoading } from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';
import ContactList from 'components/ContactList/ContactList';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <button
        type="button"
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        Add Contact
      </button>
      {isModalOpen && <ContactForm onClose={() => setIsModalOpen(false)} />}
      <div>{isLoading && 'Request in progress...'}</div>
      <Filter />
      <ContactList />
    </>
  );
}
