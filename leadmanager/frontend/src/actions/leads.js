import axios from "axios";
import { GET_LEADS, DELETE_LEAD, ADD_LEAD } from "./types";
import regeneratorRuntime from "regenerator-runtime";
import { createMessage, returnErrors } from "./messages";

// GET LEADS
// export const getLeads = () => async dispatch => {
//   const response = await axios.get("/api/leads");
//   dispatch({ type: GET_LEADS, payload: response.data });
//   error => console.log(error);
// };

export const getLeads = () => dispatch => {
  axios
    .post("/api/leads/")
    .then(response => {
      dispatch({
        type: GET_LEADs,
        payload: response.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const deleteLead = id => async dispatch => {
  await axios.delete(`/api/leads/${id}`);
  dispatch(createMessage({ deleteLead: "Lead Deleted" }));
  dispatch({ type: DELETE_LEAD, payload: id });
  error => dispatch(returnErrors(err.response.data, err.response.status));
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
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
