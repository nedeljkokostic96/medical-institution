import { Container, Grid } from "@mui/material";
import CartBookTable from "./CartBookTable";
import PaymentPanel from "./PaymentPanel";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { booksForPurchase } = useSelector((store) => store.card);
  const navigate = useNavigate();
  return booksForPurchase && booksForPurchase.length > 0 ? (
    <>
      <h1>Shopping cart</h1>
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          justifyContent: "left",
          minHeight: "86vh",
          boxShadow: "0 0 11px rgba(33, 33, 33, 0.5)",
          marginTop: "2rem",
          borderRadius: "0.5rem",
        }}
      >
        <div
          style={{ display: "flex", justifyContent: "left", marginTop: "5rem" }}
        >
          <CartBookTable booksForPurchase={booksForPurchase} />
          <PaymentPanel booksForPurchase={booksForPurchase} />
        </div>
      </Container>
    </>
  ) : (
    <>
      <h1>Shopping cart</h1>
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          justifyContent: "center",
          minHeight: "86vh",
          textAlign: "center",
          alignContent: "center",
          boxShadow: "0 0 11px rgba(33, 33, 33, 0.5)",
          marginTop: "2rem",
          borderRadius: "0.5rem",
        }}
      >
        <Grid>
          <h3 style={{ marginTop: "5rem" }}>
            Nothing to show in cart. Go back and continue shopping...
          </h3>
          <Button
            onClick={() => navigate("/books")}
            size="large"
            variant="contained"
            color="primary"
            style={{ width: "32rem", height: "3rem", marginTop: "3rem" }}
          >
            {"<<< "} CONTINUE SHOPPING
          </Button>
        </Grid>
      </Container>
    </>
  );
};

export default Cart;
