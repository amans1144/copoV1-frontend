import { useState, useEffect } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography } from '@material-ui/core';
import { useHistory, useParams } from 'react-router-dom';
import { getTeachers, editTeacher } from '../../../Service/api.js';
import SubNav from './NavBar.jsx'
const initialValue = {
    name: '',
    username: '',
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

const EditTeacher = () => {
    const [user, setUser] = useState(initialValue);
    const { name, username, email } = user;
    const { id } = useParams();
    const classes = useStyles();
    let history = useHistory();

    useEffect(() => {
        loadUserDetails();
    }, []);

    const loadUserDetails = async() => {
        const response = await getTeachers(id);
        setUser(response.data);
    }

    const editUserDetails = async() => {
        const response = await editTeacher(id, user);
        history.push('/teacher');
    }

    const onValueChange = (e) => {
        console.log(e.target.value);
        setUser({...user, [e.target.name]: e.target.value})
    }

    return (
        <>
        <SubNav/>
        <FormGroup className={classes.container}>
            <Typography variant="h4">Edit Teacher</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name' value={name} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Username</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='username' value={username} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='email' value={email} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
         
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => editUserDetails()}>Edit Teacher</Button>
            </FormControl>
        </FormGroup>

        </>
    )
}

export default EditTeacher;