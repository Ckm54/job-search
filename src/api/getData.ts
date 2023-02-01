import axios from "axios";

export const getData = async () => {
  const response = await axios.get('job-data.json');
  return response.data;
}