import { url } from "../utils";
import axios from "axios";

// @ts-ignore
const getEmployProjects = async (id) => {
  try {
    let response = await axios.get(`${url}/employprojects/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// @ts-ignore
const addEmployProject = async (payload) => {
  try {
    let response = await axios.post(`${url}/employprojects/add`, payload);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export { getEmployProjects, addEmployProject };
