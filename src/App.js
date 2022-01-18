import ContactForm from './components/ContactForm';
import Section from './components/Section';
import ContactList from './components/ContactList';

import Filter from './components/Filter';

function App() {
  return (
    <>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <Filter />
        <ContactList />
      </Section>
    </>
  );
}

export default App;
