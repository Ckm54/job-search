import { Box, Button, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import { palleteColor } from "../../../themes/palleteColor";
import { Specialty } from "../../../types";
import FilterOptions from "./FilterOptions";

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
  const [isActive, setIsActive] = React.useState(false);

  return (
    <Box mr={5} sx={{ border: `1px solid ${palleteColor.grayPallete}`, borderRadius: '5px', padding: '10px 20px'}}>
      <Typography sx={{ fontSize: "20px", fontWeight: "400" }}>
        Filters:
      </Typography>
        <FilterOptions title="Specialties" data={specialties} />
        <FilterOptions title="Location" data={locations} />
    </Box>
  );
};

export default Filters;
