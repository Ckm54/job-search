import { useState, useEffect } from "react";
import { getData } from "./api/getData";
import { JobData } from "./types";
import LandingPage from "./pages/LandingPage";

function App() {
  const [jobData, setJobData] = useState<JobData[]>();

  useEffect(() => {
    const getJobsData = async () => {
      const data = getData();
      setJobData(await data);
    };

    getJobsData();
  }, []);

  return (
    // <div className="App">
    //   {jobData && jobData.length > 0 ? (
    //     jobData.map((job) => <div>{job.title}</div>)
    //   ) : (
    //     <div>No data</div>
    //   )}
    // </div>
    <div className="App">
      <LandingPage />
    </div>
  );
}

export default App;
