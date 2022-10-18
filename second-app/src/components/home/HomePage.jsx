import { fetchBooks } from "../../redux/BookSlice";
import { fetchAuthors } from "../../redux/AuthorSlice";
import { fetchGenres } from "../../redux/GenreSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const HomePage = () => {
  const { books } = useSelector((store) => store.books);
  const { authors } = useSelector((store) => store.authors);
  const { genres } = useSelector((store) => store.genres);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!books || books.length === 0) dispatch(fetchBooks());
  }, [books, dispatch]);
  useEffect(() => {
    if (!authors || authors.length === 0) dispatch(fetchAuthors());
  }, [authors, dispatch]);
  useEffect(() => {
    if (!genres || genres.length === 0) dispatch(fetchGenres());
  }, [genres, dispatch]);
  return (
    <>
      <h1>Home page!</h1>

      <div></div>
    </>
  );
};

export default HomePage;
