import { useDispatch, useSelector } from 'react-redux';
import { Input, Label } from './Filter.styled';
import { actions } from '../../redux/contacts/contactsSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.filter);
  return (
    <Label>
      Find contacts by name:
      <Input
        type="text"
        name="filter"
        title="Enter contact to find"
        onChange={e => dispatch(actions.changeFilter(e.target.value))}
        value={filter}
        required
      />
    </Label>
  );
};
