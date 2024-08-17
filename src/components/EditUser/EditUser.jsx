import { Button, Paper, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const EditUser = () => {
    const { id } = useParams()
    const [EditUser, setEditUser] = useState({})
    const navigate = useNavigate()
    useEffect(() => {
        axios.get('http://localhost:3000/users/' + id)
            .then((res) => setEditUser(res.data))
            .catch(err => console.log(err))
    }, [])
    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.put('http://localhost:3000/users/'+id, EditUser)
           .then(res => `{alert('User Data Successfully Update');navigate('/')}`)
           .catch(err => console.log(err))
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <Paper elevation={24} sx={{ margin: 20, padding: 5 }}>
                    <Typography sx={{ marginBottom: 5 }}>
                        EDIT User Form
                    </Typography>
                    <TextField onChange={(e) => setEditUser({ ...EditUser, name: e.target.value })} fullWidth variant="outlined" required sx={{ mb: 3 }} value={[EditUser.name]} />
                    <TextField onChange={(e) => setEditUser({ ...EditUser, username: e.target.value })} fullWidth variant="outlined" required sx={{ mb: 3 }} value={[EditUser.username]} />
                    <TextField onChange={(e) => setEditUser({ ...EditUser, email: e.target.value })} fullWidth type='email' variant="outlined" required sx={{ mb: 3 }} value={[EditUser.email]} />
                    <TextField onChange={(e) => setEditUser({ ...EditUser, phone: e.target.value })} fullWidth variant="outlined" required sx={{ mb: 3 }} value={[EditUser.phone]} />
                    <Button fullWidth type="submit" variant="contained" color="primary">Save Edit</Button>
                </Paper>
            </form>
        </>
    )
}

export default EditUser