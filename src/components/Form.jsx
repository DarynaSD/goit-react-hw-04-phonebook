import { InputLabelWrapper, Input, Button } from './styled/Parts.styled';

import React from 'react';
import { useState } from 'react';

const Form = ({ createContact }) => {
  const [contactName, setContactName] = useState('');
  const [number, setNumber] = useState('');

  //change
  const handleChange = ({ target: { value, name } }) => {
    name === 'contactName' ? setContactName(value) : setNumber(value);
    //console.log(value, name);
  };

  //submit
  const handleSubmit = e => {
    e.preventDefault();
    createContact(contactName, number);

    setContactName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputLabelWrapper>
        <label htmlFor="nameInput">Name</label>
        <Input
          type="text"
          name="contactName"
          //pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          id="nameInput"
          value={contactName}
          onChange={handleChange}
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
          value={number}
          onChange={handleChange}
        />
      </InputLabelWrapper>

      <Button type="submit">Create</Button>
    </form>
  );
};

export default Form;

// class Form extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   //ключ генерується динамічно, в залежності від того, який прилетить нейм
//   //нейм в інпуті і властивість стейта називаються однаково
//   handleChange = ({ target: { value, name, pattern, title } }) => {
//     // value.match(pattern) ?
//     // this.setState({ [name]: value }) : alert(title)

//     this.setState({ [name]: value })
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     //console.log(this.state);

//     this.props.createContact(this.state);

//     this.setState({
//       name: '',
//       number: '',  })
//   }

//   render() {
//     //console.log(this.state)
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <InputLabelWrapper>
//         <label htmlFor="nameInput">Name</label>
//         <Input
//           type="text"
//           name="name"
//           //pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           required
//           id="nameInput"
//           value={this.state.name}
//             onChange={this.handleChange}
//             autoFocus
//         />
//         </InputLabelWrapper>

//         <InputLabelWrapper>
//          <label htmlFor="telInput">Number</label>
//         <Input
//           type="tel"
//           name="number"
//           //pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//           required
//           id="telInput"
//           value={this.state.number}
//           onChange={this.handleChange}
//         />
//         </InputLabelWrapper>

//         <Button type="submit">Create</Button>
//       </form>
//     );
//   }
// }

// export default Form;
