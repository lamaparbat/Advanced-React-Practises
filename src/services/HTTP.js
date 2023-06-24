import axios from "axios";
import { HTTP_METHODS } from "../constants/HTTP.constants";

export const HTTP = (method, endpoint, data, headers = null, fullUrl) => {
  if (!HTTP_METHODS.includes(method) || (!endpoint && !fullUrl)) return;
  
  const url = fullUrl ?? `${process.env.REACT_APP_BASE_URL}${endpoint}`;
  
  const config = {
    method, 
    url, 
    data, 
    headers
  };

  return axios(config);
};
