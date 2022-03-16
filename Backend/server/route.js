import express from 'express';
import { getUsers, addUser, getUserById, editUser, deleteUser } from '../controller/user-controller.js';
import { getTeachers, addTeacher, getTeacherById, editTeacher, deleteTeacher } from '../controller/teacher-controller.js';
import { getCal,addCal } from '../controller/cal-controller.js';


const router = express.Router();

// univeristy
router.get('/department', getUsers);
router.post('/add', addUser);
router.get('/department/:id', getUserById);
router.put('/edit/department/:id', editUser);
router.delete('/:id', deleteUser);


//teacher
router.get('/teacher', getTeachers);
router.post('/addteacher', addTeacher);
router.get('/teacher/:id', getTeacherById);
router.put('/edit/teacher/:id', editTeacher);
router.delete('/delete/teacher/:id', deleteTeacher);


//cal
router.get('/cal', getCal);
router.post('/addCal', addCal);
export default router;