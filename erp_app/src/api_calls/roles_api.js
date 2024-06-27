import { url } from "../utils";
import axios from "axios";

const rolegetAll = async () => {
  try {
    let response = await axios.get(`${url}/roles`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// @ts-ignore
const roleadd = async (payload) => {
  try {
    let response = await axios.post(`${url}/roles/add`, payload);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// @ts-ignore
const roleupdate = async (id, payload) => {
  try {
    let response = await axios.patch(`${url}/roles/update/${id}`, payload);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// @ts-ignore
const roledeleteById = async (id) => {
  try {
    let response = await axios.delete(`${url}/roles/delete/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export { rolegetAll, roleadd, roleupdate, roledeleteById };
