import * as React from "react";
import { useRef } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Slide from "@mui/material/Slide";
import { createSlug } from "../../../util/util";
import CustomButton from "../../customComponents/CustomButton";

export default function BookListItem({ book, checked }) {
  const { authors } = useSelector((store) => store.authors);
  const containerRef = useRef(null);
  const navigate = useNavigate();

  return (
    <Slide direction="up" in={checked} container={containerRef.current}>
      <div
        onClick={(event) => {
          if (event.target.nodeName === "BUTTON") {
            return;
          }
          navigate("/book/" + createSlug(book.title), { state: { book } });
        }}
        className="book-list-item"
      >
        <div className="book-image">
          <img className="book-list-image" alt={book.title} src={book.image} />
        </div>
        <div className="book-details">
          <h2 className="book-title">{book.title}</h2>
          <p style={{ marginLeft: "4rem" }}>
            {authors.length !== 0 &&
              authors.find((a) => a.id === book.authorId).name}
          </p>
          <div className="book-description">
            {" "}
            {book.description.substring(0, 67) + "..."}
          </div>
          <div className="add-to-cart-panel">{book.price} RSD</div>
          <div>
            <Box className="add-to-cart-button">
              {<CustomButton width="15rem" height="2rem" book={book} />}
            </Box>
          </div>
        </div>
      </div>
    </Slide>
  );
}
