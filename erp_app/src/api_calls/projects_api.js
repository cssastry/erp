import { url } from "../utils";
import axios from "axios";

const getAll = async () => {
  try {
    let response = await axios.get(`${url}/projects`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// @ts-ignore
const add = async (payload) => {
  try {
    let response = await axios.post(`${url}/projects/add`, payload);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// @ts-ignore
const update = async (id, payload) => {
  try {
    let response = await axios.patch(`${url}/projects/update/${id}`, payload);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// @ts-ignore
const deleteById = async (id) => {
  try {
    let response = await axios.delete(`${url}/projects/delete/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export { getAll, add, update, deleteById };
