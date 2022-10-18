import { useSelector } from "react-redux";
import Grid from "@mui/material/Grid";
import BookGridItem from "./BookGridItem";
import { Container } from "@mui/system";

const BookGridView = ({ checked }) => {
  const { books } = useSelector((store) => store.books);

  return (
    <Container maxWidth="md">
      <Grid
        container
        rowSpacing={3}
        columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 4 }}
      >
        {books.map((book) => (
          <>
            <BookGridItem key={book.id} checked={checked} book={book} />
          </>
        ))}
      </Grid>
    </Container>
  );
};

export default BookGridView;
