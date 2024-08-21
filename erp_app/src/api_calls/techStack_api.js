import { url } from "../utils";
import axios from "axios";

const getAllTechStack = async () => {
  try {
    let response = await axios.get(`${url}/techstack`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// @ts-ignore
const getTaskById = async (id) => {
  try {
    console.log(id);
    let response = await axios.get(`${url}/techstack/getbyid/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// @ts-ignore
const addTechStack = async (payload) => {
  try {
    let response = await axios.post(`${url}/techstack/add`, payload);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// @ts-ignore
const updateTechStack = async (id, payload) => {
  try {
    let response = await axios.patch(`${url}/techstack/update/${id}`, payload);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// @ts-ignore
const deleteByIdTechStack = async (id) => {
  try {
    let response = await axios.delete(`${url}/techstack/delete/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export { getAllTechStack, addTechStack, updateTechStack, deleteByIdTechStack, getTaskById };
