import { Box, Button, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import { palleteColor } from "../../../themes/palleteColor";
import { Specialty } from "../../../types";
import FilterOptions from "./FilterOptions";
import CloseIcon from "@mui/icons-material/Close";

type Props = {};

const specialties: Specialty[] = [
  { name: "Design", isActive: true },
  { name: "Engineering", isActive: false },
  { name: "Web Dev", isActive: false },
  { name: "Cloud Dev", isActive: false },
];

const locations: Specialty[] = [
  { name: "Any", isActive: true },
  { name: "Remote", isActive: false },
  { name: "On-site", isActive: false },
];

const Filters = (props: Props) => {
  const [isClosed, setIsClosed] = React.useState(false);

  return (
    <Box
      mr={{ lg: 5, sm: 4 }}
      sx={{
        border: `1px solid ${palleteColor.grayPallete}`,
        borderRadius: "5px",
        padding: "10px 20px",
        height: 'max-content'
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography sx={{ fontSize: "20px", fontWeight: "400" }}>
          Filters:
        </Typography>
        <CloseIcon
          onClick={() => setIsClosed((prevState) => !prevState)}
          sx={{ display: { xs: "unset", md: "none" }, cursor: 'pointer' }}
        />
      </Box>
      <Box sx={{display: {xs: `${isClosed ? 'none' : 'unset'}`, md: 'unset'}}}>
        <FilterOptions title="Specialties" data={specialties} />
        <FilterOptions title="Location" data={locations} />
      </Box>
    </Box>
  );
};

export default Filters;
