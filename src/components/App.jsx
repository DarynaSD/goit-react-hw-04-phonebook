import { Component } from 'react'
import { nanoid } from 'nanoid'

import Form from './Form'
import ContactList from './ContactList'
import Filter from './Filter'
import { Section, FormWrapper, ListWrapper } from './styled/Parts.styled'


class App extends Component {
  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: null,
  }

  componentDidMount = () => {
    const storageContacts = JSON.parse(localStorage.getItem('contacts'));
    if (storageContacts) {
      this.setState({contacts: storageContacts})
    }
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.contacts.length !== this.state.contacts.length) {
localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  }
  

  createContact = (formData) => {
    const alreadyExist = this.state.contacts.find(
      (item) => item.name === formData.name
    );
    if (alreadyExist) return alert(`Contact '${formData.name}' already exist`)
    
    const newContact = { 
          ...formData,
          id: nanoid(),
    }

    this.setState((prev) => ({
      contacts: [
        newContact,
        ...prev.contacts, 
      ]
    }))
  }

  handleDelete = (id) => {
    this.setState((prev) => ({
      contacts: prev.contacts.filter((one) => one.id !== id),
    }));
  }

	filterContacts = (filterQuery) => {
		this.setState((prev) => ({
			filter: prev.contacts.filter((one) =>
				one.name.toLowerCase().includes(filterQuery.toLowerCase())
			),
		}))
	}

  render() {
    return (
      <Section>
        <FormWrapper>
          <Form createContact={this.createContact} />
            </FormWrapper>
          <ListWrapper>
            <Filter filterContacts={this.filterContacts} />
            <ContactList contacts={this.state.contacts} handleDelete={this.handleDelete} filter={ this.state.filter} />
          </ListWrapper>
      </Section>
    )
  }
}

export default App
