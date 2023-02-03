import { Box, Button, Container, List, ListItem, Stack, styled, Typography } from "@mui/material";
import React from "react";
import { JobsContext } from "../../../context/jobsContext";
import { JobDataContext } from "../../../types";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { palleteColor } from "../../../themes/palleteColor";
import VerifiedIcon from '@mui/icons-material/Verified';
import { LoadingButton } from "@mui/lab";
import CloseIcon from "@mui/icons-material/Close";

const JobDetails = () => {
  const { jobData, isDrawerOpen, setDrawerOpen, notify } = React.useContext(
    JobsContext
  ) as JobDataContext;
  const [loading, setLoading] = React.useState(false);

  const ApplyButton = styled(LoadingButton)({
    backgroundColor: `${palleteColor.primary}`,
    color: `${palleteColor.whiteLight}`,
    borderRadius: "0px",
    padding: "8px 24px",
    width: '100%',
    "&:hover": {
      backgroundColor: "#E64839",
    },
  });

  const handleApply = () => {
    setLoading(true);

    setTimeout(() => {
      setDrawerOpen(false);
      setLoading(false);
      notify();
    }, 2000);
  }

  return (
    <>
      {isDrawerOpen && (
        <Container sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
          <Stack gap={6}>
            <Stack gap={1}>
              <Box display={'flex'} sx={{alignItems: 'center',justifyContent: 'space-between'}}>
                <Box display={'flex'} sx={{alignItems: 'center', gap: 2}}>
                  <Typography fontWeight={600} fontSize={"24px"}>
                    {jobData[0].title}
                  </Typography>
                  <VerifiedIcon sx={{color: 'blue'}} />
                </Box>
                <CloseIcon onClick={() => setDrawerOpen(false)} sx={{cursor: 'pointer', display: {xs: 'unset', md: 'none'}}} />
              </Box>
              <Typography>{jobData[0].description}</Typography>
            </Stack>
            
            <Stack gap={1}>
              <Typography fontSize={'18px'} fontWeight={600}>Job requirements:</Typography>
              <List sx={{ marginLeft: "30px" }}>
                {jobData[0].requirements.map((requirement: string, index: number) => (
                  <ListItem key={index} sx={{ display: "list-item", listStyleType: "disc" }}>
                    {requirement}
                  </ListItem>
                ))}
              </List>
            </Stack>

            <Stack gap={1}>
              <Typography fontSize={'18px'} fontWeight={600}>Job location:</Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 0.5,
                  color: `${palleteColor.grayPallete}`,
                }}
              >
                <LocationOnIcon />
                {jobData[0].location}
              </Box>
            </Stack>
            
            <ApplyButton onClick={() => handleApply()} loading={loading} loadingIndicator='Applying...' >Apply</ApplyButton>
          </Stack>
        </Container>
      )}
    </>
  );
};

export default JobDetails;
