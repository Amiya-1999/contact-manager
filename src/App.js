import './App.css';
import Header from './Components/Header';
import AddContact from './Components/AddContact';
import ContactList from './Components/ContactList';
import { useEffect, useState } from 'react';
import uuid4 from 'uuid4';

function App() {

  const localStorageKey = 'contacts';
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem(localStorageKey)) || [];
  });

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(contacts));
  }, [contacts]);

  function addContact(data) {
    setContacts([...contacts,{id: uuid4(), ...data}]);
  }

  function removeContact(id) {
    const updatedList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(updatedList);
  }

  return (
    <div className="App">
      <Header />
      <AddContact addContact={addContact} />
      <ContactList contacts={contacts} removeContact={removeContact} />
    </div>
  );
}

export default App;
