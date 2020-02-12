import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

import Book from '../../shared/models/Book.model';

type BookListProps = {
  books: Book[];
};

const StyledList = styled.ul`
  li {
    list-style: none;
    position: relative;
    align-self: center;
    box-sizing: border-box;
    margin: 20px;
    padding: 20px;
    width: calc(100% - 40px);
    height: auto;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2);
    transition: all 0.1s;
    &:hover {
      box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.4);
      transform: scale(1.02);
      transition: all 0.1s;
    }
  }
`;

const BookList = ({ books }: BookListProps) => {
  return (
    <>
      <StyledList>
        {books.map(book => (
          <li
            key={book.id}
            style={{
              backgroundColor:
                book.genre === 'horror' &&
                moment(book.date).month() === 9 &&
                moment(book.date).date() === 31
                  ? 'red'
                  : 'transparent'
            }}
          >
            <p>Name: {book.name}</p>
            <p>Genre: {book.genre}</p>
            <p>Published: {book.date}</p>
            <div>
              Author:
              {book.author.firstName} {book.author.lastName}
            </div>
          </li>
        ))}
      </StyledList>
    </>
  );
};

export default BookList;
