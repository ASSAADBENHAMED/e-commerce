import {
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
} from "../actions/types";

const initState = {
  personInfo: JSON.parse(localStorage.getItem("personInfo")) || {},
  token: localStorage.getItem("token") || null,
  isAuth: Boolean(localStorage.getItem("isAuth")) || false,
  errors: null,
};
const userReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case REGISTER_FAIL:
    case LOGIN_FAIL:
      return { ...state, errors: payload };
    case REGISTER_SUCCESS:
      return {
        ...state,
        personInfo: payload.newUser,

        errors: null,
      };
    case LOGIN_SUCCESS:
      localStorage.setItem("token", payload.token);
      localStorage.setItem("isAuth", true);
      localStorage.setItem("personInfo", JSON.stringify(payload.existUser));
      return {
        ...state,
        personInfo: payload.existUser,
        token: payload.token,
        isAuth: true,
        errors: null,
      };
    case LOGOUT:
      localStorage.clear();
      return { ...state, token: null, userInfo: {}, isAuth: false };
    default:
      return state;
  }
};
export default userReducer ;