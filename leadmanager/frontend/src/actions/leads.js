import axios from "axios";
import { GET_LEADS, DELETE_LEAD, ADD_LEAD, GET_ERRORS } from "./types";
import regeneratorRuntime from "regenerator-runtime";
import { createMessage } from "./messages";

// GET LEADS
export const getLeads = () => async dispatch => {
  const response = await axios.get("/api/leads");
  dispatch({ type: GET_LEADS, payload: response.data });
  error => console.log(error);
};

export const deleteLead = id => async dispatch => {
  await axios.delete(`/api/leads/${id}`);
  dispatch(createMessage({ deleteLead: "Lead Deleted" }));
  dispatch({ type: DELETE_LEAD, payload: id });
  error => console.log(error);
};

export const addLead = lead => dispatch => {
  axios
    .post("/api/leads/", lead)
    .then(response => {
      dispatch(createMessage({ addLead: "Lead Added" }));
      dispatch({
        type: ADD_LEAD,
        payload: response.data
      });
    })
    .catch(err => {
      const errors = {
        msg: err.response.data,
        status: err.response.status
      };
      dispatch({
        type: GET_ERRORS,
        payload: errors
      });
    });
};
