import { Route, Switch } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Navigation from './components/Navigation';
import Container from './components/Container';

import { authOperations } from './redux/auth/authOperations';
const RegisterView = lazy(() => import('./views/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView'));
const PhonebookView = lazy(() => import('./views/PhonebookView'));

// import { HomeView } from './views/HomeView';
// import { RegisterView } from './views/RegisterView';
// import { LoginView } from './views/LoginView';
// import { PhonebookView } from './views/PhonebookView';

const HomeView = lazy(() => import('./views/HomeView.js'));

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
