import { url } from "../utils";
import axios from "axios";

const getAllTasks = async () => {
  try {
    let response = await axios.get(`${url}/tasks`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// @ts-ignore
const getTaskById = async (id) => {
  try {
    console.log(id);
    let response = await axios.get(`${url}/tasks/getbyid/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// @ts-ignore
const addTasks = async (payload) => {
  try {
    let response = await axios.post(`${url}/tasks/add`, payload);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// @ts-ignore
const updateTasks = async (id, payload) => {
  try {
    let response = await axios.patch(`${url}/tasks/update/${id}`, payload);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// @ts-ignore
const deleteByIdTasks = async (id) => {
  try {
    let response = await axios.delete(`${url}/tasks/delete/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export { getAllTasks, addTasks, updateTasks, deleteByIdTasks, getTaskById };
