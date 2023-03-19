import { Component } from 'react';
import ContactList from './ContactLIst/ContactList';
import ContactForm from './ContactForm/ContactForm';
import { nanoid } from 'nanoid';
import Filter from './Filter/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    let names = this.state.contacts.map(cont => cont.name.toLocaleLowerCase());
    console.log(names);
    if (names.includes(name.toLocaleLowerCase())) {
      alert(`Список вже має ім'я ${name}`);
      return;
    }

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    const visibleContacts = this.state.contacts.filter(contact =>
      contact.name
        .toLocaleLowerCase()
        .includes(this.state.filter.toLocaleLowerCase())
    );

    return (
      <>
        <ContactForm addContact={this.addContact} />
        <Filter onChange={this.changeFilter} value={this.state.filter} />
        <ContactList
          contacts={visibleContacts}
          deleteContact={this.deleteContact}
        />
      </>
    );
  }
}

export default App;
