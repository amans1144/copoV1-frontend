import { useState, useEffect } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography } from '@material-ui/core';
import { useHistory, useParams } from 'react-router-dom';
import { getUsers, editUser } from '../../../Service/api.js';
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

const EditUser = () => {
    const [user, setUser] = useState(initialValue);
    const { department, directorName, email} = user;
    const { id } = useParams();
    const classes = useStyles();
    let history = useHistory();

    useEffect(() => {
        loadUserDetails();
    }, []);

    const loadUserDetails = async() => {
        const response = await getUsers(id);
        setUser(response.data);
    }

    const editUserDetails = async() => {
        const response = await editUser(id, user);
        history.push('/department');
    }

    const onValueChange = (e) => {
        console.log(e.target.value);
        setUser({...user, [e.target.name]: e.target.value})
    }

    return (
        <>
        <SubNav/>
        <FormGroup className={classes.container}>
            <Typography variant="h4">Edit Department</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">department</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='department' value={department} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Director Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='directorName' value={directorName} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='email' value={email} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
        
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => editUserDetails()}>Edit Department</Button>
            </FormControl>
        </FormGroup>

        </>
    )
}

export default EditUser;