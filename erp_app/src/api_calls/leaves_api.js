import { url } from "../utils";
import axios from "axios";

const getAll = async () => {
  try {
    let response = await axios.get(`${url}/leaves`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// @ts-ignore
const getById = async (id) => {
  try {
    let response = await axios.get(`${url}/leaves/getbyid/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// @ts-ignore
const add = async (payload) => {
  try {
    let response = await axios.post(`${url}/leaves/add`, payload);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// @ts-ignore
const update = async (id, payload) => {
  try {
    let response = await axios.patch(`${url}/leaves/update/${id}`, payload);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// @ts-ignore
const deleteById = async (id) => {
  try {
    let response = await axios.delete(`${url}/leaves/delete/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export { getAll, getById, add, update, deleteById };
