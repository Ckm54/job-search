import { Box } from "@mui/material";
import React from "react";
import { JobsContext } from "../../context/jobsContext";
import { JobData, JobDataContext } from "../../types";
import JobCard from "./JobCard/JobCard";
import SearchBar from "./SearchBar/SearchBar";

type Props = {};

const AllJobs = (props: Props) => {
  const { jobData } = React.useContext(JobsContext) as JobDataContext;

  console.log("This is the data: ", jobData);
  return (
    <Box flexGrow={1}>
      <SearchBar />

      {jobData.length > 0 && jobData.map((job: JobData) => <JobCard key={job.id} job={job} />)}
    </Box>
  );
};

export default AllJobs;
