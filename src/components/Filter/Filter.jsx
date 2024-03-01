import { useDispatch, useSelector } from 'react-redux';
import { Input, Label } from './Filter.styled';
import { changeFilter, selectFilter } from '../../redux/contacts/contactsSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  return (
    <Label>
      Find contacts by name:
      <Input
        type="text"
        name="filter"
        title="Enter contact to find"
        onChange={e => dispatch(changeFilter(e.target.value))}
        value={filter}
        required
      />
    </Label>
  );
};
