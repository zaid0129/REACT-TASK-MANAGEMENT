import Button from 'react-bootstrap/Button';
import axios from "axios"
import { useState } from 'react';
import { InputGroup,Form} from 'react-bootstrap';
import { MdEmail } from "react-icons/md";
import { RiLock2Fill } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
import BackendUrl from '../Config/BackendUrl';
const Login=()=>{
const [adminId,setAdminid]=useState("")
const[adminPsw,setAdminpsw]=useState("")
  const navigate=useNavigate()
  const handleSubmit=async(e)=>{
    e.preventDefault()
    try{
      let api=`${BackendUrl}loginchk`
      const response=await axios.post(api,{adminId:adminId,adminPsw:adminPsw})
      console.log(response)
      localStorage.setItem("adminUsr",response.data.admin.name)
      navigate("dashboard")
    }
    catch(err){
      console.log(err)
     
    }

   
   
  }
    return(
        <>
       <div className='formCover'>
  <h1 className="vertical-login-css">LOGIN</h1>

  <Form className='myForm'>
    <InputGroup className="mb-3">
      <InputGroup.Text className='inptxt'>
        <MdEmail className='env' />
      </InputGroup.Text>
      <Form.Control
        type="email"
        value={adminId}
        onChange={(e) => setAdminid(e.target.value)}
        placeholder="Enter email"
        className="email"
      />
    </InputGroup>

    <InputGroup>
      <InputGroup.Text className='inptxt2'>
        <RiLock2Fill className='env' />
      </InputGroup.Text>
      <Form.Control
        type="password"
        value={adminPsw}
        onChange={(e) => setAdminpsw(e.target.value)}
        placeholder="Enter Password"
        className="psw"
      />
    </InputGroup>

    <Button className='login' type="submit" onClick={handleSubmit}>
      Login
    </Button>
  </Form>

  <style>
    {`
      .formCover {
        background: #f0fbff;
        padding: 40px;
        border-radius: 20px;
        max-width: 400px;
        margin: 50px auto;
        box-shadow: 0 8px 16px rgba(0, 123, 255, 0.1);
        font-family: 'Poppins', sans-serif;
      }

      .vertical-login-css {
        text-align: center;
        color: #007acc;
        font-size: 32px;
        margin-bottom: 30px;
        font-weight: 600;
      }

      .myForm {
        display: flex;
        flex-direction: column;
        gap: 20px;
      }

      .inptxt,
      .inptxt2 {
        background-color: #cceeff;
        border: none;
        border-radius: 8px 0 0 8px;
        padding: 10px;
        color: #004d66;
        font-size: 18px;
      }

      .email,
      .psw {
        border-radius: 0 8px 8px 0;
        border: 1px solid #b3e5fc;
        padding: 10px;
        font-size: 16px;
        background-color: #ffffff;
        transition: box-shadow 0.2s ease-in-out;
      }

      .email:focus,
      .psw:focus {
        outline: none;
        box-shadow: 0 0 5px #66ccff;
      }

      .env {
        font-size: 20px;
      }

      .login {
        background-color: #00aaff;
        border: none;
        padding: 12px;
        font-size: 16px;
        color: white;
        border-radius: 10px;
        font-weight: 600;
        transition: background-color 0.3s ease;
      }

      .login:hover {
        background-color: #008ecc;
      }
    `}
  </style>
</div>

        </>
    )
}
export default Login