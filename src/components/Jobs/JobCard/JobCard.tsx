import {
  Box,
  Button,
  Container,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import React from "react";
import { palleteColor } from "../../../themes/palleteColor";
import { JobData, JobDataContext } from "../../../types";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { JobsContext } from "../../../context/jobsContext";
import JobDrawer from "./JobDrawer";

type Props = {
  job: JobData;
};

const JobCard = ({ job }: Props) => {
  const { viewDetailsHandler, setDrawerOpen } = React.useContext(
    JobsContext
  ) as JobDataContext;

  const MoreInfoBtn = styled(Button)({
    backgroundColor: `${palleteColor.primary}`,
    color: `${palleteColor.whiteLight}`,
    borderRadius: "0px",
    "&:hover": {
      backgroundColor: "#E64839",
    },
  });

  const handleDrawerOpen = (id: number) => {
    setDrawerOpen(true)

    viewDetailsHandler(id);
  }

  return (
    <>
      <Container
        sx={{
          border: `1px solid ${palleteColor.borderJobCard}`,
          marginBottom: "20px",
          borderRadius: "5px",
          padding: "20px",
        }}
      >
        <Stack>
          <Typography fontWeight={600} fontSize={{md: "24px"}}>
            {job.title}
          </Typography>
          <Typography fontSize={{xs: '14px', sm: '17px'}} my={2}>{job.description}</Typography>
          <Stack direction="row" justifyContent={"space-between"}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                fontSize: {xs: '12px', sm: '16px'},
                gap: 0.5,
                color: `${palleteColor.grayPallete}`,
              }}
            >
              <LocationOnIcon />
              {job.location}
            </Box>

            <MoreInfoBtn sx={{padding: {md: "8px 24px", xs: '8px 16px'}, fontSize: {xs: '12px', sm: '16px'}}} onClick={() => handleDrawerOpen(job.id)}>
              View details
            </MoreInfoBtn>
          </Stack>
        </Stack>
      </Container>
      <JobDrawer />
    </>
  );
};

export default JobCard;
