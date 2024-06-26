// @ts-ignore
import { url } from "../utils";
// @ts-ignore
import axios from "axios";

// @ts-ignore
const getPayslipsById = async (id) => {
  try {
    let response = await axios.get(`${url}/payslips/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export { getPayslipsById };
