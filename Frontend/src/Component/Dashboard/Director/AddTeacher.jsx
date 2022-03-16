import react, { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography } from '@material-ui/core';
import { addTeacher } from '../../../Service/api.js';
import { useHistory } from 'react-router-dom';

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

const AddTeacher = () => {
    const [teacher, setTeacher] = useState(initialValue);
    const { name, username, email} = teacher;
    const classes = useStyles();
    let history = useHistory();

    const onValueChange = (e) => {
        console.log(e.target.value);
        setTeacher({...teacher, [e.target.name]: e.target.value})
    }

    const addTeacherDetails = async() => {
        await addTeacher(teacher);
       history.push('/teacher');
    }
    const Return = () =>{
        history.push('/teacher');
    }

    return (
        <FormGroup className={classes.container}>
            <Typography variant="h4">Add Teacher</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name' value={name} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Username</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='username' value={username} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Email</InputLabel>
                <Input type='email' onChange={(e) => onValueChange(e)} name='email' value={email} id="my-input"/>
            </FormControl>
         
            <FormControl>
                
                <div className='row'>
                    <div className='col-6 justify-content-center'>
                    <Button variant="contained" color="primary" Style="background-color:green"  onClick={() => addTeacherDetails()}>Add Teacher</Button>

                    </div>
                    <div className='col-6'>
                <Button variant="contained"  color="primary" Style="background-color:red" onClick={() => Return()}>Cancel</Button>
                        
                        </div>
                </div>
            </FormControl>
        </FormGroup>
    )
}

export default AddTeacher;