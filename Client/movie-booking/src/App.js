import { useRef } from 'react';
import axios from "axios"
import './App.css';

function App() {

  const email = useRef()
  const password = useRef()
  const mobile = useRef()

  const handleClick = () => {
    const data = {
      email: email.current.value,
      password: password.current.value,
      mobile: mobile.current.value
    }

    axios.post("http://localhost:4000/v1/user/login", data).then((res) => {
      console.log(res.data, "lllllllllllll");
    })
  }


  return (
    <>
      <input type='text' placeholder='Enter a Email' ref={email} />
      <input type='text' placeholder='Enter a password' ref={password} />
      <input type='number' placeholder='Enter a mobile' ref={mobile} />
      <input type='submit' onClick={handleClick} />
    </>
  );
}

export default App;
