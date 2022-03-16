import react, { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography } from '@material-ui/core';
import { addUser } from '../../../Service/api.js';
import { useHistory } from 'react-router-dom';
import { FaUniversity } from 'react-icons/fa';
import SubNav from './NavBar.jsx'

const initialValue = {
    department: '',
    directorName: '',
    email: ''
   
}

const useStyles = makeStyles({
    container: {
        width: '50%',
        margin: '5% 0 0 25%',
        '& > *': {
            marginTop: 20
        }
    }
})

const AddUser = () => {
    const [user, setUser] = useState(initialValue);
    const { department, directorName, email} = user;
    const classes = useStyles();
    let history = useHistory();

    const onValueChange = (e) => {
        console.log(e.target.value);
        setUser({...user, [e.target.name]: e.target.value})
    }

    const addUserDetails = async() => {
        await addUser(user);
       history.push('/department');
    }
    const Return = () =>{
        history.push('/department');
    }

    return (
        <>
        <SubNav/>
        <FormGroup className={classes.container}>
            <Typography variant="h4"> <FaUniversity /> Add Department</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Department</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='department' value={department} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Director Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='directorName' value={directorName} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Email</InputLabel>
                <Input type='email' onChange={(e) => onValueChange(e)} name='email' value={email} id="my-input"/>
            </FormControl>
         
            <FormControl>
                <div className='row'>
                    <div className='col-6 justify-content-center'>
                    <Button variant="contained" color="primary" Style="background-color:green"  onClick={() => addUserDetails()}>Add Department</Button>

                    </div>
                    <div className='col-6'>
                <Button variant="contained"  color="primary" Style="background-color:red" onClick={() => Return()}>Cancel</Button>
                        
                        </div>
                </div>
            </FormControl>
        </FormGroup>
        </>
    )
}

export default AddUser;