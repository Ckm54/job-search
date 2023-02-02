import { Box, Button, Container, Stack, styled, Typography } from "@mui/material";
import React from "react";
import { palleteColor } from "../../../themes/palleteColor";
import { JobData } from "../../../types";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import JobDrawer from "./JobDrawer";

type Props = {
  job: JobData;
};

const JobCard = ({ job }: Props) => {

  const MoreInfoBtn = styled(Button)({
    backgroundColor: `${palleteColor.primary}`,
    color: `${palleteColor.whiteLight}`,
    borderRadius: "0px",
    padding: "8px 24px",
    "&:hover": {
      backgroundColor: "#E64839",
    },
  });

  return (
    <Container sx={{border: `1px solid ${palleteColor.grayPallete}`, marginBottom: '20px', borderRadius: '5px', padding: '20px'}}>
      <Stack>
        <Typography fontWeight={600} fontSize={'24px'}>{job.title}</Typography>
        <Typography my={2}>{job.description}</Typography>
        <Stack direction='row' justifyContent={'space-between'}>
          <Box sx={{display: 'flex', alignItems: 'center', gap: 0.5, color: `${palleteColor.grayPallete}`}}>
            <LocationOnIcon />
            {job.location}
          </Box>
  
          <MoreInfoBtn>View details</MoreInfoBtn>
          <JobDrawer />
        </Stack>
      </Stack>
    </Container>
  );
};

export default JobCard;
