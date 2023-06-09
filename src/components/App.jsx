import { GlobalStyle } from './GlobalStyle';
import Form from './Form/Form';
import Search from './Search/Search';
import Contacts from './Contacts/Contacts';

function App() {
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
