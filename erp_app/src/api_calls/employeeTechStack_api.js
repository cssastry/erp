import { url } from "../utils";
import axios from "axios";

// @ts-ignore
const getEmployeeTechStackById = async (id) => {
  try {
    let response = await axios.get(`${url}/employeetechstack/getbyid/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// @ts-ignore
const addemployeeTechStack = async (payload) => {
  try {
    let response = await axios.post(`${url}/employeetechstack/add`, payload);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// @ts-ignore
const deleteByIdemployeeTechStack = async (id) => {
  try {
    let response = await axios.delete(`${url}/employeetechstack/delete/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export { addemployeeTechStack, deleteByIdemployeeTechStack, getEmployeeTechStackById };
