import { useState } from 'react';
import { useDispatch } from 'react-redux';

import Section from '../components/Section';
import InputElement from '../components/ContactForm/InputElement';
import Button from '../components/Button';

import styles from '../components/ContactForm/InputElement/InputElement';
import { authOperations } from '../redux/auth/authOperations';

const LoginView = () => {
  const dispatch = useDispatch();

  const [user, setUser] = useState({ email: '', password: '' });

  const { email, password } = user;

  const handleChange = e => {
    const key = e.target.name;

    setUser(prevstate => ({ ...prevstate, [key]: e.target.value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setUser({ email: '', password: '' });
  };
  return (
    <>
      <Section title="Please, login to our service using your e-mail and password!" />
      <form className={styles.form} onSubmit={handleSubmit}>
        <InputElement
          value={email}
          text="E-mail"
          type="text"
          name="email"
          //   pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="E-mail may contains only latin letters and special symbol '@'"
          onChange={handleChange}
        />
        <InputElement
          value={password}
          text="Password"
          type="password"
          name="password"
          //   pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Password may contains any symbols"
          onChange={handleChange}
        />
        <Button type="submit" text="LogIn" />
      </form>
    </>
  );
};

export default LoginView;
