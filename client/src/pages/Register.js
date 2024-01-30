import React from 'react';
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { register as registerAction} from '../actions/userActions';
import { useNavigate } from "react-router-dom";
import '../Styles/Register.css';

const Register = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const { register, handleSubmit } = useForm();

  const RegisterNewUser = (data) => {
    console.log(data);
    dispatch(registerAction(data,nav));
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit(RegisterNewUser)}>
        <div className="form-field">
          <label>name</label>
          <input required type="text" {...register("name")} />
          <br />
        </div>
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
        <div className="form-field">
          <label>address</label>
          <input required type="text" {...register("address")} />
          <br />
        </div>
        <button  className="btn">Register</button>
      
      </form>
    </div>
  );
}

export default Register;
