
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import  { useState, useEffect } from 'react';
import { Table, TableHead, TableCell, TableRow, TableBody, Button, makeStyles } from '@material-ui/core'
import { getUsers, deleteUser } from '../../../Service/api.js';
import { Link } from 'react-router-dom';
import SubNav from './NavBar.jsx'
import _ from 'lodash'
import './University.css'
import Spinner2 from '../../../Assets/Images/spinner2.svg'


const useStyles = makeStyles({
    header:{
        marginTop:'1%',
        backgroundColor:'gray',
        height:'100px'
    },
    table: {
        width: '70%',
        margin: ' 0 auto',
        marginTop:'2%',
        boxShadow: 'rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px'
       
    },
    thead: {
        '& > *': {
            fontSize: 20,
            background: '#F57F26',
            color: '#FFFFFF'
        }
    },
    row: {
        '& > *': {
            fontSize: 18
        }
    }
})
const pageSize = 5;

const AllUsers = () => {
    const [users, setUsers] = useState([]);
    const[paginatedList, setPaginatedList] = useState();
    const[items , setItems] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);


    const classes = useStyles();

    useEffect(() => {
        getAllUsers();
        const fetchCal = async () =>{
            let response = await getUsers();
            setItems(response.data);
            setPaginatedList(_(response.data).slice(0).take(pageSize).value());
            }
            fetchCal();
    }, []);

    const deleteUserData = async (id) => {
        await deleteUser(id);
        getAllUsers();
    }

    const getAllUsers = async () => {
        let response = await getUsers();
        setUsers(response.data);
        setPaginatedList(response.data)
    }

    const pageCount = users ? Math.ceil(users.length/pageSize) :0;
console.log(pageCount)
//  if(pageCount === 1 ) return null;
  const pages = _.range(1, pageCount+1)

  const pagination = (pageNo) => {
       setCurrentPage(pageNo);
       const startIndex = (pageNo -1) * pageSize;
       const paginatedList =_(items).slice(startIndex).take(pageSize).value();
       setPaginatedList(paginatedList)
  }

    return (
        <>
       


       <SubNav/>
       <div className='wrap'>
       <a Style=" text-decoration:none; " href="add/department"> <button 
        className="button mt-2 "
         Style="color:white;margin-left:4%;background-color:#F57F26; box-shadow: 'rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px'
         " 
         >Add Department</button></a>
         </div>
 
       {!paginatedList ? <div className='container mt-5 d-flex justify-content-center'> <img src={Spinner2}  Style="max-width:80px; " alt="spinner" /></div>:(
        <Table className={classes.table}>
            <TableHead>
                <TableRow className={classes.thead}>
                    <TableCell>Department</TableCell>
                    <TableCell>Director </TableCell>
                
                    <TableCell>Email</TableCell>
                   
                    <TableCell>Action</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {paginatedList.map((user) => (
                    <TableRow className={classes.row} key={user.id}>
                      {/*  <TableCell>{user._id}</TableCell>  change it to user.id to use JSON Server */}
                        <TableCell>{user.department}</TableCell>
                        <TableCell>{user.directorName}</TableCell>
                        <TableCell>{user.email}</TableCell>
                    
                        <TableCell>
                            <Button color="primary" variant="contained" style={{marginRight:10}} component={Link} to={`/edit/department/${user._id}`}>Edit</Button> {/* change it to user.id to use JSON Server */}
                            <Button color="secondary" variant="contained" onClick={() => deleteUserData(user._id)}>Delete</Button> {/* change it to user.id to use JSON Server */}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
       )}
        <nav className='d-flex justify-content-center mt-3'>
               <ul className='pagination'>
                    {
                         pages.map((page)=>(
                              <li className={
                                   page === currentPage ? "page-item active" : "page-item"
                              }>

                                   <p className='page-link' onClick={() =>pagination(page)}>{page}</p></li>
                         ))
                    }
                 

               </ul>
          </nav>
          
        </>
    )
}

export default AllUsers;