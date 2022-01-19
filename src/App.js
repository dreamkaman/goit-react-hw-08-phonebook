import { Route, Switch } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Suspense } from 'react';

// import ContactForm from './components/ContactForm';
// import Section from './components/Section';
// import ContactList from './components/ContactList';
import Navigation from './components/Navigation';
import Container from './components/Container';
// import UserMenu from './components/Navigation/UserMenu';

// import Filter from './components/Filter';

import { HomeView } from './views/HomeView.js';
import { RegisterView } from './views/RegisterView.js';
import { LoginView } from './views/LoginView.js';
import { PhonebookView } from './views/PhonebookView.js';
import { authOperations } from './redux/auth/authOperations';

// import styles from './App.module.css';

function App() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(authOperations.fetchCurrentUser()));
  return (
    <>
      <Navigation />
      <Container>
        <Switch>
          <Suspense fallback={<p>...loading. Please wait!</p>}>
            <Route path="/" exact component={HomeView} />
            <Route path="/register" component={RegisterView} />
            <Route path="/login" component={LoginView} />
            <Route path="/contacts" component={PhonebookView} />
          </Suspense>
        </Switch>
      </Container>
    </>
  );
}

export default App;
