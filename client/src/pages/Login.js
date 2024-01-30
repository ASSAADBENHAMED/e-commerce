import { React ,/*  useEffect */ } from "react";
import { useForm } from "react-hook-form";
import { useDispatch ,/*  useSelector */ } from "react-redux";
import { login as loginAction } from "../actions/userActions";
import { useNavigate } from "react-router-dom";
import '../Styles/Login.css';
const Login = () => {
  const dispatch = useDispatch();
  const nav =useNavigate();
  const { register, handleSubmit } = useForm();
  const LoginUser = (data) => {
    console.log(data);
    dispatch(loginAction(data,nav));
  };
  //const {isAuth} = useSelector(state=>state.user.userInfo);
     /*  useEffect(()=> {
       if (isAuth) nav ('/profile');
     }, [isAuth, nav]); */

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit(LoginUser)}>
        <div className="form-field">
          <label>email</label>
          <input required type="email" {...register("email")} />
          <br />
        </div>
        <div className="form-field">
          <label>password</label>
          <input required type="password" {...register("password")} />
          <br />
        </div>
        <button className="btn">Login</button>
      </form>
    </div>
  );
};

export default Login;
