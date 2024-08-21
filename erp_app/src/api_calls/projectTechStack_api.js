import { url } from "../utils";
import axios from "axios";

// @ts-ignore
const getprojectTechStackById = async (id) => {
  try {
    let response = await axios.get(`${url}/projecttechstack/getbyid/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// @ts-ignore
const addprojectTechStack = async (payload) => {
  try {
    let response = await axios.post(`${url}/projecttechstack/add`, payload);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// @ts-ignore
const deleteByIdprojectTechStack = async (id) => {
  try {
    let response = await axios.delete(`${url}/projecttechstack/delete/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export { addprojectTechStack, deleteByIdprojectTechStack, getprojectTechStackById };
