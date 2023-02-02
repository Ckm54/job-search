import React from "react";
import { getData } from "../api/getData";
import { JobData, JobDataContext } from "../types";

interface IProps {
  children: React.ReactNode;
}

export const JobsContext = React.createContext<JobDataContext | null>(null);

// fetches all posts from api and provides to application
const JobsProvider = ({children} : IProps) => {
  const [jobData, setJobData] = React.useState<JobData[]>([]);
  const [query, setQuery] = React.useState<string>("");

  const searchHandler = (query: string) => {
    setQuery(query);

    if(query === '') {
      getJobsData();
    }

    const data = jobData.filter((job: JobData) => job.title.toLowerCase().includes(query.toLowerCase()));

    setJobData(data);
  }

  const getJobsData = async () => {
    const data = getData();
    setJobData(await data);
  };
  React.useEffect(() => {

    getJobsData();
  }, []);


  return <JobsContext.Provider value={{jobData: jobData, searchHandler: searchHandler}}>{children}</JobsContext.Provider>
}

export default JobsProvider;