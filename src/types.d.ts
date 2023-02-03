export interface JobData {
  id:           number;
  title:        string;
  location:     string;
  description:  string;
  requirements: string[];
}

export interface JobDataContext {
  jobsData: JobData[];
  searchHandler: (query: string) => void;
  viewDetailsHandler: (id: number) => void;
  jobData: JobData[];
  isDrawerOpen: boolean;
  setDrawerOpen: Dispatch<SetStateAction<boolean>>;
  notify: () => {}
}

export interface ColorData {
  primary: string;
  secondary: string;
  grayPallete: string;
  darkBlack: string;
  whiteLight: string;
  mainBgColor: string;
}

export interface Specialty {
  name: string;
  isActive: boolean;
};