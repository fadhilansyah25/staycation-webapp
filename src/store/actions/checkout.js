import axios from "../../config/axios/index";
import { CHECKOUT_BOOKING } from "../types";

export const checkoutBooking = (payload) => (dispatch) => {
  dispatch({
    type: CHECKOUT_BOOKING,
    payload: payload,
  });
};

export const submitBooking = (payload) => () => {
  return axios.post(
    `/booking-page`,
    payload,
    { headers: { contentType: "multipart/form-data" } }
  );
};
