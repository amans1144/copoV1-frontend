import Teacher from '../model/teacher.js';

// Get all teachers
export const getTeachers = async (request, response) => {
    // Step -1 // Test API
    // response.send('Code for Interview');
    try{
        // finding something inside a model is time taking, so we need to add await
        const teachers = await Teacher.find();
        console.log(teachers)
        response.status(200).json(teachers);
    }catch( error ){
        response.status(404).json({ message: error.message })
    }
}
// Save data of the teacher in database
export const addTeacher = async (request, response) => {
    // retreive the info of teacher from frontend
    const teacher = request.body;
    console.log("teacher Inserted")

    const newTeacher = new Teacher(teacher);
    try{
        await newTeacher.save();
        response.status(201).json(newTeacher);
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}

// Get a teacher by id
export const getTeacherById = async (request, response) => {
    try{
        const teacher = await Teacher.findById(request.params.id);
        response.status(200).json(teacher);
    }catch( error ){
        response.status(404).json({ message: error.message })
    }
}

// Save data of edited teacher in the database
export const editTeacher = async (request, response) => {
    let teacher = await Teacher.findById(request.params.id);
    teacher = request.body;

    const editTeacher = new Teacher(teacher);
    try{
        await Teacher.updateOne({_id: request.params.id}, editTeacher);
        response.status(201).json(editTeacher);
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}

// deleting data of teacher from the database
export const deleteTeacher = async (request, response) => {
    try{
        await Teacher.deleteOne({_id: request.params.id});
        response.status(201).json("Teacher deleted Successfully");
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}