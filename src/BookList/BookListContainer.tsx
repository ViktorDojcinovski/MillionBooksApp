import React, { Component } from 'react';
import cloneDeep from 'lodash/cloneDeep';

import BookList from './components/BookList';
import FilterBar from './components/FilterBar';
import Book from '../shared/models/Book.model';

import './BookListContainer.scss';

class BookListContainer extends Component {
  state = {
    books: [],
    allBooks: [],
    selectedName: '',
    selectedAuthorGender: ''
  };

  componentDidMount() {
    fetch('http://localhost:8080')
      .then(res => {
        return res.json();
      })
      .then(books => {
        this.setState({
          books: books['books'] as Book[],
          allBooks: books['books'] as Book[]
        });
      });
  }

  sortBooksByName = (books: Book[]) => {
    const sortedBooks = cloneDeep(books);

    sortedBooks.sort(function(a: Book, b: Book) {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });

    this.setState({ books: sortedBooks });

    return sortedBooks;
  };

  sortBooksByAuthor = (books: Book[]) => {
    const sortedBooks = cloneDeep(books);

    sortedBooks.sort(function(a: Book, b: Book) {
      if (a.author.lastName < b.author.lastName) return -1;
      if (a.author.lastName > b.author.lastName) return 1;
      return 0;
    });

    this.setState({ books: sortedBooks });

    return sortedBooks;
  };

  filterBooksByGenre = (books: Book[], value: string) => {
    const oldBooks = cloneDeep(books);

    if (value === 'show all') {
      this.setState({ books });

      return {};
    }

    this.setState({ selectedName: value }, () => {
      let filteredBooks = oldBooks.filter((book: Book) => {
        return (
          book.genre.toLowerCase() === this.state.selectedName.toLowerCase()
        );
      });

      this.setState({ books: filteredBooks });
    });
    return {};
  };

  filterBooksByGender = (books: Book[], value: string) => {
    const oldBooks = cloneDeep(books);

    if (value === 'show all') {
      this.setState({ books });

      return {};
    }

    this.setState({ selectedAuthorGender: value }, () => {
      let filteredBooks = oldBooks.filter((book: Book) => {
        return (
          book.author.gender.toLowerCase() ===
          this.state.selectedAuthorGender.toLowerCase()
        );
      });

      this.setState({ books: filteredBooks });
    });
    return {};
  };

  render() {
    return (
      <>
        <FilterBar
          onClickSortByNameCallback={() =>
            this.sortBooksByName(this.state.allBooks)
          }
          onClickSortByAuthorCallback={() =>
            this.sortBooksByAuthor(this.state.allBooks)
          }
          onChangeFilterByGenreCallback={(value: string) =>
            this.filterBooksByGenre(this.state.allBooks, value)
          }
          onChangeFilterByGenderCallback={(value: string) =>
            this.filterBooksByGender(this.state.allBooks, value)
          }
          selectedName={this.state.selectedName}
          selectedAuthorGender={this.state.selectedAuthorGender}
        />
        <BookList books={this.state.books as Book[]} />
      </>
    );
  }
}

export default BookListContainer;
