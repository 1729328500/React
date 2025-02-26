import React from "react";
import { List } from "antd";
import BookItem from "./BookItem";

const BookList = ({ books, setSelectedBook, deleteBook, editBook }) => {
  return (
    <List
      itemLayout="vertical"
      dataSource={books}
      renderItem={(book) => (
        <BookItem
          book={book}
          setSelectedBook={setSelectedBook}
          deleteBook={deleteBook}
          editBook={editBook}
        />
      )}
      style={{ listStyle: "none", padding: "0" }}
    />
  );
};

export default BookList;
