import axios from 'axios';

// const usersUrl = 'http://localhost:3003/users';
const usersUrl = 'http://localhost:9000/users';
const teachersUrl = 'http://localhost:9000/teacher';


export const getUsers = async (id) => {
    id = id || '';
    return await axios.get(`${usersUrl}/department/${id}`);
}

export const addUser = async (user) => {
    return await axios.post(`${usersUrl}/add`, user);
}

export const deleteUser = async (id) => {
    return await axios.delete(`${usersUrl}/${id}`);
}

export const editUser = async (id, user) => {
    return await axios.put(`${usersUrl}/edit/department/${id}`, user)
}

//teacher ***************

export const getTeachers = async (id) => {
    id = id || '';
    return await axios.get(`${teachersUrl}/teacher/${id}`);
}
export const addTeacher = async (teacher) => {
    return await axios.post(`${teachersUrl}/addteacher`, teacher);
}

export const deleteTeacher = async (id) => {
    return await axios.delete(`${teachersUrl}/delete/teacher/${id}`);
}

export const editTeacher = async (id, teacher) => {
    return await axios.put(`${teachersUrl}/edit/teacher/${id}`, teacher)
}

// cal

export const getCal = async (id) => {
    id = id || '';
    return await axios.get(`${usersUrl}/cal/${id}`);
}

export const addCal = async (user) => {
    return await axios.post(`${usersUrl}/addcal`, user);
}

export const deleteCal = async (id) => {
    return await axios.delete(`${usersUrl}/${id}`);
}