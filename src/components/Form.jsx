//тупий компонент, який слідкує за даними і передає їх в
//ContactList, де ми будемо їх опрацьовувати (в стейті ліста)

import { Component } from 'react';

import { InputLabelWrapper, Input, Button } from './styled/Parts.styled';

class Form extends Component {
  state = {
    name: '',
    number: '',
  };


  //ключ генерується динамічно, в залежності від того, який прилетить нейм
  //нейм в інпуті і властивість стейта називаються однаково
  handleChange = ({ target: { value, name, pattern, title } }) => {
    // value.match(pattern) ?
    // this.setState({ [name]: value }) : alert(title)
    
    this.setState({ [name]: value })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    //console.log(this.state);

    this.props.createContact(this.state);


    this.setState({
      name: '',
      number: '',  })
  }

  render() {
    //console.log(this.state)
    return (
      <form onSubmit={this.handleSubmit}>
        <InputLabelWrapper>
        <label htmlFor="nameInput">Name</label>
        <Input
          type="text"
          name="name"
          //pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          id="nameInput"
          value={this.state.name}
            onChange={this.handleChange}
            autoFocus
        />
        </InputLabelWrapper>

        <InputLabelWrapper>
         <label htmlFor="telInput">Number</label>
        <Input
          type="tel"
          name="number"
          //pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          id="telInput"
          value={this.state.number}
          onChange={this.handleChange}
        />
        </InputLabelWrapper>

       

        <Button type="submit">Create</Button>
      </form>
    );
  }
}

export default Form;
