
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
// import react, { useState, useEffect } from 'react';
// import { Table, TableHead, TableCell, Paper, TableRow, TableBody, Button, makeStyles,AppBar, Toolbar, } from '@material-ui/core'
// import { getTeachers, deleteTeacher } from '../../../Service/api.js';
// import { Link,NavLink } from 'react-router-dom';
// import SubNav from './NavBar.jsx'



const useStyles = makeStyles({
    header:{
        marginTop:'1%',
        backgroundColor:'gray',
        height:'100px'
    },
    table: {
        width: '90%',
        margin: '50px 0 0 50px'
    },
    thead: {
        '& > *': {
            fontSize: 20,
            background: '#000000',
            color: '#FFFFFF'
        }
    },
    row: {
        '& > *': {
            fontSize: 18
        }
    }
})


const AllTeachers = () => {
    const [teachers, setTeachers] = useState([]);
    const classes = useStyles();

    console.log(teachers);
    useEffect(() => {
        getAllTeachers();
    }, []);

    const deleteTeacherData = async (id) => {
        await deleteTeacher(id);
        getAllTeachers();
    }

    const getAllTeachers = async () => {
        let response = await getTeachers();
        console.log(response)
        setTeachers(response.data);
    }

    return (
        <>
       


       <SubNav/>
       <div className='row'>
           <div className="col-6">
           <div className='wrap'>
      
           <a Style=" text-decoration:none; " href="add/teacher">
                <button 
        className="button mt-2 "
         Style="color:white;margin-left:4%;background-color:#F57F26; box-shadow: 'rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px'
         " 
         >Add Teacher</button></a>
         </div>
           </div>
           <div className="col-6">
           <div className='wrap'>
           <a Style="color:white; text-decoration:none; " href="/cal"><button 
        className="button mt-2 "
         Style="color:white;margin-left:4%;background-color:#F57F26; box-shadow: 'rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px'
         " 
         >  CO-PO</button></a>
         </div>
               </div>
       </div>
      
       

        <Table className={classes.table}>
            <TableHead>
                <TableRow className={classes.thead}>
                    <TableCell>Id</TableCell>
                    <TableCell>Teacher Name</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>Email</TableCell>
                   
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {teachers.map((teacher) => (
                  
                    <TableRow className={classes.row} key={teacher.id}>
                        <TableCell>{teacher._id}</TableCell> {/* change it to user.id to use JSON Server */}
                        <TableCell>{teacher.name}</TableCell>
                        <TableCell>{teacher.username}</TableCell>
                        <TableCell>{teacher.email}</TableCell>
                        
                        <TableCell>
                            <Button color="primary" variant="contained" style={{marginRight:10}} component={Link} to={`/edit/teacher/${teacher._id}`}>Edit</Button> {/* change it to user.id to use JSON Server */}
                            <Button color="secondary" variant="contained" onClick={() => deleteTeacherData(teacher._id)}>Delete</Button> {/* change it to user.id to use JSON Server */}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
        </>
    )
}

export default AllTeachers;