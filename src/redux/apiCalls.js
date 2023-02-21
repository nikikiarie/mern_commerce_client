import { loginFailure, loginStart, loginSucess } from "./userSlice";
import { publicRequest } from "../makeRequest";


export const login = async (dispatch, user,navigate) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    console.log(res.data);
    dispatch(loginSucess(res.data));
    navigate('/')
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const register = async (user) => {
  try {

  const res = await publicRequest.post('/auth/register',user)
  console.log(res.data)
  } catch {}
};
