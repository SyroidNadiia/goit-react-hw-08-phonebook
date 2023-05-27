import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import Register from 'pages/Register';
import Login from 'pages/Login';
import Contacts from 'pages/Contacts';

export const App = () => {
  const dispatch = useDispatch();
 
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}></Route>
      <Route
        path="/register"
        element={
          <RestrictedRoute
            redirectTo="/contacts"
            component={<Register/>}
          />
        }
      ></Route>
      <Route
        path="/login"
        element={
          <RestrictedRoute redirectTo="/contacts" component={<Login />} />
        }
      ></Route>
      <Route
        path="/contacts"
        element={
          <PrivateRoute
            redirectTo="/login"
            component={<Contacts/>}
          ></PrivateRoute>
        }
      ></Route>
    </Routes>

    // <div className={sharedStyles.section}>
    //   <h1 className={sharedStyles.title}>Phonebook</h1>
    //   <ContactForm />
    //   {isLoading && !error && <b>Request in progress...</b>}
    //   <h2 className={sharedStyles.title}>Contacts</h2>
    //   <Filter></Filter>
    //   <ContactList />
    // </div>
  );
};
