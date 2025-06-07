import Button from 'react-bootstrap/Button';
import { InputGroup,Form} from 'react-bootstrap';
import { MdEmail } from "react-icons/md";
import { RiLock2Fill } from "react-icons/ri";
const Login=()=>{
  const handleSubmit=()=>{
    return(
      <>
      
      </>
    )
  }
    return(
        <>
        <div className='formCover'>
        <Form className='myForm'>
      <InputGroup className="mb-3">
  <InputGroup.Text className='inptxt'>
    <MdEmail className='env'/>
  </InputGroup.Text>
  <Form.Control
    type="email"
    placeholder="Enter email"
    className="email"
  />
</InputGroup>
        <Form.Text className="txt">
          We'll never share your email with anyone else.
        </Form.Text>
     
      <InputGroup>
  <InputGroup.Text className='inptxt2'>
    <RiLock2Fill className='env'/>
  </InputGroup.Text>
  <Form.Control
    type="password"
    placeholder="Enter Password"
    className="psw"
  />
</InputGroup>
      
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" className='text-white chk'/>
      </Form.Group>
      <Button className='login' type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
      </div>
        </>
    )
}
export default Login