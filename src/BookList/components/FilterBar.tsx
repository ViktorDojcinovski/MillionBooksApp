import React from 'react';
import { Button } from '../../shared/components/Button';
import { Input } from '../../shared/components/Input';

type FilterBarProps = {
  onClickSortByNameCallback: () => {};
  onClickSortByAuthorCallback: () => {};
  onChangeFilterByGenreCallback: (value: string) => {};
  onChangeFilterByGenderCallback: (value: string) => {};
  selectedName: string;
  selectedAuthorGender: string;
};

const FilterBar = (props: FilterBarProps) => {
  return (
    <>
      <Button
        disabled={false}
        clicked={() => props.onClickSortByNameCallback()}
        btnType='success'
      >
        {' '}
        Sort By Name{' '}
      </Button>

      <Button
        disabled={false}
        clicked={() => props.onClickSortByAuthorCallback()}
        btnType='success'
      >
        {' '}
        Sort By Author{' '}
      </Button>

      <Input
        elementType='select'
        elementConfig={{
          options: [
            { value: 'finance', displayValue: 'Finance' },
            { value: 'drama', displayValue: 'Drama' },
            { value: 'horror', displayValue: 'Horror' }
          ]
        }}
        changed={(value: string) => props.onChangeFilterByGenreCallback(value)}
        value={props.selectedName ? props.selectedName : 'choose genre'}
        label='Filter by Genre'
      />

      <Input
        elementType='select'
        elementConfig={{
          options: [
            { value: 'male', displayValue: 'Male' },
            { value: 'female', displayValue: 'Female' }
          ]
        }}
        changed={(value: string) => props.onChangeFilterByGenderCallback(value)}
        value={
          props.selectedAuthorGender
            ? props.selectedAuthorGender
            : 'choose gender'
        }
        label='Filter by Genre'
      />
    </>
  );
};

export default FilterBar;
