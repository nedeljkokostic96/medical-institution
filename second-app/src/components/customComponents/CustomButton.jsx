import { useSelector } from "react-redux";
import { Button } from "@mui/material";
import { addBookToCart, removeBookFromCart } from "../../redux/CardSlice";
import { useDispatch } from "react-redux";
const CustomButton = ({ width, height, book }) => {
  const { booksForPurchase } = useSelector((store) => store.card);
  const dispatch = useDispatch();
  return (
    <>
      {booksForPurchase && booksForPurchase.find((b) => b.id === book.id) ? (
        <Button
          onClick={() => dispatch(removeBookFromCart(book))}
          variant="contained"
          color="error"
          style={{ width: width, height: height }}
        >
          REMOVE FROM CART
        </Button>
      ) : (
        <Button
          onClick={() => dispatch(addBookToCart(book))}
          size="small"
          variant="contained"
          color="primary"
          style={{ width: width, height: height }}
        >
          ADD TO CART
        </Button>
      )}
    </>
  );
};

export default CustomButton;
