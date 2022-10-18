import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Zoom from "@mui/material/Zoom";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { CardActions } from "@mui/material";
import { createSlug } from "../../../util/util";
import CustomButton from "../../customComponents/CustomButton";

export default function MultiActionAreaCard({ book, checked }) {
  const { authors } = useSelector((store) => store.authors);
  const navigate = useNavigate();
  return (
    <Zoom in={checked} style={{ transitionDelay: checked ? "100ms" : "0ms" }}>
      <Grid
        item
        xs={6}
        style={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
        }}
        onClick={(event) => {
          if (event.target.nodeName === "BUTTON") {
            return;
          }
          navigate("/book/" + createSlug(book.title), { state: { book } });
        }}
      >
        <Card
          className="grid-card"
          sx={{
            width: 300,
            height: 650,
            marginTop: "2rem",
            boxShadow: "0 3px 10px rgb(0 0 0 / 0.5)",
          }}
        >
          <CardMedia
            component="img"
            image={book.image}
            alt={book.title}
            sx={{ height: "70%", width: "100%" }}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              fontFamily="Times new roman"
              component="div"
            >
              {book.title}
            </Typography>
            <Typography
              gutterBottom
              variant="h6"
              fontFamily="Times new roman"
              component="div"
            >
              {authors && authors.find((a) => a.id === book.authorId).name}
            </Typography>
            <Typography
              variant="body2"
              fontFamily="Times new roman"
              color="text.secondary"
            >
              {book.price} RSD
            </Typography>
          </CardContent>
          <Box textAlign="center">
            <CardActions style={{ justifyContent: "center" }}>
              {<CustomButton width="15rem" height="2rem" book={book} />}
            </CardActions>
          </Box>
        </Card>
      </Grid>
    </Zoom>
  );
}
