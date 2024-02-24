import { Button, Form, Input, Label } from './ContactForm.styled';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { actions } from '../../redux/contacts/contactsSlice';

const initialValue = {
  name: '',
  number: '',
};
function ContactForm() {
  const dispatch = useDispatch();
  const [form, setForm] = useState(initialValue);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prevForm => {
      return { ...prevForm, [name]: value };
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(actions.add(form));
    setForm(initialValue);
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name:
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={handleChange}
          value={form.name}
          required
        />
      </Label>

      <Label>
        Number:
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          onChange={handleChange}
          value={form.number}
          required
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </Form>
  );
}

export default ContactForm;
