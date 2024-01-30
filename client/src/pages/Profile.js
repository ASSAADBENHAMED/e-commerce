import {React,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
const Profile = () => {
  const nav =useNavigate();
  const { isAuth } = useSelector((state) => state.user);
   useEffect(() => {
     if (! isAuth) nav("/login");
   }, [isAuth, nav]);
  return (
    <div>
       
Profile
    </div>
  )
}

export default Profile
