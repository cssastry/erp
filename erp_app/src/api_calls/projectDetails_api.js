import { url } from "../utils";
import axios from "axios";

// @ts-ignore
const getprojectDetailsById = async (id) => {
  try {
    let response = await axios.get(`${url}/projectdetails/getbyid/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// @ts-ignore
const addprojectDetails = async (payload) => {
  try {
    let response = await axios.post(`${url}/projectdetails/add`, payload);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// @ts-ignore
const deleteByIdprojectDetails = async (id) => {
  try {
    let response = await axios.delete(`${url}/projectdetails/delete/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export { addprojectDetails, deleteByIdprojectDetails, getprojectDetailsById };
