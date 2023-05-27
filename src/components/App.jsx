import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { useAuth } from 'hooks';
import { refreshUser } from 'redux/auth/operations';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContsctsPage = lazy(() => import('../pages/Contacts'));
const NotFound = lazy(()=> import('./NotFound/NotFound'))

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  
  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContsctsPage />} />
          }
        />
      </Route>
      <Route path="*" element={<NotFound />}></Route>
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
