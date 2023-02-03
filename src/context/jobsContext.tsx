import React from "react";
import { getData } from "../api/getData";
import { JobData, JobDataContext } from "../types";
import toast from 'react-hot-toast';

interface IProps {
  children: React.ReactNode;
}

export const JobsContext = React.createContext<JobDataContext | null>(null);

// fetches all posts from api and provides to application
const JobsProvider = ({ children }: IProps) => {
  const [jobsData, setJobsData] = React.useState<JobData[]>([]);
  const [JobDetails, setJobDetails] = React.useState<JobData[]>([]);
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  // handles searchning for a given job by title or keywords
  const searchHandler = (query: string) => {
    if (query === "") {
      getJobsData();
    }

    const data = jobsData.filter((job: JobData) =>
      job.title.toLowerCase().includes(query.toLowerCase())
    );

    setJobsData(data);
  };

  // notifies the user of a successful application made
  const notify = () => toast.success('Application submitted.');

  // gets details of a specific job and filters list by id to return the matching job
  const viewDetailsHandler = (jobId: number) => {
    const jobs = jobsData.filter((job: JobData) => job.id === jobId);
    setJobDetails(jobs);
    setIsDrawerOpen(true);
  };

  // gets all jobs from json file to display on the application
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
        notify: notify
      }}
    >
      {children}
    </JobsContext.Provider>
  );
};

export default JobsProvider;
