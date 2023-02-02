export interface JobData {
  id:           number;
  title:        string;
  location:     string;
  description:  string;
  requirements: string[];
}

export interface ColorData {
  primary: string;
  secondary: string;
  grayPallete: string;
  darkBlack: string;
  whiteLight: string;
  mainBgColor: string;
}