import { url } from "../utils";
import axios from "axios";

const getAll = async () => {
  try {
    let response = await axios.get(`${url}/holidays`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// @ts-ignore
const add = async (payload) => {
  try {
    let response = await axios.post(`${url}/holidays/add`, payload);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// @ts-ignore
const update = async (id, payload) => {
  try {
    let response = await axios.patch(`${url}/holidays/update/${id}`, payload);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// @ts-ignore
const deleteById = async (id) => {
  try {
    let response = await axios.delete(`${url}/holidays/delete/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export { getAll, add, update, deleteById };
