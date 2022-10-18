import BookList from "./list/BookList";
import { useState, useEffect } from "react";
import BookGridView from "./grid/BookGridView";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Box from "@mui/material/Box";


const BooksPage = () => {
  const [grid, setGrid] = useState(
    JSON.parse(localStorage.getItem("grid-view")) || false
  );

  const handleChange = () => {
    setGrid((prev) => !prev);
  };
 

  useEffect(() => {
    localStorage.setItem("grid-view", JSON.stringify(grid));
  }, [grid]);

  return (
    <div>
      <Box style={{ marginTop: "2rem" }}>
        <label
          style={{
            fontSize: "1.1rem",
            marginTop: "1rem",
            marginRight: "0.8rem",
          }}
        >
          List
        </label>
        <FormControlLabel
          control={<Switch checked={grid} onChange={handleChange} />}
          label="Grid"
        />
      </Box>
      {grid ? <BookGridView checked={grid} /> : <BookList checked={!grid} />}
    </div>
  );
};

export default BooksPage;
