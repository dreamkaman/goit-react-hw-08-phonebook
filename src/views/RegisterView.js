import { useState } from 'react';
import { useDispatch } from 'react-redux';

import InputElement from '../components/ContactForm/InputElement';
import Button from '../components/Button';
import Section from '../components/Section';

import { authOperations } from '../redux/auth/authOperations';

import styles from '../components/ContactForm/InputElement/InputElement';

const RegisterView = () => {
  const dispatch = useDispatch();

  const [user, setUser] = useState({ name: '', email: '', password: '' });

  const { name, email, password } = user;

  const handleChange = e => {
    const key = e.target.name;

    setUser(prevstate => ({ ...prevstate, [key]: e.target.value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setUser({ name: '', email: '', password: '' });
  };

  return (
    <div>
      <Section title="It`s registration form for new users!" />
      <form className={styles.form} onSubmit={handleSubmit}>
        <InputElement
          value={name}
          text="Name"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contains only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={handleChange}
        />
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
        <Button type="submit" text="SignUp" />
      </form>
    </div>
  );
};

export default RegisterView;
