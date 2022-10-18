import { Grid } from "@mui/material";
import { Button } from "@mui/material";

const PaymentPanel = ({ booksForPurchase }) => {
  return (
    <>
      <Grid
        sx={{
          alignContent: "unset",
          maxHeight: "30vh",
          marginLeft: "3rem",
          textAlign: "left",
        }}
      >
        <h3>PAYMENT SCHEDULE</h3>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "nowrap",
            justifyContent: "space-between",
            borderBottom: "2px solid silver",
            paddingBottom: "0.5rem",
          }}
        >
          <div
            style={{
              display: "inline",
              alignSelf: "self-start",
              fontSize: "1rem",
              marginRight: "10rem",
            }}
          >
            TOTAL BOOK PRICE:{" "}
          </div>
          <div style={{ display: "inline", alignSelf: "self-end" }}>
            {" "}
            {booksForPurchase
              .map((x) => x.price)
              .reduce((prevVal, currentVal) => {
                return prevVal + currentVal * 10;
              })}{" "}
            RSD
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "nowrap",
            justifyContent: "space-between",
            borderBottom: "2px solid silver",
            paddingBottom: "0.5rem",
          }}
        >
          <div
            style={{
              display: "inline",
              alignSelf: "self-start",
              fontSize: "1rem",
              marginRight: "10rem",
              marginTop: "0.5rem",
            }}
          >
            SHIPPING:{" "}
          </div>
          <div style={{ display: "inline", alignSelf: "self-end" }}>
            {" 500 RSD"}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "nowrap",
            justifyContent: "space-between",
            borderBottom: "2px solid silver",
            paddingBottom: "0.5rem",
            marginTop: "0.5rem",
          }}
        >
          <div
            style={{
              display: "inline",
              alignSelf: "self-start",
              fontSize: "1rem",
              marginRight: "10rem",
            }}
          >
            TOTAL FOR PAYMENT:{" "}
          </div>
          <div style={{ display: "inline", alignSelf: "self-end" }}>
            {booksForPurchase
              .map((x) => x.price)
              .reduce((prevVal, currentVal) => {
                return prevVal + currentVal * 10;
              }) + 500}{" "}
            RSD
          </div>
        </div>
        <Button
          onClick={() => {}}
          size="large"
          variant="contained"
          color="primary"
          style={{ width: "25rem", height: "3rem", marginTop: "3rem" }}
        >
          FINISH PAYMENT
        </Button>
      </Grid>
    </>
  );
};

export default PaymentPanel;
