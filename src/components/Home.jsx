import React, { useState } from 'react'
import '../styles/Home.scss'
import {Input , Flex , Button , message} from 'antd'
import {useNavigate } from 'react-router'
const Home = () => {
  let [userId , setUserId] = useState('')
  let [password , setPassword] = useState('')
  
  let navigate = useNavigate()
  const handleLogin = () => {
    if(userId==="Shahrukh11" && password==="12345"){
        message.success('Success!');
        navigate('/appointment')
    }else{
        message.error('Incorrect username or password');
    }
  }
  return (
    <div className='Login'>
        <h1 className='header'>PRAIC</h1>
        <form action="">
            <h2>Sign in</h2>
            <p>Sign in to access your Account</p>
            <Flex vertical gap={8}>
                <Input placeholder='Login' variant="filled" suffix={<span className='icofont icofont-search' />} onChange={(e)=>setUserId(e.target.value)} />
                <Input.Password placeholder='Password' variant="filled" suffix={<span className='icofont icofont-search'/>} onChange={(e)=>setPassword(e.target.value)}  />
            </Flex>
            <div>
                <Flex gap={10} wrap="wrap">
                    <Button  size={'large'} style={{backgroundColor:"#f58633" , color:"white    "}} onClick={handleLogin} >
                        Sign In
                    </Button>
                </Flex>
            </div>
        </form>
    </div>
  )
}

export default Home