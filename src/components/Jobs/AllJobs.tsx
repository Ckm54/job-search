import { Box, CircularProgress, Container } from "@mui/material";
import React from "react";
import { JobsContext } from "../../context/jobsContext";
import { JobData, JobDataContext } from "../../types";
import JobCard from "./JobCard/JobCard";
import SearchBar from "./SearchBar/SearchBar";

type Props = {};

const AllJobs = (props: Props) => {
  const { jobsData } = React.useContext(JobsContext) as JobDataContext;

  if (jobsData.length === 0) {
    return (
      <Container sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <CircularProgress />
      </Container>
    );
  }

  return (
    <Box flexGrow={1}>
      <SearchBar />
      {jobsData.map((job: JobData) => (
        <JobCard key={job.id} job={job} />
      ))}
    </Box>
  );
};

export default AllJobs;
