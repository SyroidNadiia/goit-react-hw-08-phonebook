import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { getIsLoading } from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';
import ContactList from 'components/ContactList/ContactList';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import css from '../components/ContactForm/ContactForm.module.css';
import {
  StyledRegister,
  StyledIcon,
  ButtonIcon,
  StyledBox,
} from 'components/sharedStyles.styles';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <StyledRegister>
        <StyledBox>
          <ButtonIcon type="button" onClick={handleOpenModal}>
            <StyledIcon />
          </ButtonIcon>
          {isModalOpen && (
            <div className={css.overlay}>
              <div className={css['form-container']}>
                <ContactForm handleCloseModal={handleCloseModal} />
              </div>
            </div>
          )}
          <div>{isLoading && 'Request in progress...'}</div>
          <Filter />
        </StyledBox>
        <ContactList />
      </StyledRegister>
    </>
  );
}
