import axios from "axios";
import {
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
} from "./types";
export const register = (userData, nav) => async (dispatch) => {
  try {
    const res = await axios.post("api/person/register ",
      userData
    );
    dispatch({ type: REGISTER_SUCCESS, payload: res.data });
   nav('/login');
  } catch (error) {
    dispatch({ type: REGISTER_FAIL, payload: error });
  }
};
export const login = (userData,nav) => async (dispatch) => {
  try {
    const res = await axios.post("/api/person/login", userData);
    dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    if(res.data.existUser.role==='user') nav("/profile");
    else if(res.data.existUser.role === "admin") nav("/dashboard");
   
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload:error
       
    });
  }
};
export const logoutAction = () => {
  return {
    type: LOGOUT,
  };
};

