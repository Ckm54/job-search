import React from "react";
import { getData } from "../api/getData";
import { JobData, JobDataContext } from "../types";

interface IProps {
  children: React.ReactNode;
}

export const JobsContext = React.createContext<JobDataContext | null>(null);

// fetches all posts from api and provides to application
const JobsProvider = ({ children }: IProps) => {
  const [jobsData, setJobsData] = React.useState<JobData[]>([]);
  const [JobDetails, setJobDetails] = React.useState<JobData[]>([]);
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const searchHandler = (query: string) => {
    if (query === "") {
      getJobsData();
    }

    const data = jobsData.filter((job: JobData) =>
      job.title.toLowerCase().includes(query.toLowerCase())
    );

    setJobsData(data);
  };

  const viewDetailsHandler = (jobId: number) => {
    const jobs = jobsData.filter((job: JobData) => job.id === jobId);
    setJobDetails(jobs);
    setIsDrawerOpen(true);
  };

  const getJobsData = async () => {
    const data = getData();
    setJobsData(await data);
  };
  React.useEffect(() => {
    getJobsData();
  }, []);

  return (
    <JobsContext.Provider
      value={{
        jobsData: jobsData,
        searchHandler: searchHandler,
        viewDetailsHandler: viewDetailsHandler,
        jobData: JobDetails,
        isDrawerOpen: isDrawerOpen,
        setDrawerOpen: setIsDrawerOpen,
      }}
    >
      {children}
    </JobsContext.Provider>
  );
};

export default JobsProvider;
