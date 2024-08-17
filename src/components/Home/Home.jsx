// json-server --watch db.json
// json-server --watch db.json --port 3001
// json-server --watch db.json --port 3001 --host 0.0.0

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import BasicTable from '../Table/Table'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
    const [UserData,setUserDate]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:3000/users')
        .then(res => setUserDate(res.data))
        .catch(err => console.log(err))
        }, [])
  return (
    <>
    <div style={{textAlign:'center'}}>Users</div>
    <Button variant='contained' onClick={()=>navigate('/CreateUSer')}>Create User</Button>
    <BasicTable data={UserData}/>
    </>
  )
}

export default Home