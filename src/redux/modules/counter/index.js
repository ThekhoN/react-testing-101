import axios from "axios";
import { counterMessages } from "../../../utils/messags";
export const COUNTER_RESET = "COUNTER_RESET";
export const COUNTER_SET = "COUNTER_SET";
export const COUNTER_INCREMENT = "COUNTER_INCREMENT";
export const COUNTER_DECREMENT = "COUNTER_DECREMENT";
export const COUNTER_FETCH_LOADING = "COUNTER_FETCH_LOADING";
export const COUNTER_FETCH_FULFILLED = "COUNTER_FETCH_FULFILLED";
export const COUNTER_FETCH_FAILURE = "COUNTER_FETCH_FAILURE";

export const counterInitialState = {
  count: 0,
  error: "",
  loading: false,
  success: false
};

const getUpdatedCount = (count, type) => {
  if (type === "INCREMENT") {
    return count + 1;
  } else if (type === "DECREMENT") {
    return count - 1;
  } else {
    return 0; // INCASE OF "RESET"
  }
};

export const counterUpdateCount = type => {
  return function(dispatch, getState) {
    const count = getState().counter.count;
    const updatedCount = getUpdatedCount(count, type);
    return axios({
      method: "PUT",
      url: "httpS://59257e8a21cf650011fddc9b.mockapi.io/counter/count/count/1",
      data: {
        count: updatedCount
      }
    })
      .then(response => {
        const updatedCountFromResponse = response.data.count;
        dispatch({
          type: COUNTER_SET,
          payload: updatedCountFromResponse
        });
      })
      .catch(err => {
        console.log("err inside counterFetchCount: ", err);
      });
  };
};

export const counterFetchCount = () => {
  return function(dispatch, getState) {
    dispatch({
      type: COUNTER_FETCH_LOADING
    });

    return axios({
      method: "GET",
      url: "httpS://59257e8a21cf650011fddc9b.mockapi.io/counter/count/count"
    })
      .then(response => {
        if (!response.data || !response.data[0] || !response.data[0].count) {
          return dispatch({
            type: COUNTER_FETCH_FAILURE,
            payload: counterMessages.incorrectResponse
          });
        }
        const count = response.data[0].count;
        dispatch({
          type: COUNTER_FETCH_FULFILLED,
          payload: count
        });
      })
      .catch(err => {
        return dispatch({
          type: COUNTER_FETCH_FAILURE,
          payload: counterMessages.serviceError
        });
      });
  };
};

const counter = (state = counterInitialState, action) => {
  switch (action.type) {
    case COUNTER_RESET:
      return counterInitialState;
    case COUNTER_SET:
      return {
        ...state,
        count: action.payload
      };
    case COUNTER_INCREMENT:
      return {
        ...state,
        count: state.count + 1
      };
    case COUNTER_DECREMENT:
      return {
        ...state,
        count: state.count - 1
      };
    case COUNTER_FETCH_LOADING:
      return {
        ...state,
        loading: true
      };
    case COUNTER_FETCH_FULFILLED:
      return {
        ...state,
        error: "",
        loading: false,
        success: true,
        count: action.payload
      };
    case COUNTER_FETCH_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
        success: false
      };
    default:
      return state;
  }
};

export default counter;
