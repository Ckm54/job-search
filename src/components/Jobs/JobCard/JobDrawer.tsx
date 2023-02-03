import * as React from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import JobDetails from './JobDetails';

export type Anchor = 'right';

export default function JobDrawer() {

  const [isOpen, setIsOpen] = React.useState(false)

  const toggleDrawer =
    (open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setIsOpen(open);
    };

  return (
    <div>
        <React.Fragment>
          <Button onClick={toggleDrawer(true)}>open drawer</Button>
          <SwipeableDrawer
            anchor='right'
            open={isOpen}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
          >
            <JobDetails />
          </SwipeableDrawer>
        </React.Fragment>
    </div>
  );
}