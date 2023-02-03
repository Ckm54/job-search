import * as React from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import JobDetails from './JobDetails';
import { JobsContext } from '../../../context/jobsContext';
import { JobDataContext } from '../../../types';

interface IProps {
  isOpen: boolean;
  // setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export type Anchor = 'right';

const JobDrawer = () => {

  const { isDrawerOpen, setDrawerOpen } = React.useContext(JobsContext) as JobDataContext;

  return (
    <div>
        <React.Fragment>
          <SwipeableDrawer
            PaperProps={{
              sx: { width: {md: "30%" }},
            }}
            anchor='right'
            BackdropProps={{ invisible: true }}
            open={isDrawerOpen}
            onClose={() => setDrawerOpen(false)}
            onOpen={() =>setDrawerOpen(true)}
          >
            <JobDetails />
          </SwipeableDrawer>
        </React.Fragment>
    </div>
  );
}

export default JobDrawer;