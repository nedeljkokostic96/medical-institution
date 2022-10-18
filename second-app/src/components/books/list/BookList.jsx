import { Container } from "@mui/material";
import BookListItem from "./BookListItem";
import { useSelector } from "react-redux";

import { useRef } from "react";

const BookList = ({ checked }) => {
  const { books } = useSelector((store) => store.books);
  const containerRef = useRef(null);

  return (
    <>
      <Container maxWidth="md" ref={containerRef}>
        {books.map((book) => (
          <BookListItem
            checked={checked}
            key={book.id + " " + book.authorId}
            book={book}
          />
        ))}
      </Container>
    </>
  );
};

export default BookList;
