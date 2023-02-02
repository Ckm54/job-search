import React from "react";
import { getData } from "../api/getData";
import { JobData, JobDataContext } from "../types";

interface IProps {
  children: React.ReactNode;
}

export const JobsContext = React.createContext<JobDataContext | null>(null);

const JobsProvider = ({children} : IProps) => {
  const [jobData, setJobData] = React.useState<JobData[]>([]);

  React.useEffect(() => {
    const getJobsData = async () => {
      const data = getData();
      setJobData(await data);
    };

    getJobsData();
  }, []);


  return <JobsContext.Provider value={{jobData}}>{children}</JobsContext.Provider>
}

export default JobsProvider;