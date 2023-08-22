import { CiSearch } from 'react-icons/ci';
import {
  Header,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  return (
    <Header>
      <SearchForm onSubmit={onSubmit}>
        <SearchFormButton type="submit">
          <CiSearch size={22} />
        </SearchFormButton>
        <SearchFormInput
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </Header>
  );
};
