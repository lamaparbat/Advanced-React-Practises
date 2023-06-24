import axios from "axios";
import { HTTP_METHODS } from "../constants/HTTP.constants";

export const HTTP = (method, endpoint, data, headers = null, fullUrl) => {
  const config = {};

  if (!HTTP_METHODS.includes(method) || (!endpoint && !fullUrl)) return;

  config.url = fullUrl ?? `${process.env.REACT_APP_BASE_URL}${endpoint}`;

  return axios(config);
};
