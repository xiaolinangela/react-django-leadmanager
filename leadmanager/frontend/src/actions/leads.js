import axios from "axios";
import { GET_LEADS, DELETE_LEAD, ADD_LEAD } from "./types";
import regeneratorRuntime from "regenerator-runtime";

// GET LEADS
export const getLeads = () => async dispatch => {
  const response = await axios.get("/api/leads");
  dispatch({ type: GET_LEADS, payload: response.data });
  error => console.log(error);
};

export const deleteLead = id => async dispatch => {
  await axios.delete(`/api/leads/${id}`);
  dispatch({ type: DELETE_LEAD, payload: id });
  error => console.log(error);
};

export const addLead = lead => async dispatch => {
  const response = await axios.post("/api/leads/", lead);
  dispatch({ type: ADD_LEAD, payload: response.data });
  error => console.log(error);
};
