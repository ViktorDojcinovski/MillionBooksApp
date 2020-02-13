import React from 'react';
import styled, { CSSProperties } from 'styled-components';
import moment from 'moment';
import { FixedSizeList } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';

import Book from '../../shared/models/Book.model';

type BookListProps = {
  books: Book[];
};

type BookListItertor = {
  index: number;
  style: CSSProperties;
};

const StyledList = styled.ul`
  height: calc(100vh - 110px);
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
  const Row = ({ index, style }: BookListItertor) => {
    return (
      <div style={style}>
        <li
          key={books[index].id}
          style={{
            backgroundColor:
              books[index].genre === 'horror' &&
              moment(books[index].date).month() === 9 &&
              moment(books[index].date).date() === 31
                ? 'red'
                : 'transparent'
          }}
        >
          <p>Name: {books[index].name}</p>
          <p>Genre: {books[index].genre}</p>
          <p>Published: {books[index].date}</p>
          <div>
            Author: {books[index].author.firstName}{' '}
            {books[index].author.lastName}
          </div>
        </li>
      </div>
    );
  };

  return (
    <>
      <StyledList>
        <AutoSizer>
          {({ height, width }) => (
            <FixedSizeList
              width={width}
              height={height}
              itemSize={200}
              itemCount={books.length}
            >
              {Row}
            </FixedSizeList>
          )}
        </AutoSizer>
      </StyledList>
    </>
  );
};

export default BookList;
