import { Box, Button, styled, TextField } from "@mui/material";
import React from "react";
import { palleteColor } from "../../../themes/palleteColor";

type Props = {};

const SearchBar = (props: Props) => {

  const SearchBtn = styled(Button)({
    backgroundColor: `${palleteColor.primary}`,
    color: `${palleteColor.whiteLight}`,
    borderRadius: "5px",
    padding: "12px 25px",
    "&:hover": {
      backgroundColor: "#E64839",
    },
  });

  return (
    <Box sx={{display: 'flex', alignItems: 'center', gap: 2 }}>
      <TextField sx={{flexGrow: 1, padding: "12px 0px"}} inputProps={{style: {fontSize: 14}}} placeholder="Enter keyword or job title..." />
      <SearchBtn>
        Search
      </SearchBtn>
    </Box>
  );
};

export default SearchBar;
