// @ts-ignore
import { url } from "../utils";
// @ts-ignore
import axios from "axios";

// @ts-ignore
const login = async (payload) => {
  try {
    const response = await axios.post(`${url}/login`, payload);
    console.log(`${url}/login`, payload);
    return response.data;
  } catch (error) {
    console.log(error);
    return "api call for login failed";
  }
};

export { login };
