import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { Dialog, DialogContent, DialogActions } from '@mui/material';
import { getIsLoading } from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';
import {ContactList} from 'components/ContactList/ContactList';
import {ContactForm} from 'components/ContactForm/ContactForm';
import {Filter} from 'components/Filter/Filter';
import {
  StyledRegister,
  StyledIcon,
  ButtonIcon,
  StyledBox,
  ModalTitle,
  ModalCloseIcon,
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
          <Dialog open={isModalOpen} onClose={handleCloseModal}>
            <ModalTitle>Add Contact</ModalTitle>
            <DialogContent>
              <ContactForm handleCloseModal={handleCloseModal} />
            </DialogContent>
            <DialogActions>
              <ModalCloseIcon onClick={handleCloseModal} color="primary" />
            </DialogActions>
          </Dialog>
          <div>{isLoading && 'Request in progress...'}</div>
          <Filter />
        </StyledBox>
        <ContactList />
      </StyledRegister>
    </>
  );
}
