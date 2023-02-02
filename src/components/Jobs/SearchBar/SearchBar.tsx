import { Box, Button, styled, TextField } from "@mui/material";
import React, { ChangeEvent } from "react";
import { JobsContext } from "../../../context/jobsContext";
import { palleteColor } from "../../../themes/palleteColor";
import { JobDataContext } from "../../../types";

type Props = {};

const SearchBar = (props: Props) => {
  const [searchQuery, setSearchQuery] = React.useState<string>("");
  const [searchTimeout, setSearchTimeout] = React.useState(0);

  const { searchHandler } = React.useContext(JobsContext) as JobDataContext;

  const searchJobsHandler = () => {
    searchHandler(searchQuery);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    clearTimeout(searchTimeout);
    setSearchQuery(e.currentTarget.value);

    setSearchTimeout(
      setTimeout(() => {
        searchHandler(searchQuery);
      }, 500)
    );
  };

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
    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
      <TextField
        sx={{ flexGrow: 1, padding: "12px 0px" }}
        value={searchQuery}
        inputProps={{ style: { fontSize: 14 } }}
        onChange={handleInputChange}
        placeholder="Enter keyword or job title..."
      />
      <SearchBtn onClick={searchJobsHandler}>Search</SearchBtn>
    </Box>
  );
};

export default SearchBar;
