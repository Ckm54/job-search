import { Box, Container } from "@mui/material";
import React from "react";
import { palleteColor } from "../../themes/palleteColor";
import AllJobs from "./AllJobs";
import Filters from "./Filters/Filters";

type Props = {};

const JobsContainer = (props: Props) => {
  return (
    <Box sx={{ borderTop: `1px solid ${palleteColor.secondary}` }}>
      <Container sx={{ padding: "20px 20px 60px 30px" }}>
        <Box display={"flex"}>
          <Filters />
          <AllJobs />
        </Box>
      </Container>
    </Box>
  );
};

export default JobsContainer;
