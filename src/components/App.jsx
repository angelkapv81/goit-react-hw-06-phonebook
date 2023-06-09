import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { GlobalStyle } from './GlobalStyle';
import Form from './Form/Form';
import Search from './Search/Search';
import Contacts from './Contacts/Contacts';

function App() {
  const contacts = useSelector(state => state.contacts);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <section>
      <Form />
      <Search />
      <Contacts />
      <GlobalStyle />
    </section>
  );
}

export default App;
