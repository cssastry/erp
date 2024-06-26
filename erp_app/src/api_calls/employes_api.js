import { url } from "../utils";
import axios from "axios";

const getAll = async () => {
  try {
    let response = await axios.get(`${url}/employes`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// @ts-ignore
const getById = async (id) => {
  try {
    let response = await axios.get(`${url}/employes/employid/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// @ts-ignore
const add = async (payload) => {
  try {
    let response = await axios.post(`${url}/employes/add`, payload);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// @ts-ignore
const update = async (id, payload) => {
  try {
    let response = await axios.patch(`${url}/employes/update/${id}`, payload);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// @ts-ignore
const deleteById = async (id) => {
  try {
    let response = await axios.delete(`${url}/employes/delete/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export { getAll, getById, add, update, deleteById };
