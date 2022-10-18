import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import * as React from "react";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CustomButton from "../customComponents/CustomButton";
import CloseIcon from "@mui/icons-material/Close";

const BookDetailsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { authors } = useSelector((store) => store.authors);
  const { genres } = useSelector((store) => store.genres);
  const { book } = location.state;

  return (
    <Container
      sx={{
        boxShadow: "0 0 11px rgba(33, 33, 33, 0.5)",
        borderRadius: "0.5rem",
        marginTop: "1rem",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "right",
          alignItems: "flex-end",
          paddingTop: "1rem",
        }}
      >
        <CloseIcon onClick={() => navigate("/books")} className="exit-button" />
      </div>
      <Container
        sx={{
          display: "flex",
          justifyContent: "left",
          alignItems: "flex-start",

          fontFamily: "Times new roman",
        }}
        maxWidth="lg"
      >
        <Card
          sx={{
            width: "30rem",
            borderRadius: "0.5rem",
            marginBottom: "2rem",
          }}
        >
          <CardMedia
            component="img"
            height="auto"
            image={book.image}
            alt={book.title}
          />
        </Card>
        <div
          style={{
            minHeight: "84vh",
            marginLeft: "4rem",
            textAlign: "justify",
          }}
        >
          <h1 style={{ marginTop: "0rem" }}>{book.title}</h1>
          <h2 style={{ display: "flex" }}>
            {authors && authors.find((a) => a.id === book.authorId).name}
          </h2>
          <h3 style={{ display: "flex" }}>Genres:</h3>
          <ol>
            {book.genres
              .split(",")
              .map((a) => parseInt(a))
              .map((b) => (
                <li
                  key={b}
                  style={{
                    listStyleType: "disc",
                    display: "list-item",
                  }}
                >
                  {genres && genres.find((g) => g.id === b).title}
                </li>
              ))}
          </ol>
          <p
            style={{
              maxWidth: "30rem",
              maxHeight: "26.3rem",
              overflow: "hidden",
            }}
          >
            {book.description}
          </p>
          <p>{book.price} RSD</p>
          <CustomButton width="30rem" height="2rem" book={book} />
        </div>
      </Container>
    </Container>
  );
};

export default BookDetailsPage;
